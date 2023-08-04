import React from "react";

export default function Brushes() {
  return (
    <div className="select_brush">
      <h3 className="title">Select Brush</h3>
      <div className="brush_1 hover">
        <div className="brush"></div>
      </div>
      <div className="brush_2  hover">
        <div className="brush"></div>
      </div>
      <div className="brush_3 hover">
        <img src="./images/doted_brush.svg" alt="" className=".brush" />
      </div>
    </div>
  );
}
