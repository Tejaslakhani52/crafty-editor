import React, { useState } from "react";

export default function TextDirection() {
  const [textDirection, setTextDirection] = useState<any>("left");
  const [active, setActive] = useState<boolean>(false);
  return textDirection === "left" ? (
    <button
      onClick={() => setTextDirection("center")}
      className="text_button_hover"
    >
      <img src="./icons/text_left.svg" alt="" />
    </button>
  ) : textDirection === "center" ? (
    <button
      onClick={() => setTextDirection("right")}
      className="text_button_hover"
    >
      <img src="./icons/text_center.svg" alt="" />
    </button>
  ) : textDirection === "right" ? (
    <button
      onClick={() => {
        setTextDirection("default");
      }}
      className="text_button_hover"
    >
      <img src="./icons/text_right.svg" alt="" />
    </button>
  ) : (
    <button
      onClick={() => {
        setTextDirection("left");
        setActive(false);
      }}
      className="text_button_hover"
    >
      <img src="./icons/text_default.svg" alt="" />
    </button>
  );
}
