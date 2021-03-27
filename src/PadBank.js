import React, { useEffect } from "react";
import DrumPad from "./DrumPad";
import { padData } from "./padData";

export default function PadBank() {
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const upperCaseKey = e.key.toUpperCase();
      if (padData[upperCaseKey]) {
        playSound(padData[upperCaseKey].name);
      }
    });
  }, []);

  function playSound(id) {
    const soundElement = document.getElementById(id);
    soundElement.click();
  }

  let items = [];

  for (let item in padData) {
    console.log(padData[item]);
    items.push(
      <DrumPad
        key={item}
        src={padData[item].src}
        altSrc={padData[item].altSrc}
        name={padData[item].name}
        altName={padData[item].altName}
        keydown={item}
      />
    );
  }

  return (
    <span
      className="pad-bank"
      style={{
        display: "grid",
        gridTemplateRows: "repeat(3, 1fr)",
        gridTemplateColumns: "repeat(3, 1fr)",
      }}
    >
      {items}
    </span>
  );
}
