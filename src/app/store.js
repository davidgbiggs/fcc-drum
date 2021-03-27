import { configureStore } from "@reduxjs/toolkit";
import drumPadReducer from "../features/drumPad/drumPadSlice";

export default configureStore({
  reducer: {
    drumPad: drumPadReducer,
  },
});
