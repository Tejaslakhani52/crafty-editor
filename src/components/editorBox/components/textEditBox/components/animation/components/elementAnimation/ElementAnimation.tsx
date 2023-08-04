import React from "react";
import { basicAnimation, photoAnimationData } from "./constant";
import { useDispatch, useSelector } from "react-redux";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import { elementAnimation } from "@/redux/reducer/dataReducer";

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

export default function ElementAnimation() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const elementAnimationValue = useSelector(
    (state: any) => state.data.elementAnimation
  );

  const handleAnimationClick = (item: AnimationItem) => {
    dispatch(
      elementAnimation({ name: item.name ?? "", position: item.position ?? "" })
    );
  };

  const renderAnimationBox = (item: AnimationItem) => {
    return (
      <div className="box" onClick={() => handleAnimationClick(item)}>
        <div
          className={`${
            elementAnimationValue?.name === item.name
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
            elementAnimationValue?.position === item.animation
              ? "block"
              : "none",
        }}
      >
        {basicAnimation[elementAnimationValue?.name]}
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          height: `${
            screenHeight - (elementAnimationValue?.name === "" ? 195 : 275)
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
            dispatch(elementAnimation({ name: "", position: "" }));
          }}
        >
          Remove animation
        </button>
      </div>
    </div>
  );
}
