import IconsSigns from "./IconsSigns";
import { results } from "../../data";

export default function ResultsScreen({ sign, choices, pathID }) {
  const choicesString = choices.join(", ");
  const result = results.find((result) => result.pathID === pathID);

  return (
    <>
      <div>
        {result ? ( // Check if a result was found
          <div className="card card-results">
            {sign && (
              <>
                <h1 className="uppercase ls-2 ta-cen body-weight">{sign}</h1>
                <IconsSigns
                  id={sign}
                  width={80}
                  fill="currentColor"
                  style={{ marginInline: "auto", marginBlockStart: "1em" }}
                />
              </>
            )}
            <div className="margin-bs-2">
              <span className="lg thin ls-1">Your choices:</span>
              <p>{choicesString}...</p>
            </div>
            <div className="margin-bs-1half">
              <span className="lg thin ls-1">Horoscope:</span>
              {result.horoscope.split("\n").map((text, index) => (
                <p key={index} className={index > 0 ? "margin-bs-1" : ""}>
                  {text.trim()}
                </p>
              ))}
            </div>
          </div>
        ) : (
          <p>No results found.</p> // Handle case where no result matches
        )}
      </div>
    </>
  );
}
