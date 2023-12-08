import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Define a type for the slice state
export type modalState = {
  currentModal:
    | ""
    | "upload-design"
    | "print-event-card"
    | "print-event-card/send"
    | "print-event-card/send/pickup/summary"
    | "print-event-card/send/delivery/summary"
    | "print-event-card/send/confirm"
    | "deliver-to-recipient"
    | "deliver-to-recipient/new-group"
    | "deliver-to-recipient/confirm"
    | "new-template"
    | "new-canvas"
    | "delete-design"
    | "my-designs/send"
    | "my-designs/share"
    | "my-designs/share/format"
    | "my-designs/share/platform"
    | "my-designs/share/platform/sms"
    | "my-designs/share/platform/whatsapp"
    | "my-designs/share/platform/print"
    | "my-designs/share/platform/delivery"
    | "orders/print/details/complain"
    | "orders/print/details/rating"
    | "orders/door-delivery/details/complain"
    | "settings/profile/update"
    | "settings/payment/add-card"
    | "settings/payment/change-card"
    | "settings/payment/change-card/delete"
    | "settings/settings/delete-account"
    | "settings/contact/sms/new-group"
    | "settings/contact/sms/delete-group"
    | "settings/contact/sms/view-group"
    | "settings/contact/sms/import-settings"
    | "settings/contact/sms/rename-group"
    | "settings/contact/sms/new-contact"
    | "settings/contact/sms/delete-contact"
    | "settings/contact/sms/view-contact"
    | "settings/contact/sms/edit-contact"
    | "settings/contact/recipient/new-group"
    | "settings/contact/recipient/delete-group"
    | "settings/contact/recipient/view-group"
    | "settings/contact/recipient/import-settings"
    | "settings/contact/recipient/rename-group"
    | "settings/contact/recipient/new-contact"
    | "settings/contact/recipient/delete-contact"
    | "settings/contact/recipient/view-contact"
    | "settings/contact/recipient/edit-contact"
    
  width?: number;
};
const initialState = {
  currentModal: "",
  width: 38.875,
} as modalState;

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state, action: PayloadAction<modalState>) => {
      state.currentModal = action.payload.currentModal;
      if (action.payload.width) {
        state.width = action.payload.width;
      } else {
        state.width = 32.625;
      }
    },
    modalWidth: (state, action: PayloadAction<modalState["width"]>) => {
      state.width = action.payload;
    },
  },
});

export const { changeModal, modalWidth } = modalSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectCurrentModal = (state: RootState) =>
  state.modal.currentModal;
export const selectModalWidth = (state: RootState) => state.modal.width;

export default modalSlice.reducer;
