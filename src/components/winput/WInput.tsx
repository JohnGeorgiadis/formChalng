import React from "react";
import styles from "./WInput.module.css";

interface WInputProps {
  title: string;
  placeholder: string;
  hasError?: boolean;
  onBlurCallback?: (value: string) => void;
  required?: boolean;
}

export function WInput(props: WInputProps) {
  const getClass = () => {
    return props.required
      ? styles.inputLabel + " " + styles.inputLabelRequired
      : styles.inputLabel;
  };

  const onBlurHandler = (e: any) => {
    props.onBlurCallback && props.onBlurCallback(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="title" className={getClass()}>
        {props.title}
      </label>
      <div className={styles.wInputContent}>
        <input
          className={styles.wInput}
          type="text"
          id="title"
          placeholder={props.placeholder}
          onBlur={(e: any) => onBlurHandler(e)}
        />
        {props.hasError && (
          <div className={styles.errorContent}>This field is required*</div>
        )}
      </div>
    </div>
  );
}
