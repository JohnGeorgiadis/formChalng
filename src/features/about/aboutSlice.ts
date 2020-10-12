import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface AboutState {
  title: string;
  titleError: boolean;
  description: string;
  descriptionError: boolean;
  categoryOptions: { id: number; name: string }[];
  categoryId: number | null;
  paidEvent: boolean;
  eventFee: number;
  eventFeeError: boolean;
  reward: number;
}

const initialState: AboutState = {
  title: "",
  titleError: false,
  description: "",
  descriptionError: false,
  categoryOptions: [],
  categoryId: null,
  paidEvent: false,
  eventFee: 0,
  eventFeeError: false,
  reward: 0,
};

export const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setTitle: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.title = action.payload;
    },
    setTitleError: (state, action: PayloadAction<boolean>) => {
      state.titleError = action.payload;
    },
    setDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    setDescriptionError: (state, action: PayloadAction<boolean>) => {
      state.descriptionError = action.payload;
    },
    setCategoryId: (state, action: PayloadAction<number | null>) => {
      state.categoryId = action.payload;
    },
    setPaidEvent: (state, action: PayloadAction<boolean>) => {
      state.paidEvent = action.payload;
    },
    setEventFee: (state, action: PayloadAction<number>) => {
      state.eventFee = action.payload;
    },
    setEventFeeError: (state, action: PayloadAction<boolean>) => {
      state.eventFeeError = action.payload;
    },
    setReward: (state, action: PayloadAction<number>) => {
      state.reward = action.payload;
    },
    setCategoryOptions: (
      state,
      action: PayloadAction<Array<{ id: number; name: string }>>
    ) => {
      state.categoryOptions = [...action.payload];
    },
  },
});

export const {
  setTitle,
  setTitleError,
  setDescription,
  setDescriptionError,
  setCategoryId,
  setPaidEvent,
  setEventFee,
  setEventFeeError,
  setReward,
  setCategoryOptions,
} = aboutSlice.actions;

// The function below is called a thunk and allows us to perform async logic.
export const fetchCategoryOptions = (): AppThunk => (dispatch) => {
  return fetch("http://www.mocky.io/v2/5bcdd3942f00002c00c855ba")
    .then((response) => response.json())
    .then((data) => dispatch(setCategoryOptions(data)));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
export const selectTitle = (state: RootState) => state.about.title;
export const selectTitleError = (state: RootState) => state.about.titleError;
export const selectDescription = (state: RootState) => state.about.description;
export const selectDescriptionError = (state: RootState) =>
  state.about.descriptionError;
export const selectCategoryId = (state: RootState) => state.about.categoryId;
export const selectPaidEvent = (state: RootState) => state.about.paidEvent;
export const selectEventFee = (state: RootState) => state.about.eventFee;
export const selectEventFeeError = (state: RootState) => state.about.eventFeeError;
export const selectReward = (state: RootState) => state.about.reward;
export const categoryOptions = (state: RootState) =>
  state.about.categoryOptions;

export default aboutSlice.reducer;
