import MarkSlider from "@/components/common/MarkSlider";
import React, { useState } from "react";

export default function HollowEffect() {
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

    
    </div>
  );
}
