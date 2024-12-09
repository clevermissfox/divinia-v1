import Card from "./Card";

export default function ResultsScreen({ sign, choices }) {
  return (
    <>
      <h1 className="ta-cen">Your results are...</h1>
      <div className="margin-bs-1">
        <Card
          textContent={`As a ${sign}, your horoscope today shows that you've had some struggles lately and are trying to keep your chin up. Based on your choices of ${choices}... `}
        />
      </div>
    </>
  );
}
