import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import titleReducer from "./features/titleSlice";
import modalReducer from "./features/modalSlice";
import modalContainerReducer from "./features/modalContainerSlice";
import menuOpenReducer from "./features/menuOpenSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    title: titleReducer,
    modal: modalReducer,
    modalContainer: modalContainerReducer,
    menuOpen: menuOpenReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;



