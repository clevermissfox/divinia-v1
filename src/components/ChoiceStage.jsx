import Choice from "./Choice";

export default function ChoiceStage({ options, onSelect }) {
  return (
    <>
      <h1 className="ta-cen">Make your choice...</h1>
      <ul className="choices-list margin-bs-1">
        {options.map((option) => (
          <li key={option} className="choices-option">
            <Choice choice={option} onSelect={() => onSelect(option)} />
          </li>
        ))}
      </ul>
    </>
  );
}
