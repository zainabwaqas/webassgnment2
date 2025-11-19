import React from "react";
import styles from "./instrumentcard.module.css";

export default function InstrumentCard({ title, image }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{title}</h3>
    </div>
  );
}
