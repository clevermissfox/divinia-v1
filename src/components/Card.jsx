import IconsSigns from "./IconsSigns";

export default function Card({ textContent, sign }) {
  return (
    <div className="card">
      {sign && (
        <IconsSigns id={sign} width={80} style={{ marginInline: "auto" }} />
      )}
      {textContent}
    </div>
  );
}
