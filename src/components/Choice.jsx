export default function Choice({ onSelect, choice, description }) {
  return (
    <button onClick={onSelect}>
      <h2 className="ls-1 thin">{choice}</h2>
      <p className="margin-bs-half">{description}</p>
    </button>
  );
}
