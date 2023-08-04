import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  activeAnimationP,
  activeShapeAnimationP,
  effects,
  effectsShape,
} from "@/redux/reducer/dataReducer";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import {
  effectsComponents,
  effectsData,
  effectsShapeComponents,
  effectsShapeData,
} from "./constant";

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

export default function Effects() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const effectsValue = useSelector((state: any) => state.data.effects);
  const effectsShapeValue = useSelector(
    (state: any) => state.data.effectsShape
  );
  const activeAnimation = useSelector(
    (state: any) => state.data.activeAnimationP
  );
  const activeShapeAnimation = useSelector(
    (state: any) => state.data.activeShapeAnimationP
  );

  const handleAnimationClick = (
    item: AnimationItem,
    isShapeAnimation: boolean
  ) => {
    const dispatchAction = isShapeAnimation ? effectsShape : effects;
    const setActiveAction = isShapeAnimation
      ? activeShapeAnimationP
      : activeAnimationP;

    dispatch(dispatchAction(item.name ?? ""));
    dispatch(setActiveAction(item.position ?? ""));
  };

  const renderAnimationBox = (
    item: AnimationItem,
    isShapeAnimation: boolean
  ) => {
    const isActive = isShapeAnimation
      ? effectsShapeValue === item.name
      : effectsValue === item.name;

    return (
      <div
        className="box"
        onClick={() => handleAnimationClick(item, isShapeAnimation)}
      >
        <div className={isActive ? "active_img_box" : "img_box"}>
          <img src={item.image} alt="" />
        </div>
        <p>{item.name}</p>
      </div>
    );
  };

  const renderCustomAnimationBox = (
    item: AnimationItem,
    isShapeAnimation: boolean
  ) => {
    const displayStyle = isShapeAnimation
      ? activeShapeAnimation === item.animation
        ? "block"
        : "none"
      : activeAnimation === item.animation
      ? "block"
      : "none";

    const components = isShapeAnimation
      ? effectsShapeComponents[effectsShapeValue]
      : effectsComponents[effectsValue];

    return (
      <div className="custome_animation_box" style={{ display: displayStyle }}>
        {components}
      </div>
    );
  };

  return (
    <div className="animation">
      <h3 className="px-[15px] font-medium">Effects</h3>
      <div className="divider" style={{ margin: "13px 0 0" }} />
      <div
        style={{
          height: `${screenHeight - 160}px`,
        }}
        className="scroll_bar_section"
      >
        {effectsData?.map((animationData: AnimationData) => (
          <div key={animationData.title}>
            <h3 className="title">{animationData.title}</h3>
            <div className="gridBox">
              {animationData.data?.map((item: AnimationItem, index: number) => (
                <React.Fragment key={index}>
                  {item.name
                    ? renderAnimationBox(item, false)
                    : renderCustomAnimationBox(item, false)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}

        {effectsShapeData?.map((animationData: AnimationData) => (
          <div key={animationData.title}>
            <h3 className="title">{animationData.title}</h3>
            <div className="gridBox">
              {animationData.data?.map((item: AnimationItem, index: number) => (
                <React.Fragment key={index}>
                  {item.name
                    ? renderAnimationBox(item, true)
                    : renderCustomAnimationBox(item, true)}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
