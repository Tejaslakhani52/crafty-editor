import React, { useState } from "react";

export default function Transparency() {
  const [transparencyValue, setTransparencyValue] = useState<number>(50);
  return (
    <div className="transparency my-2">
      <h3 className="title">Transparency</h3>
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

        <p style={{ width: "38px" }}>{`${transparencyValue}%`}</p>
      </div>
    </div>
  );
}
