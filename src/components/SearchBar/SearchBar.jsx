import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  return (
    <div className={styles.searchTerm}>
      <input type="search" />
      <button className={styles.Agregar} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
}
