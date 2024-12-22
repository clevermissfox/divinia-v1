export default function Choice({ onSelect, choice, choiceImg }) {
  return (
    <button onClick={onSelect} className={choiceImg ? `btn-choice` : "btn"}>
      <div className="img-wrapper">
        {choiceImg && <img src={choiceImg} alt={choice} />}
      </div>
      {choice}
    </button>
  );
}
