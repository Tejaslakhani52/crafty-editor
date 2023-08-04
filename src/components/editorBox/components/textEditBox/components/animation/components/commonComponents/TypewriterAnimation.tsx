import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";
import IconButtonBox from "./common/IconButtonBox";

const writingData = ["Character", "Word"];

export default function TypewriterAnimation() {
  const [transparencyValue, setTransparencyValue] = useState<number>(50);
  const [animateValue, setAnimateValue] = useState<string>("onEnter");
  const [writingStyle, setWritingStyle] = useState<string>("Character");

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
        <p className="title">Speed</p>
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
        <p className="title">Writing Style</p>
        <img src="./icons/premium.svg" alt="" />
      </div>

      <div className="writing_button">
        {writingData?.map((item, index) => (
          <div
            key={index}
            className={`${item === writingStyle ? "activeButton" : "button"}`}
            onClick={() => setWritingStyle(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
