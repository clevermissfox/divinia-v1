export default function Choice({ onSelect, choice }) {
  return <button onClick={onSelect}>{choice}</button>;
}
