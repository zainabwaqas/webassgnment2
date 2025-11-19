import React from "react";
import styles from "./card.module.css";

export default function Card({ title, body }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardBody}>{body}</p>
    </div>
  );
}
