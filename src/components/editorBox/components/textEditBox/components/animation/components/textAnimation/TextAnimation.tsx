import React, { useState } from "react";
import { basicAnimation, textAnimationData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { textAnimation } from "@/redux/reducer/dataReducer";
import { useScreenHeight } from "@/commonFunction/screenHeight";

interface AnimationItem {
  image?: string;
  name?: string;
  position?: string;
  animation?: string;
}

interface AnimationData {
  title: string;
  data: AnimationItem[];
}

export default function TextAnimation() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const textAnimationValue = useSelector(
    (state: any) => state.data.textAnimation
  );

  const handleAnimationClick = (item: AnimationItem) => {
    dispatch(
      textAnimation({ name: item.name ?? "", position: item.position ?? "" })
    );
  };

  const renderAnimationBox = (item: AnimationItem) => {
    return (
      <div className="box" onClick={() => handleAnimationClick(item)}>
        <div
          className={`${
            textAnimationValue?.name === item.name
              ? "active_img_box"
              : "img_box"
          }`}
        >
          <img src={item.image} alt="" />
        </div>
        <p>{item.name}</p>
      </div>
    );
  };

  const renderCustomAnimationBox = (item: AnimationItem) => {
    return (
      <div
        className="custome_animation_box"
        style={{
          display:
            textAnimationValue?.position === item.animation ? "block" : "none",
        }}
      >
        {basicAnimation[textAnimationValue?.name]}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          height: `${
            screenHeight - (textAnimationValue?.name === "" ? 195 : 275)
          }px`,
        }}
        className="scroll_bar_section"
      >
        {textAnimationData?.map((animationData: AnimationData) => (
          <div key={animationData.title}>
            <h3 className="title">{animationData.title}</h3>
            <div className="gridBox">
              {animationData.data?.map((item: AnimationItem, index: number) => (
                <React.Fragment key={index}>
                  {item.name
                    ? renderAnimationBox(item)
                    : renderCustomAnimationBox(item)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="divider" />
      <div className="remove_animation">
        <button
          onClick={() => {
            dispatch(textAnimation({ name: "", position: "" }));
          }}
        >
          Remove animation
        </button>
      </div>
    </div>
  );
}
