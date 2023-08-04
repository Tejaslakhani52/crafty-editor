import React, { useState } from "react";
import Slider from "rc-slider";
import MarkSlider from "@/components/common/MarkSlider";

const writingData = ["Character", "Word", "Line", "Element"];

export default function NeonEffect() {
  const [intensityValue, setIntensityValue] = useState<number>(50);

  return (
    <div className="custome_animation">
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Intensity</h3>
          <div className="value">{intensityValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={0}
          max={100}
          value={intensityValue}
          setValue={setIntensityValue}
        />
      </div>
    </div>
  );
}
