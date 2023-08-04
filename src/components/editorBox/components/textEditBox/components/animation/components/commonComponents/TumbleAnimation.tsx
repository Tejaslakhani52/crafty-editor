import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";

export default function TumbleAnimation() {
  const [intensityValue, setIntensityValue] = useState<number>(50);
  const [animateValue, setAnimateValue] = useState<string>("onEnter");
  return (
    <div className="custome_animation">
      <p className="title">Animate</p>
      <TextButtonBox
        data={[
          { name: "Both", value: "both" },
          { name: "On enter", value: "onEnter" },
          { name: "On exit", value: "onExit" },
        ]}
        value={animateValue}
        setValue={setAnimateValue}
      />
      <div className="flex items-center gap-[5px] pt-4">
        <p className="title">Intensity</p>
        <img src="./icons/premium.svg" alt="" />
      </div>
      <div className="rangebar_custome">
        <input
          type="range"
          min="0"
          max="100"
          value={intensityValue}
          className="slider"
          onChange={({ target: { value: radius } }) => {
            setIntensityValue(Number(radius));
          }}
        />
      </div>
    </div>
  );
}
