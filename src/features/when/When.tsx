import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectDateError,
  selectTimeError,
  setDate,
  setDuration,
  setTime,
} from "./whenSlice";
import { WInputNumber, WDateTime } from "../../components";

import styles from "./When.module.css";

export function When() {
  const dispatch = useDispatch();

  const hasDateError = useSelector(selectDateError);
  const hasTimeError = useSelector(selectTimeError);

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>When</div>
      <WDateTime
        title="STARTS ON"
        onBlurDateCallback={(value) => dispatch(setDate(value))}
        onBlurTimeCallback={(value) => dispatch(setTime(value))}
        hasError={hasTimeError || hasDateError}
      />
      <WInputNumber
        title="DURATION"
        inputName="duration"
        placeholder="Number"
        min={0}
        sideLabel="hour"
        onBlurCallback={(value) => dispatch(setDuration(value))}
      />
    </div>
  );
}
