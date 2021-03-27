import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPowerOn,
  selectAlternateSounds,
  changeAlt,
  changePower,
  changeVolume,
  selectVolume,
  changeDisplayString,
  selectDisplayString,
} from "./features/drumPad/drumPadSlice";

export default function Controls() {
  const useAlternateSounds = useSelector(selectAlternateSounds);
  const powerIsOn = useSelector(selectPowerOn);
  const dispatch = useDispatch();
  const volume = useSelector(selectVolume);
  const displayString = useSelector(selectDisplayString);

  function handlePowerToggle() {
    dispatch(changePower(!powerIsOn));
  }

  function handleToggleAlt() {
    dispatch(changeAlt(!useAlternateSounds));
  }

  function handleRangeChange(event) {
    dispatch(changeDisplayString("Volume: " + event.target.value));
    dispatch(changeVolume(event.target.value));
  }

  return (
    <div className="d-flex align-items-center flex-column controls-container m-5">
      <div className="control-item">
        <label className="font-weight-bold" for="power-toggle">
          Power
        </label>
        <br />
        <input
          type="checkbox"
          id="power-toggle"
          onClick={handlePowerToggle}
          checked={powerIsOn}
        ></input>
      </div>
      <div className="control-item">
        <div id="display">{displayString}</div>
        <input
          type="range"
          id="vol"
          name="vol"
          min="0"
          onChange={handleRangeChange}
          value={volume}
          max="100"
        ></input>
      </div>
      <div className="control-item">
        <label className="font-weight-bold" for="alt-toggle">
          Bank
        </label>
        <br />
        <input
          id="alt-toggle"
          type="checkbox"
          onClick={handleToggleAlt}
          checked={useAlternateSounds}
        ></input>
      </div>
    </div>
  );
}
