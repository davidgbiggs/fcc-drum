import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectPowerOn,
  selectVolume,
  selectAlternateSounds,
  changeDisplayString,
} from "./features/drumPad/drumPadSlice";

export default function DrumPad({ name, src, altSrc, altName, keydown }) {
  const volume = useSelector(selectVolume);
  const isPowerOn = useSelector(selectPowerOn);
  const isUsingAlternateSounds = useSelector(selectAlternateSounds);
  const dispatch = useDispatch();

  function handleClick() {
    playSound();
  }

  function playSound() {
    const audioElement = document.getElementById(keydown);
    if (isPowerOn) {
      audioElement.volume = volume / 100;
      audioElement.currentTime = 0;
      audioElement.play();
      dispatch(
        changeDisplayString(
          isUsingAlternateSounds
            ? altName.replace("-", " ")
            : name.replace("-", " ")
        )
      );
    }
  }

  return (
    <button
      id={name}
      onClick={handleClick}
      className="drum-pad btn btn-info m-1"
    >
      {keydown}
      <audio
        src={isUsingAlternateSounds ? altSrc : src}
        className="clip"
        id={keydown}
      ></audio>
    </button>
  );
}
