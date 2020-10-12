import React from "react";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
          <div className={styles.message}>New event</div>
      </div>
    </div>
  );
}
