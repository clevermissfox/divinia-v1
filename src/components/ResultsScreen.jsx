import IconsSigns from "./IconsSigns";
import { results } from "../../data";

export default function ResultsScreen({ sign, choices, pathID }) {
  const choicesString = choices.join(", ");
  const result = results.find((result) => result.pathID === pathID);

  return (
    <>
      <h1 className="ta-cen body-weight">Your results are...</h1>
      <div className="margin-bs-1">
        {result ? ( // Check if a result was found
          <div className="card">
            {sign && (
              <>
                <h2 className="uppercase ls-2 ta-cen">{sign}</h2>
                <IconsSigns
                  id={sign}
                  width={80}
                  style={{ marginInline: "auto", marginBlockStart: "1em" }}
                />
              </>
            )}
            <p className="margin-bs-1half">
              <span className="lg thin ls-1">Your choices:</span>
              <br /> {choicesString}...
            </p>
            <p className="margin-bs-1">
              <span className="lg thin ls-1">Horoscope:</span>
              <br /> {result.horoscope}
            </p>
            <p className="margin-bs-1">
              <span className="lg thin ls-1">Key Dates:</span>
              <br /> {result.keyDates}
            </p>
            <p className="margin-bs-1">
              <span className="lg thin ls-1">Action Steps:</span>
              <br /> {result.actionSteps}
            </p>
          </div>
        ) : (
          <p>No results found.</p> // Handle case where no result matches
        )}
      </div>
    </>
  );
}
