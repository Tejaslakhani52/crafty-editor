import React, { useState } from "react";
import Slider from "rc-slider";
import MarkSlider from "@/components/common/MarkSlider";

const writingData = ["Character", "Word", "Line", "Element"];

export default function ShadowEffects() {
  const [animateValue, setAnimateValue] = useState<string>("onEnter");
  const [writingStyle, setWritingStyle] = useState<string>("Element");
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [value, setValue] = useState<any>(0);
  const [offsetValue, setOffsetValue] = useState<number>(50);
  const [directionValue, setDirectionValue] = useState<number>(-45);
  const [blurValue, setBlurValue] = useState<number>(0);
  const [transparencyValue, setTransparencyValue] = useState<number>(40);

  return (
    <div className="custome_animation">
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Offset</h3>
          <div className="value">{offsetValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={0}
          max={100}
          value={offsetValue}
          setValue={setOffsetValue}
        />
      </div>
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Direction</h3>
          <div className="value">{directionValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={-180}
          max={180}
          value={directionValue}
          setValue={setDirectionValue}
        />
      </div>
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Blur</h3>
          <div className="value">{blurValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={0}
          max={100}
          value={blurValue}
          setValue={setBlurValue}
        />
      </div>

      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Transparency</h3>
          <div className="value">{transparencyValue}</div>
        </div>

        <MarkSlider
          mark={0}
          min={0}
          max={100}
          value={transparencyValue}
          setValue={setTransparencyValue}
        />
      </div>
    </div>
  );
}
