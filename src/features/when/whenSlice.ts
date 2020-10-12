import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface WhenState {
  date: Date | null;
  time: string | null;
  timeError: boolean;
  dateError: boolean;
  duration: number;
}

const initialState: WhenState = {
  date: null,
  dateError: false,
  time: null,
  timeError: false,
  duration: 0,
};

export const whenSlice = createSlice({
  name: "when",
  initialState,
  reducers: {
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload;
    },
    setDateError: (state, action: PayloadAction<boolean>) => {
      state.dateError = action.payload;
    },
    setTime: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
    setTimeError: (state, action: PayloadAction<boolean>) => {
      state.timeError = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
  },
});

export const {
  setDate,
  setDateError,
  setDuration,
  setTime,
  setTimeError,
} = whenSlice.actions;

export const selectDate = (state: RootState) => state.when.date;
export const selectDateError = (state: RootState) => state.when.dateError;
export const selectTime = (state: RootState) => state.when.time;
export const selectTimeError = (state: RootState) => state.when.timeError;
export const selectDuration = (state: RootState) => state.when.duration;

export default whenSlice.reducer;
