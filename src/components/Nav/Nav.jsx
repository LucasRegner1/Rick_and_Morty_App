import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.div}>
        <Link to="/" className={styles.link}>
          LOGOUT
        </Link>
      </div>
      <div className={styles.div}>
        <Link to="/about" className={styles.link}>
          About
        </Link>
      </div>
      <div className={styles.div}>
        <Link to="/home" className={styles.link}>
          Home
        </Link>
      </div>
      <div className={styles.div}>
        <Link to="/favorites" className={styles.link}>
          Favorites
        </Link>
      </div>
      <div className={styles.div}>
        <SearchBar onSearch={onSearch} />
      </div>
    </nav>
  );
};

export default Nav;
