import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";

interface CoordinatorState {
  id: number | null;
  idError: boolean;
  email: string;
  emailError: boolean;
  responsibleOptions: {
    id: number;
    email: string;
    name: string;
    lastname: string;
  }[];
}

const initialState: CoordinatorState = {
  id: null,
  idError: false,
  email: "",
  emailError: false,
  responsibleOptions: [],
};

export const coordinatorSlice = createSlice({
  name: "coordinator",
  initialState,
  reducers: {
    setId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
    setIdError: (state, action: PayloadAction<boolean>) => {
      state.idError = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setEmailError: (state, action: PayloadAction<boolean>) => {
      state.emailError = action.payload;
    },
    setResponsibleOptions: (
      state,
      action: PayloadAction<
        Array<{ id: number; email: string; name: string; lastname: string }>
      >
    ) => {
      state.responsibleOptions = [...action.payload];
    },
  },
});

export const {
  setId,
  setIdError,
  setEmail,
  setEmailError,
  setResponsibleOptions,
} = coordinatorSlice.actions;

// The function below is called a thunk and allows us to perform async logic.
export const fetchResponsibleOptions = (): AppThunk => (dispatch) => {
  return fetch("http://www.mocky.io/v2/5bcdd7992f00006300c855d5")
    .then((response) => response.json())
    .then((data) => dispatch(setResponsibleOptions(data)));
};

export const selectId = (state: RootState) => state.coordinator.id;
export const selectIdError = (state: RootState) => state.coordinator.idError;
export const selectEmail = (state: RootState) => state.coordinator.email;
export const selectEmailError = (state: RootState) =>
  state.coordinator.emailError;
export const responsibleOptions = (state: RootState) =>
  state.coordinator.responsibleOptions;

export default coordinatorSlice.reducer;
