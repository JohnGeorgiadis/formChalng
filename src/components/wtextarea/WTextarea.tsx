import React, { ChangeEvent, useState } from "react";
import styles from "./WTextarea.module.css";

interface WTextareaProps {
  title: string;
  placeholder: string;
  maxLength: number;
  required?: boolean;
  hasError?: boolean;
  onBlurCallback?: (value: string) => void;
}

export function WTextarea(props: WTextareaProps) {
  const getClass = () => {
    return props.required
      ? styles.textareaLabel + " " + styles.textareaLabelRequired
      : styles.textareaLabel;
  };

  const [countChar, setCountChar] = useState(0);

  const handleOnChange = (e: ChangeEvent) => {
    setCountChar((e.target as HTMLInputElement).value.length);
  };

  const onBlurHandler = (e: any) => {
    props.onBlurCallback && props.onBlurCallback(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="description" className={getClass()}>
        {props.title}
      </label>
      <div className={styles.wTextareaContent}>
        <textarea
          id="description"
          className={styles.wTextArea}
          maxLength={props.maxLength}
          placeholder={props.placeholder}
          onChange={(e: ChangeEvent) => handleOnChange(e)}
          onBlur={(e: any) => onBlurHandler(e)}
        />

        <div className={styles.wWordCount}>
          <span>word limit</span>
          <span className={styles.wWordTotal}>
            {countChar}/{props.maxLength}
          </span>
        </div>

        {props.hasError && (
          <div className={styles.errorContent}>This field is required*</div>
        )}
      </div>
    </div>
  );
}
