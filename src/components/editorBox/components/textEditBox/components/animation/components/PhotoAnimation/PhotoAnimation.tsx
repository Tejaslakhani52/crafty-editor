import React, { useState } from "react";
import { basicAnimation, photoAnimationData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import { photoAnimation } from "@/redux/reducer/dataReducer";

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

export default function PhotoAnimation() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const photoAnimationValue = useSelector(
    (state: any) => state.data.photoAnimation
  );

  const handleAnimationClick = (item: AnimationItem) => {
    dispatch(
      photoAnimation({ name: item.name ?? "", position: item.position ?? "" })
    );
  };

  const renderAnimationBox = (item: AnimationItem) => {
    return (
      <div className="box" onClick={() => handleAnimationClick(item)}>
        <div
          className={`${
            photoAnimationValue?.name === item.name
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
            photoAnimationValue?.position === item.animation ? "block" : "none",
        }}
      >
        {basicAnimation[photoAnimationValue?.name]}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          height: `${
            screenHeight - (photoAnimationValue?.name === "" ? 195 : 275)
          }px`,
        }}
        className="scroll_bar_section"
      >
        {photoAnimationData?.map((animationData: AnimationData) => (
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
            dispatch(photoAnimation({ name: "", position: "" }));
          }}
        >
          Remove animation
        </button>
      </div>
    </div>
  );
}
