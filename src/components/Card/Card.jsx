import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.div}>
      <div className={styles.card}>
        <button className={styles.Closebutton} onClick={props.onClose}>
          X
        </button>
        <Link to={`/detail/${props.id}`}>
          <h2 className={styles.text}>{props.name}</h2>
        </Link>
        <h2 className={styles.text}>{props.species}</h2>
        <h2 className={styles.text}>{props.gender}</h2>
        <img src={props.image} alt="Imagen del pj" />
      </div>
    </div>
  );
}
