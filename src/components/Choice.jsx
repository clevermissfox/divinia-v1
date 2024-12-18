export default function Choice({ onSelect, choice, choiceImg }) {
  return (
    <button onClick={onSelect} className={choiceImg ? `btn-choice` : ""}>
      <div className="img-wrapper">
        {choiceImg && <img src={choiceImg} alt={choice} />}
      </div>
      {choice}
    </button>
  );
}
