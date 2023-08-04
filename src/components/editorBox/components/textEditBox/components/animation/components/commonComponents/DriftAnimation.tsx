import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";
import IconButtonBox from "./common/IconButtonBox";

export default function DriftAnimation() {
  const [transparencyValue, setTransparencyValue] = useState<number>(50);
  const [animateValue, setAnimateValue] = useState<string>("onEnter");
  const [directrionValue, setDirectrionValue] = useState<string>("top");

  return (
    <div className="custome_animation">
      <div className="flex items-center gap-[5px] pt-4">
        <p className="title">Intensity</p>
        <img src="./icons/premium.svg" alt="" />
      </div>
      <div className="rangebar_custome">
        <input
          type="range"
          min="0"
          max="100"
          value={transparencyValue}
          className="slider"
          onChange={({ target: { value: radius } }) => {
            setTransparencyValue(Number(radius));
          }}
        />
      </div>

      <div className="flex items-center gap-[5px]  ">
        <p className="title">Direction</p>
        <img src="./icons/premium.svg" alt="" />
      </div>

      <IconButtonBox
        data={[
          { image: "./icons/animation/topArrow.svg", value: "top" },
          { image: "./icons/animation/bottomArrow.svg", value: "bottom" },
          { image: "./icons/animation/leftArrow.svg", value: "left" },
          { image: "./icons/animation/rightArrow.svg", value: "right" },
        ]}
        value={directrionValue}
        setValue={setDirectrionValue}
      />
    </div>
  );
}
