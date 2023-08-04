import ColorPicker from "@/components/common/ColorPicker";
import SelectColorBox from "@/components/editorBox/components/textEditBox/components/animation/components/commonComponents/common/SelectColorBox";
import {
  brandColors,
  documentsColors,
  solidColors,
} from "@/constants/colorsFile";
import React, { useState } from "react";

export default function Colors() {
  const [selectColor, setSelectColor] = useState<string>("#2f2325");

  return (
    <div className="colors my-4">
      <h3 className="title">Select Color</h3>
      <div className="color_box">
        <h3>Document colors</h3>
        <div className="flex_box">
          <ColorPicker color={selectColor} setColor={setSelectColor} />
          {documentsColors?.map((item, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: item?.color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="color_box">
        <h3>Brand Colors</h3>
        <div className="flex_box">
          {brandColors?.map((item, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: item?.color }}
            ></div>
          ))}
        </div>
      </div>

      <div className="color_box">
        <h3>Solid Colors</h3>
        <div className="flex_box">
          {solidColors?.map((item, index) => (
            <div
              key={index}
              className="box"
              style={{ backgroundColor: item?.color }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
