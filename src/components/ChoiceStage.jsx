import Choice from "./Choice";

export default function ChoiceStage({ options, onSelect }) {
  return (
    <>
      <p>Choice Stage</p>
      <ul className="choices-list">
        {options.map((option) => (
          <li key={option}>
            <Choice choice={option} onSelect={() => onSelect(option)} />
          </li>
        ))}
      </ul>
    </>
  );
}
