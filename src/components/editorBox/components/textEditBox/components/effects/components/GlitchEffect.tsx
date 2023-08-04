import React, { useState } from "react";
import Slider from "rc-slider";
import MarkSlider from "@/components/common/MarkSlider";
import SelectColorBox from "@/components/editorBox/components/textEditBox/components/animation/components/commonComponents/common/SelectColorBox";

const writingData = ["Character", "Word", "Line", "Element"];

export default function GlitchEffect() {
  const [offsetValue, setOffsetValue] = useState<number>(30);
  const [directionValue, setDirectionValue] = useState<number>(90);
  const [glitchColor, setGlitchColor] = useState<any>("color1");

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
      <div className="flex items-center pt-5 pb-1 justify-between ">
        <div className="color">
          <div className="flex items-center gap-[5px]">
            <h3 className="font-medium">Color</h3>
          </div>
        </div>
        <div className="flex gap-3">
          <div
            className={` ${
              glitchColor === "color1" ? "active_glitch" : "glitch_color"
            }  `}
            onClick={() => setGlitchColor("color1")}
          >
            <img src="./images/glitchColor1.png" alt="" />
          </div>
          <div
            className={` ${
              glitchColor === "color2" ? "active_glitch" : "glitch_color"
            }  `}
            onClick={() => setGlitchColor("color2")}
          >
            <img src="./images/glitchColor2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
