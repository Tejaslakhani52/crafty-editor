import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextAnimation from "./components/textAnimation/TextAnimation";
import PageAnimation from "./components/pageAnimation/PageAnimation";
import PhotoAnimation from "./components/PhotoAnimation/PhotoAnimation";
import ElementAnimation from "./components/elementAnimation/ElementAnimation";

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

const animationType: any = {
  PageAnimations: <PageAnimation />,
  TextAnimations: <TextAnimation />,
  ImageAnimations: <PhotoAnimation />,
  ElementsAnimations: <ElementAnimation />,
};

export default function Animation() {
  const [activeButton, setActiveButton] = useState<string>("PageAnimations");
  const textAnimationValue = useSelector(
    (state: any) => state.data.textAnimation
  );

  console.log("textAnimationValue: ", textAnimationValue);

  return (
    <div className="animation">
      <div className="button_tabs" style={{ padding: "7px 12px 10px" }}>
        <button
          className={`${
            activeButton === "PageAnimations" ? "font" : "text_style"
          } `}
          onClick={() => setActiveButton("PageAnimations")}
        >
          Page Animations
        </button>
        <button
          className={`${
            activeButton === "TextAnimations" ? "font" : "text_style"
          } `}
          onClick={() => setActiveButton("TextAnimations")}
        >
          Text Animations
        </button>
        {/* <button
          className={`${
            activeButton === "ImageAnimations" ? "font" : "text_style"
          } `}
          onClick={() => setActiveButton("ImageAnimations")}
        >
          Image Animations
        </button>
        <button
          className={`${
            activeButton === "ElementsAnimations" ? "font" : "text_style"
          } `}
          onClick={() => setActiveButton("ElementsAnimations")}
        >
          Elements Animations
        </button> */}
      </div>
      <div className="divider" />

      {animationType[activeButton]}
    </div>
  );
}
