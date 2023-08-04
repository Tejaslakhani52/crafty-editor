import { useScreenHeight } from "@/commonFunction/screenHeight";
import React from "react";

export const IconText = (props: any) => {
  return (
    <div className="icon_text">
      <div className="icon">
        <img src={props.icon} alt="" />
      </div>
      <h3>{props.text}</h3>
    </div>
  );
};

export default function Position() {
  const screenHeight = useScreenHeight();
  return (
    <div
      style={{
        height: `${screenHeight - 130}px`,
        padding: "0",
      }}
      className="scroll_bar_section"
    >
      <div className="position">
        <h3 className="title">Position</h3>
        <div className="divider" />
        <div className="two_column">
          <div className="column">
            <IconText text={"Forward"} icon={"./icons/forwardIcon.svg"} />
            <IconText text={"To front"} icon={"./icons/toFront.svg"} />
          </div>
          <div className="column">
            <IconText text={"Backward"} icon={"./icons/backword.svg"} />
            <IconText text={"To back"} icon={"./icons/toFront.svg"} />
          </div>
        </div>
        <div className="divider" />

        <h3 className="title">Align to page</h3>
        <div className="two_column">
          <div className="column">
            <IconText text={"Top"} icon={"./icons/topIcon.svg"} />
            <IconText text={"Middle"} icon={"./icons/middleIcon.svg"} />
            <IconText text={"Bottom"} icon={"./icons/bottomIcon.svg"} />
          </div>
          <div className="column">
            <IconText text={"Left"} icon={"./icons/leftPositionIcon.svg"} />
            <IconText text={"Center"} icon={"./icons/centerPosition.svg"} />
            <IconText text={"Right"} icon={"./icons/rightPosition.svg"} />
          </div>
        </div>

        <div className="divider" />

        <h3 className="title">Advance</h3>

        <div className="width_height">
          <div className="box">
            <h3>Width</h3>
            <div className="input_box">
              <input type="text" placeholder="0.00" />
              <p>mm</p>
            </div>
          </div>
          <div className="box">
            <h3>Height</h3>
            <div className="input_box">
              <input type="text" placeholder="0.00" />
              <p>mm</p>
            </div>
          </div>
          <div className="button_box">
            <button>
              <img src="./icons/lockIcon.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="width_height">
          <div className="box">
            <h3>X</h3>
            <div className="input_box">
              <input type="text" placeholder="0.00" />
              <p>mm</p>
            </div>
          </div>
          <div className="box">
            <h3>Y</h3>
            <div className="input_box">
              <input type="text" placeholder="0.00" />
              <p>mm</p>
            </div>
          </div>
          <div className="box" style={{ width: "20%" }}>
            <h3>Rotate</h3>
            <div className="input_box">
              <input type="text" placeholder="0" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
