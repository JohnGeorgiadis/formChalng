import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  fetchResponsibleOptions,
  responsibleOptions,
  selectEmailError,
  selectIdError,
  setEmail,
  setId,
} from "./coordinatorSlice";
import { WSelect, WEmail } from "../../components";

import styles from "./Coordinator.module.css";

export function Coordinator() {
  const dispatch = useDispatch();

  const emailRef = useRef();

  const options = useSelector(responsibleOptions);
  const hasIdError = useSelector(selectIdError);
  const hasEmailError = useSelector(selectEmailError);

  const [email, setEmailContent] = useState("");

  const handleSelectOnChange = (value: number) => {
    dispatch(setId(value));
    setEmailContent(options[value].email);
  };

  const handleEmailOnChange = (value: string) => {
    dispatch(setEmail(value));
    setEmailContent(value);
  };

  useEffect(() => {
    dispatch(fetchResponsibleOptions());
  }, [dispatch]);

  useEffect(() => {
    if (email.length > 0) {
      //@ts-ignore
      emailRef.current.focus();
    }
  }, [email]);

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>Coordinator</div>
      <WSelect
        title="RESPONSIBLE"
        options={[{ id: -1, name: "Select category" }, ...options]}
        defaultValue={-1}
        required
        hasError={hasIdError}
        onChangeCallback={(value) => handleSelectOnChange(value)}
      />

      <WEmail
        title="EMAIL"
        placeholder="Email"
        hasError={hasEmailError}
        value={email}
        reference={emailRef}
        onChangeCallback={(e: any) => handleEmailOnChange(e.target.value)}
        onBlurCallback={(value: string) => dispatch(setEmail(value))}
      />
    </div>
  );
}
