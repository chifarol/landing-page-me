import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface titleState {
  value: string;
}
const initialState: titleState = {
  value: "",
};

export const titleSlice = createSlice({
  name: "title",
  initialState,
  reducers: {
    updateTitle: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateTitle } = titleSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectTitle = (state: RootState) => state.title.value;

export default titleSlice.reducer;
