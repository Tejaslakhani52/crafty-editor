import MarkSlider from "@/components/common/MarkSlider";
import React, { useState } from "react";

export default function CurveEffect() {
  const [curve, setCurve] = useState<number>(100);
  return (
    <div className="custome_animation">
      <div className="rangebar_box">
        <div className="offset pt-5 pb-2">
          <h3 className="font-medium">Curve</h3>
          <div className="value">{curve}</div>
        </div>

        <MarkSlider
          mark={0}
          min={-100}
          max={100}
          value={curve}
          setValue={setCurve}
        />
      </div>
    </div>
  );
}
