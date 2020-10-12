import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  WInput,
  WTextarea,
  WSelect,
  WGroupCheckbox,
  WInputNumber,
} from "../../components";
import {
  setTitle,
  fetchCategoryOptions,
  categoryOptions,
  selectTitleError,
  setDescription,
  setCategoryId,
  setPaidEvent,
  setEventFee,
  setReward,
  selectDescriptionError,
  selectEventFeeError,
} from "./aboutSlice";
  
import styles from "./About.module.css";

export function About() {
  const dispatch = useDispatch();

  const options = useSelector(categoryOptions);
  const hasTitleError = useSelector(selectTitleError);
  const hasDescriptionError = useSelector(selectDescriptionError);
  const hasEvenFeeError = useSelector(selectEventFeeError);

  useEffect(() => {
    dispatch(fetchCategoryOptions());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>About</div>

      <WInput
        title="TITLE"
        required
        placeholder="Make it short and clear"
        hasError={hasTitleError}
        onBlurCallback={(value) => dispatch(setTitle(value))}
      />

      <WTextarea
        title="DESCRIPTION"
        required
        placeholder="Write about your event, be creative"
        maxLength={140}
        hasError={hasDescriptionError}
        onBlurCallback={(value) => dispatch(setDescription(value))}
      />

      <WSelect
        title="CATEGORY"
        options={[{ id: -1, name: "Select category" }, ...options]}
        defaultValue={-1}
        onChangeCallback={(value) => dispatch(setCategoryId(value))}
      />

      <WGroupCheckbox
        title="PAYMENT"
        options={[
          { name: "eventType", value: "free", title: "Free event" },
          { name: "eventType", value: "paid", title: "Paid event" },
        ]}
        inputName="Fee"
        inputPlaceholder="Fee"
        hasError={hasEvenFeeError}
        onChangeCallback={(value) => dispatch(setPaidEvent(value))}
        OnFeeInputBlurCallback={(value) => dispatch(setEventFee(value))}
      />

      <WInputNumber
        title="Reward"
        inputName="reward"
        placeholder="Number"
        min={0}
        sideLabel="reward points for attendance"
        onBlurCallback={(value) => dispatch(setReward(value))}
      />
    </div>
  );
}
