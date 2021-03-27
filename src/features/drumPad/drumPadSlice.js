import { createSlice } from "@reduxjs/toolkit";

export const drumPadSlice = createSlice({
  name: "drumPad",
  initialState: {
    powerOn: true,
    alternateSounds: false,
    displayString: "",
    volume: 50,
  },
  reducers: {
    changeAlt: (state, action) => {
      state.alternateSounds = action.payload;
    },
    changePower: (state, action) => {
      state.powerOn = action.payload;
    },
    changeDisplayString: (state, action) => {
      state.displayString = action.payload;
    },
    changeVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const {
  changeAlt,
  changePower,
  changeDisplayString,
  changeVolume,
} = drumPadSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAlternateSounds = (state) => state.drumPad.alternateSounds;
export const selectPowerOn = (state) => state.drumPad.powerOn;
export const selectDisplayString = (state) => state.drumPad.displayString;
export const selectVolume = (state) => state.drumPad.volume;

export default drumPadSlice.reducer;
