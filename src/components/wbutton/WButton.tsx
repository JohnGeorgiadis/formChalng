import React from "react";
import styles from "./WButton.module.css";

interface WButtonProps {
  content: string;
  onClick: () => void;
}

export function WButton(props: WButtonProps) {
  return (
    <div className={styles.container}>
      <button className={styles.wButton} id="confirmButton" onClick={props.onClick}>{props.content}</button>
    </div>
  );
}
