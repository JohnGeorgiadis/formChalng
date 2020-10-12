import React from "react";
import styles from "./WDateTime.module.css";

interface WDateTimeProps {
  title: string;
  hasError?: boolean;
  onBlurDateCallback?: (value: Date) => void;
  onBlurTimeCallback?: (value: string) => void;
  required?: boolean;
}

export function WDateTime(props: WDateTimeProps) {
  const onBlurDateHandler = (e: any) => {
    props.onBlurDateCallback && props.onBlurDateCallback(e.target.value);
  };

  const onBlurTimeHandler = (e: any) => {
    props.onBlurTimeCallback && props.onBlurTimeCallback(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label htmlFor="date" className={styles.wDateLabel}>
        {props.title}
      </label>
      <div className={styles.wDateTimeContent}>
        <input
          id="date"
          className={styles.wDate}
          type="date"
          onBlur={(e: any) => onBlurDateHandler(e)}
        />
        <span className={styles.separator}>at</span>
        <input
          id="time"
          className={styles.wTime}
          type="time"
          onBlur={(e: any) => onBlurTimeHandler(e)}
        />
        {props.hasError && (
          <div className={styles.errorContent}>
            Both of these fields are required*{" "}
          </div>
        )}
      </div>
    </div>
  );
}
