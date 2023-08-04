import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";

const writingData = ["Character", "Word", "Line", "Element"];

export default function RollAnimation() {
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

      <div className="flex items-center gap-[5px]  pt-3 ">
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
