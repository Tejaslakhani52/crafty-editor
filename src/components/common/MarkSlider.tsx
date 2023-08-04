import Slider from "rc-slider";
import React from "react";

export default function MarkSlider({ mark, value, setValue, min, max }: any) {
  return (
    <div className="pl-[5px]">
      <Slider
        draggableTrack
        min={min}
        max={max}
        marks={{
          [mark]: " ",
        }}
        included={false}
        defaultValue={20}
        dotStyle={{
          backgroundColor: "black",
          width: "2px",
          height: "7px",
          border: "none",
          borderRadius: "8px",
          bottom: "-1px",
        }}
        handleStyle={{
          backgroundColor: "#1C3048",
          borderColor: "#ABB2C7",
          borderWidth: "3px",
          width: "16px",
          height: "16px",
          marginTop: "-7px",
          opacity: "1",
        }}
        railStyle={{ backgroundColor: "#D9D9D9", height: "3px" }}
        activeDotStyle={{ borderRadius: "0" }}
        value={value}
        onChange={(e) => setValue(e)}
      />
    </div>
  );
}
