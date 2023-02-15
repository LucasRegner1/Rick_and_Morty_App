import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/action";

export default function Card(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorite(props.id));
    } else {
      setIsFav(true);
      dispatch(addFavorite(props));
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={styles.div}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

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
