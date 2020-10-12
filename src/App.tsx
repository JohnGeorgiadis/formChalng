import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDescription,
  selectTitle,
  selectCategoryId,
  selectPaidEvent,
  selectEventFee,
  selectReward,
  setDescriptionError,
  setTitleError,
  setEventFeeError,
  selectTitleError,
  selectDescriptionError,
  selectEventFeeError,
} from "./features/about/aboutSlice";
import { Header, About, Coordinator, When } from "./features";
import "./App.css";
import { WButton, WSuccess } from "./components";
import {
  selectEmail,
  selectEmailError,
  selectId,
  selectIdError,
  setEmailError,
  setIdError,
} from "./features/coordinator/coordinatorSlice";
import {
  selectDate,
  selectDateError,
  selectDuration,
  selectTime,
  selectTimeError,
  setDateError,
  setTimeError,
} from "./features/when/whenSlice";

function App() {
  const dispatch = useDispatch();

  const [isValidForm, setIsValidForm] = useState(false);

  const title = useSelector(selectTitle);
  const description = useSelector(selectDescription);
  const categoryId = useSelector(selectCategoryId);
  const isPaidEvent = useSelector(selectPaidEvent);
  const eventFee = useSelector(selectEventFee);
  const reward = useSelector(selectReward);

  const responsibleId = useSelector(selectId);
  const email = useSelector(selectEmail);

  const startDate = useSelector(selectDate);
  const startTime = useSelector(selectTime);
  const eventDuration = useSelector(selectDuration);

  const hasTitleError = useSelector(selectTitleError);
  const hasDescriptionError = useSelector(selectDescriptionError);
  const hasEventFeeError = useSelector(selectEventFeeError);
  const hasCoordinatorIdError = useSelector(selectIdError);
  const hasEmailError = useSelector(selectEmailError);
  const hasDateError = useSelector(selectDateError);
  const hasTimeError = useSelector(selectTimeError);

  const isProperEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateAndPrintData = () => {
    dispatch(setTitleError(!title.length));

    dispatch(setDescriptionError(!description.length));

    dispatch(setEventFeeError(isPaidEvent && eventFee <= 0));

    dispatch(setIdError(responsibleId === null));

    dispatch(setEmailError(!isProperEmail(email)));

    dispatch(setDateError(startDate === null));

    dispatch(setTimeError(!startTime?.length));

    // this validation can be broken into a smaller function or even better get this data to a different component through Redux. I am doing this just for conviniece
    if (
      !hasTitleError &&
      title.length &&
      !hasDescriptionError &&
      description.length &&
      !hasEventFeeError &&
      !hasCoordinatorIdError &&
      responsibleId &&
      !hasEmailError &&
      startDate &&
      !hasDateError &&
      startTime &&
      !hasTimeError
    ) {
      console.log({
        title,
        description,
        category_id: categoryId,
        paid_event: isPaidEvent,
        event_fee: isPaidEvent ? eventFee : 0,
        reward: reward,
        // This is lame. I should create a date object from the startDate and startTime and use  createdDate.toISOString()
        date: `${startDate}T${startTime}`,
        // hour -> mins * sec
        duration: eventDuration * 60 * 60,
        coordinator: {
          id: responsibleId,
          email: email,
        },
      });

      setIsValidForm(true);
    }
  };

  return (
    <div className="App">
      <Header />
      {/* Instead of isValid I could have used react router. I tried :) but I had to rework the main App.tsx file in order to use userHistory hook with withRouter. */}
      {isValidForm ? (
        <WSuccess title="Success" message="Event has been created" />
      ) : (
        <div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <Coordinator />
          </div>
          <div className="section">
            <When />
          </div>
          <WButton
            content="Publish Event"
            onClick={() => validateAndPrintData()}
          />
        </div>
      )}
    </div>
  );
}

export default App;
