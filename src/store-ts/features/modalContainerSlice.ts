import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
interface modalContainerState {
  isOpen: boolean;
}
const initialState: modalContainerState = {
  isOpen: false,
};

export const modalContainerSlice = createSlice({
  name: "modalContainer",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
      // console.log("openModal")
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    closeAllModal: (state) => {
      state.isOpen = false;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

export const { openModal, closeModal, closeAllModal } =
  modalContainerSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectOpenModalContainer = (state: RootState) =>
  state.modalContainer.isOpen;

export default modalContainerSlice.reducer;
