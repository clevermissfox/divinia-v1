import signsSpriteHref from "../../public/assets/icon-signs-sprite.svg";
export default function IconsSigns({ id, ...props }) {
  return (
    <svg viewBox="0 0 64 64" {...props}>
      <use href={`${signsSpriteHref}#${id.toLowerCase()}`} />
    </svg>
  );
}
