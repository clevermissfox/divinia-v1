import { useReducer } from "react";
import "./App.css";
import ChoiceStage from "./components/ChoiceStage";
import ResultsScreen from "./components/ResultsScreen";

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

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChoice = (choice) => {
    dispatch({ type: "MAKE_CHOICE", payload: choice });
  };

  return (
    <>
      <h1 className="ta-cen">Make a choice</h1>

      <div>
        {state.stage < 3 ? (
          <ChoiceStage options={state.currentOptions} onSelect={handleChoice} />
        ) : (
          <ResultsScreen choices={state.choices} />
        )}
      </div>
    </>
  );
}

export default App;
