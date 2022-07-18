import styles from "./Tariff.css";

function Tariff({
  id,
  name,
  colorName,
  color,
  price,
  speed,
  details,
  isSelected,
  onSelect,
}) {
  return (
    <div
      onClick={() => onSelect(id)}
      className={styles.card + (isSelected ? " " + styles.selected : "")}
    >
      <div className={styles.name} style={{ backgroundColor: colorName }}>
        {name}
      </div>
      <div className={styles.price} style={{ backgroundColor: color }}>
        <sup>руб</sup>
        {price}
        <span>/мес</span>
      </div>
      <div className={styles.speed}>До {speed} Мбит/сек</div>
      <div className={styles.details}>{details}</div>
    </div>
  );
}

export default Tariff;
