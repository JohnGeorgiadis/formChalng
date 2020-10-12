import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import aboutReducer from "../features/about/aboutSlice";
import coordinatorReducer from "../features/coordinator/coordinatorSlice";
import whenReducer from "../features/when/whenSlice";

export const store = configureStore({
  reducer: {
    about: aboutReducer,
    coordinator: coordinatorReducer,
    when: whenReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
