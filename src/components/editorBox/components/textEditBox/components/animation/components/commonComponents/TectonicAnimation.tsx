import React, { useState } from "react";

export default function TectonicAnimation() {
  const [transparencyValue, setTransparencyValue] = useState<number>(50);

  return (
    <div className="custome_animation">
      <div className="flex items-center gap-[5px] pt-4">
        <p className="title">Intensity</p>
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
    </div>
  );
}
