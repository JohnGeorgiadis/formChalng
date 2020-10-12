import React, { ChangeEvent } from "react";
import styles from "./WInputNumber.module.css";

interface WInputNumberProps {
  title: string;
  inputName: string;
  placeholder: string;
  min: number;
  sideLabel: string;
  onBlurCallback?: (value: number) => void;
}

export function WInputNumber(props: WInputNumberProps) {
  const onBlurHandler = (e: ChangeEvent) => {
    props.onBlurCallback &&
      props.onBlurCallback(Number((e.target as HTMLInputElement).value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.inputNumberLabel}>{props.title}</label>
      <div className={styles.inputContainer}>
        <input
          type="number"
          name={props.inputName}
          placeholder={props.placeholder}
          min={props.min}
          className={styles.inputNumber}
          onBlur={(e: ChangeEvent) => onBlurHandler(e)}
        />
        <span>{props.sideLabel}</span>
      </div>
    </div>
  );
}
