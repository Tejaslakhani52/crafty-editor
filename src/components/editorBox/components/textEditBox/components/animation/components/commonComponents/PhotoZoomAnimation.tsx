import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";

const breatheData = ["In", "Out"];

export default function PhotoZoomAnimation() {
  const [transparencyValue, setTransparencyValue] = useState<number>(50);
  const [animateValue, setAnimateValue] = useState<string>("both");
  const [breathData, setBreathData] = useState<string>("Out");

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
        <p className="title">Scale</p>
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

      <div className="writing_button">
        {breatheData?.map((item, index) => (
          <div
            key={index}
            className={`${item === breathData ? "activeButton" : "button"}`}
            onClick={() => setBreathData(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
