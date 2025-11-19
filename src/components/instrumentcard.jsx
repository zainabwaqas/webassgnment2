import React from "react";
import styles from "./instrumentcard.module.css";

export default function InstrumentCard({ instrument }) {
  return (
    <div className={styles.card}>
      <img src={instrument.img} alt={instrument.name} className={styles.cardImage} />
      <h3 className={styles.cardName}>{instrument.name}</h3>
      <p className={styles.cardDesc}>{instrument.desc}</p>
    </div>
  );
}
