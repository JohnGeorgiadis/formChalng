import React from "react";
import styles from "./WSelect.module.css";

interface WSelectProps {
  title: string;
  options: { id: number; name: string }[];
  defaultValue: number;
  required?: boolean;
  hasError?: boolean;
  onChangeCallback?: (id: number) => void;
}

export function WSelect(props: WSelectProps) {
  const getClass = () => {
    return props.required
      ? styles.wSelectLabel + " " + styles.wSelectLabelRequired
      : styles.wSelectLabel;
  };

  const onChangeHandler = (e: any) => {
    props.onChangeCallback && props.onChangeCallback(Number(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor={props.title} className={getClass()}>
        {props.title}
      </label>
      <div className={styles.wSelectContent}>
        <select
          id="category"
          name={props.title}
          className={styles.wSelect}
          defaultValue={props.defaultValue}
          onChange={(e) => onChangeHandler(e)}
        >
          {props.options.map((option) =>
            props.defaultValue === option.id ? (
              <option value={option.id} disabled hidden key={option.name}>
                {option.name}
              </option>
            ) : (
              <option value={option.id} key={option.name}>
                {option.name}
              </option>
            )
          )}
        </select>
        {props.hasError && (
          <div className={styles.errorContent}>This field is required*</div>
        )}
      </div>
    </div>
  );
}
