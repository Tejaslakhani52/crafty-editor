import React, { useState } from "react";
import TextButtonBox from "./common/TextButtonBox";

export default function ScrapbookAnimation() {
  const [animateValue, setAnimateValue] = useState<string>("onEnter");

  return (
    <div className="custome_animation">
      <p className="title">Animate</p>
      <TextButtonBox
        data={[
          { name: "Both", value: "both" },
          { name: "On enter", value: "onEnter" },
          { name: "On exit", value: "onExit" },
        ]}
        value={animateValue}
        setValue={setAnimateValue}
      />
    </div>
  );
}
