import React from "react";
import styles from "./WSuccess.module.css";

interface WSuccessProps {
  title: string;
  message: string;
}

export function WSuccess(props: WSuccessProps) {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.message}>{props.message}</div>
    </div>
  );
}
