import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";
import IconButtonBox from "./common/IconButtonBox";
import SelectColorBox from "@/components/editorBox/components/textEditBox/components/animation/components/commonComponents/common/SelectColorBox";

export default function BlockAnimation() {
  const [animateValue, setAnimateValue] = useState<string>("onEnter");
  const [directrionValue, setDirectrionValue] = useState<string>("bottom");
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

      <div className="flex items-center pt-5 pb-1 justify-between ">
        <div className="color">
          <div className="flex items-center gap-[5px] ">
            <p className="title">Color</p>
            <img src="./icons/premium.svg" alt="" />
          </div>
        </div>
        <SelectColorBox />
      </div>

      <div className="color">
        <div className="flex items-center gap-[5px] ">
          <p className="title">Direction</p>
          <img src="./icons/premium.svg" alt="" />
        </div>
      </div>

      <IconButtonBox
        data={[
          { image: "./icons/animation/leftArrow.svg", value: "left" },
          { image: "./icons/animation/rightArrow.svg", value: "right" },
          { image: "./icons/animation/topArrow.svg", value: "top" },
          { image: "./icons/animation/bottomArrow.svg", value: "bottom" },
        ]}
        value={directrionValue}
        setValue={setDirectrionValue}
      />
    </div>
  );
}
