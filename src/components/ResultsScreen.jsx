import Card from "./Card";

export default function ResultsScreen({ sign, choices }) {
  const choicesString = choices.join(", ");
  return (
    <>
      <h1 className="ta-cen">Your results are...</h1>
      <div className="margin-bs-1">
        <Card
          cardImg={`src/assets/svgs/icons-signs/icon-sign-${sign.toLowerCase()}.svg`}
          textContent={`As a ${sign}, your horoscope today shows that you've had some struggles lately and are trying to keep your chin up. Based on your choices of ${choicesString}...`}
        />
      </div>
    </>
  );
}
