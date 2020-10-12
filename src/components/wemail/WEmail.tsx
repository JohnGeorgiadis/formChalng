import React from "react";
import styles from "./WEmail.module.css";

interface WEmailProps {
  title: string;
  placeholder: string;
  value?: string;
  hasError?: boolean;
  reference?: any;
  onBlurCallback?: (value: string) => void;
  onChangeCallback?: (e: any) => void;
}

export function WEmail(props: WEmailProps) {
  const onBlurHandler = (e: any) => {
    props.onBlurCallback && props.onBlurCallback(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="email" className={styles.wEmailLabel}>
        {props.title}
      </label>
      <div className={styles.wEmailContent}>
        <input
          className={styles.wEmail}
          type="email"
          id="email"
          value={props.value}
          placeholder={props.placeholder}
          ref={props.reference}
          onChange={(e: any) =>
            props.onChangeCallback && props.onChangeCallback(e)
          }
          onBlur={(e: any) => onBlurHandler(e)}
        />
        {props.hasError && (
          <div className={styles.errorContent}>
            Please correct the email's format
          </div>
        )}
      </div>
    </div>
  );
}
