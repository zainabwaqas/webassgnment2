// src/components/Header.jsx
import { Link } from "react-router-dom";
import ThemeToggle from "./theme";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <h1>Groove Gali</h1>
        <p>Bringing you the sound of Pakistan</p>
      </div>

      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/instruments">Instruments</Link>
        <Link to="/singers">Singers</Link>
        <Link to="/history">History</Link>
        <Link to="/trending">Trending</Link>
        <Link to="/contact">Contact</Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
