import styles from "./Tariff.css";

function Tariff(props) {
  return (
    <div
      className={
        styles.card + (props.tariff.isSelected ? " " + styles.selected : "")
      }
    >
      <div
        className={styles.name}
        style={{ backgroundColor: props.tariff.colorName }}
      >
        {props.tariff.name}
      </div>
      <div
        className={styles.price}
        style={{ backgroundColor: props.tariff.color }}
      >
        <div className={styles.price_value}>{props.tariff.price}</div>
      </div>
      <div className={styles.speed}>До {props.tariff.speed} Мбит/сек</div>
      <div className={styles.details}>{props.tariff.details}</div>
    </div>
  );
}

export default Tariff;
