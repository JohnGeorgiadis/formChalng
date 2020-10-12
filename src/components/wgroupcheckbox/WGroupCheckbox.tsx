import React, { ChangeEvent, useState } from "react";
import styles from "./WGroupCheckbox.module.css";

interface WGroupCheckboxProps {
  title: string;
  options: { name: string; value: string; title: string }[];
  inputPlaceholder: string;
  inputName: string;
  hasError?: boolean;
  onChangeCallback?: (value: boolean) => void;
  OnFeeInputBlurCallback?: (value: number) => void;
}

export function WGroupCheckbox(props: WGroupCheckboxProps) {
  const [isPaid, setIsPaid] = useState(false);

  const onChangeHandler = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    setIsPaid(value === "paid");
    props.onChangeCallback && props.onChangeCallback(value === "paid");
  };

  const onFeeInputBlurHandler = (e: ChangeEvent) => {
    const value = (e.target as HTMLInputElement).value;
    props.OnFeeInputBlurCallback && props.OnFeeInputBlurCallback(Number(value));
  };

  return (
    <div className={styles.container}>
      <label className={styles.groupCheckboxLabel}>{props.title}</label>

      <div className={styles.groupCheckbox}>
        {props.options.map((option) => {
          return (
            <span key={option.title}>
              <input
                type="radio"
                name={option.name}
                value={option.value}
                onChange={(e: ChangeEvent) => onChangeHandler(e)}
              />
              <label htmlFor={option.name}>{option.title}</label>
            </span>
          );
        })}

        {isPaid && (
          <span>
            <input
              type="number"
              name={props.inputName}
              placeholder={props.inputPlaceholder}
              className={styles.groupCheckboxInput}
              onBlur={(e) => onFeeInputBlurHandler(e)}
            />{" "}
            $
          </span>
        )}

        {props.hasError && (
          <div className={styles.errorContent}>This field is required*</div>
        )}
      </div>
    </div>
  );
}
