import { useEffect, useReducer, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebaseClient";
import "./App.css";
import ChoiceStage from "./components/ChoiceStage";
import ResultsScreen from "./components/ResultsScreen";
import AuthForm from "./components/AuthForm";
import LandingPage from "./components/LandingPage";

import allOptions from "../data";
import { narratives } from "../data";
import IconsSigns from "./components/IconsSigns";
import SymbolWheel from "./components/SymbolWheel";
import UserProfile from "./components/UserProfile";

const initialState = {
  stage: 0,
  choices: [],
  currentOptions: allOptions,
  pathID: 0,
  currentNarrative: getNarrative(0),
  //make sure we set pathID with every choice made to get the correct narrative
};

function reducer(state, action) {
  switch (action.type) {
    case "MAKE_CHOICE":
      const newStage = state.stage + 1;
      const newChoices = [...state.choices, action.payload];
      const newCurrentOptions = getNextOptions(
        state.currentOptions,
        action.payload
      );
      const newPathID =
        newStage < 4
          ? getPathID(newChoices) // Get pathID based on last choice
          : state.pathID; // Keep existing pathID if not at stage 3
      const newNarrative = getNarrative(newPathID);
      return {
        ...state,
        stage: newStage,
        choices: newChoices,
        currentOptions: newCurrentOptions,
        pathID: newPathID,
        currentNarrative: newNarrative,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function getNextOptions(currentOptions, choice) {
  if (Array.isArray(currentOptions)) {
    const selectedOption = currentOptions.find(
      (option) => option.scene === choice
    );
    return selectedOption ? selectedOption.nextOptions : null;
  } else if (currentOptions && currentOptions.nextOptions) {
    const selectedOption = currentOptions.nextOptions.find(
      (option) => option.scene === choice
    );
    return selectedOption ? selectedOption.nextOptions : null;
  }
  return null;
}

function getPathID(choices) {
  if (choices.length === 0) return 0; // Initial state

  if (choices.length === 1) {
    // First choice
    const firstChoice = choices[0];
    const option = allOptions.find((opt) => opt.scene === firstChoice);
    return option ? option.id : null;
  }

  if (choices.length === 2) {
    // Second choice
    const [firstChoice, secondChoice] = choices;
    const option = allOptions.find((opt) => opt.scene === firstChoice);
    if (option && option.nextOptions) {
      const subOption = option.nextOptions.find(
        (opt) => opt.scene === secondChoice
      );
      return subOption ? subOption.id : null;
    }
  }

  // Third choice (existing logic)
  const lastChoice = choices[choices.length - 1];
  for (const option of allOptions) {
    for (const nextOption of option.nextOptions || []) {
      const deeperFoundOption = nextOption.nextOptions?.find(
        (deepNextOption) => deepNextOption.scene === lastChoice
      );
      if (deeperFoundOption) {
        return deeperFoundOption.pathID;
      }
    }
  }

  return null; // If no matching option is found
}

// function getPathID(choices) {
//   const lastChoice = choices[choices.length - 1]; // Get the last choice made by the user

//   // Search through all options and their nextOptions
//   for (const option of allOptions) {
//     const foundOption = option.nextOptions?.find(
//       (nextOption) => nextOption.scene === lastChoice
//     );
//     if (foundOption) {
//       console.log("Selected Option Found:", foundOption); // Log found option
//       return foundOption.pathID; // Return pathID if found
//     }

//     // If nextOptions are nested further, you might need to check deeper levels
//     for (const nextOption of option.nextOptions || []) {
//       const deeperFoundOption = nextOption.nextOptions?.find(
//         (deepNextOption) => deepNextOption.scene === lastChoice
//       );
//       if (deeperFoundOption) {
//         console.log("Deeper Selected Option Found:", deeperFoundOption); // Log found option
//         return deeperFoundOption.pathID; // Return pathID if found
//       }
//     }
//   }

//   return null; // Return null if no matching option is found
// }

function getNarrative(pathID) {
  return narratives.find((narrative) => narrative.pathID === +pathID) || null;
}

// Handle user sign out
function handleSignOut() {
  signOut(auth).catch((error) => {
    console.error("Error signing out:", error);
  });
}

// handle auth form submission
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user if logged in, null otherwise
    });
    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const handleChoice = (choice) => {
    dispatch({ type: "MAKE_CHOICE", payload: choice });
  };

  useEffect(() => {
    console.log("stage", state.stage);
    console.log("pathID", state.pathID);
  }, [state.stage, state.pathID]);

  return (
    <>
      <div className="wrapper">
        {user ? (
          <>
            {/* Render Sign Out button */}
            <button
              onClick={handleSignOut}
              aria-label="Sign out"
              title="Sign out"
              className="btn-signout"
            >
              <i
                className="fa-solid fa-arrow-right-from-bracket"
                aria-hidden="true"
              ></i>
            </button>
            {/*  <UserProfile />
            Render ChoiceStage or ResultsScreens */}
            {state.stage < 3 ? (
              <ChoiceStage
                options={state.currentOptions}
                narrative={state.currentNarrative?.narrative || ""}
                onSelect={handleChoice}
              />
            ) : (
              <ResultsScreen
                choices={state.choices}
                pathID={state.pathID}
                sign="Sagittarius"
              />
            )}
          </>
        ) : (
          // Render AuthForm if user is not logged in
          <>
            <h2 className="uppercase body-weight ls-2">Divinia</h2>
            <p className="lowercase thin">Where Choice Meets Destiny...</p>
            <SymbolWheel />
            {/* <LandingPage /> */}
            <div className="margin-bs-1">
              <AuthForm
                isSignUp={false}
                handleSubmit={(e) => handleSubmit(e)}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
