import { useEffect, useReducer, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config/firebaseClient";
import "./App.css";
import ChoiceStage from "./components/ChoiceStage";
import ResultsScreen from "./components/ResultsScreen";
import AuthForm from "./components/AuthForm";
import LandingPage from "./components/LandingPage";

const allOptions = {
  0: ["candlestick", "bookshelf", "sword"],
  1: {
    candlestick: ["mirror", "lamp", "candle"],
    bookshelf: ["novel", "textbook", "comic"],
    sword: ["shield", "armor", "helmet"],
  },
  2: {
    mirror: ["look", "break", "ignore"],
    lamp: ["light", "rub", "sell"],
    candle: ["light", "melt", "snuff"],
    novel: ["read", "skim", "close"],
    textbook: ["study", "flip", "highlight"],
    comic: ["laugh", "collect", "trade"],
    shield: ["polish", "bash", "discard"],
    armor: ["wear", "display", "sell"],
    helmet: ["don", "examine", "toss"],
  },
};

const initialState = {
  stage: 0,
  choices: [],
  currentOptions: allOptions[0],
};

function reducer(state, action) {
  switch (action.type) {
    case "MAKE_CHOICE":
      const newStage = state.stage + 1;
      const newChoices = [...state.choices, action.payload];
      return {
        ...state,
        stage: newStage,
        choices: newChoices,
        currentOptions: getNextOptions(newStage, newChoices),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

function getNextOptions(stage, choices) {
  if (stage === 1) {
    return allOptions[1][choices[0]];
  } else if (stage === 2) {
    return allOptions[2][choices[1]];
  }
  return [];
}

{
  /* Handle user sign out */
}
function handleSignOut() {
  signOut(auth).catch((error) => {
    console.error("Error signing out:", error);
  });
}

function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  console.log("form submitted", formData);
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

            {/* Render ChoiceStage or ResultsScreen */}
            {state.stage < 3 ? (
              <ChoiceStage
                options={state.currentOptions}
                onSelect={handleChoice}
              />
            ) : (
              <ResultsScreen choices={state.choices} sign="Leo" />
            )}
          </>
        ) : (
          // Render AuthForm if user is not logged in
          <>
            <h2>Divinia</h2>
            <p>Where Choice Meets Destiny...</p>
            {/* <LandingPage />
            <AuthForm isSignUp={true} handleSubmit={(e) => handleSubmit(e)} /> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
