import IconsSigns from "./IconsSigns";
import styles from "./SymbolWheel.module.css";
export default function SymbolWheel() {
  return (
    <ul className={` signs-list ${styles["signs-list"]}`}>
      <li className={styles["signs-item"]}>
        <IconsSigns id="aquarius" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="aries" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="cancer" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="capricorn" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="gemini" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="leo" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="libra" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="pisces" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="sagittarius" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="scorpio" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="taurus" width={64} fill="currentColor" />
      </li>
      <li className={styles["signs-item"]}>
        <IconsSigns id="virgo" width={64} fill="currentColor" />
      </li>
    </ul>
  );
}
