import styles from "./Card.module.css";

export default function Card(props) {
  return (
    <div className={styles.div}>
      <div className={styles.card}>
        <button className={styles.Closebutton} onClick={onclose}>
          X
        </button>
        <h2>{props.name}</h2>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
        <img src={props.image} alt="Imagen del pj" />
      </div>
    </div>
  );
}
