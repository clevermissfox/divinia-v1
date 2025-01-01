import Card from "./Card";
import { results } from "../../data";
import { useState, useEffect } from "react";

export default function ResultsScreen({ sign, choices, pathID }) {
  const [imgSrc, setImgSrc] = useState("");
  const choicesString = choices.join(", ");
  const result = results.find((result) => result.pathID === pathID);

  useEffect(() => {
    import(`../assets/svgs/icons-signs/icon-sign-${sign.toLowerCase()}.svg`)
      .then((module) => setImgSrc(module.default))
      .catch((error) => console.error("Error loading SVG:", error));
  }, [sign]);

  return (
    <>
      <h1 className="ta-cen">Your results are...</h1>
      <div className="margin-bs-1">
        {result ? ( // Check if a result was found
          <Card
            cardImg={imgSrc}
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
