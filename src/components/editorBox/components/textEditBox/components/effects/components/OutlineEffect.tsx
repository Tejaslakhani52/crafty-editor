import React, { useState } from "react";
import Slider from "rc-slider";
import MarkSlider from "@/components/common/MarkSlider";
import SelectColorBox from "@/components/editorBox/components/textEditBox/components/animation/components/commonComponents/common/SelectColorBox";

const writingData = ["Character", "Word", "Line", "Element"];

export default function OutlineEffect() {
  const [thicknessValue, setThicknessValue] = useState<number>(50);

  return (
    <div className="custome_animation">
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Thickness</h3>
          <div className="value">{thicknessValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={0}
          max={100}
          value={thicknessValue}
          setValue={setThicknessValue}
        />
      </div>

      <div className="flex items-center pt-5 pb-1 justify-between ">
        <div className="color">
          <div className="flex items-center gap-[5px] ">
            <h3 className="font-medium">Color</h3>
          </div>
        </div>
        <SelectColorBox />
      </div>
    </div>
  );
}
