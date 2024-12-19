export default function Card({ textContent, cardImg }) {
  return (
    <div className="card">
      {cardImg && <img src={cardImg} alt="" className="margin-i-auto" />}
      {textContent}
    </div>
  );
}
