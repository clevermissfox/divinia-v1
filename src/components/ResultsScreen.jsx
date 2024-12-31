import Card from "./Card";
import { results } from "../../data";

export default function ResultsScreen({ sign, choices, pathID }) {
  const choicesString = choices.join(", ");
  const result = results.find((result) => result.pathID === pathID);

  return (
    <>
      <h1 className="ta-cen">Your results are...</h1>
      <div className="margin-bs-1">
        {result ? ( // Check if a result was found
          <Card
            cardImg={`src/assets/svgs/icons-signs/icon-sign-${sign.toLowerCase()}.svg`}
            textContent={`From your choices: ${choicesString} Your ${sign} horoscope: ${result.horoscope} Key Dates:
            ${result.keyDates} Action Steps: ${result.actionSteps}`}
          />
        ) : (
          <p>No results found.</p> // Handle case where no result matches
        )}
      </div>
    </>
  );
}
