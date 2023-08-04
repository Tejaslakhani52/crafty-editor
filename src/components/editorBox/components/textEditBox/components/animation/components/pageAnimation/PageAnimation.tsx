import { Dispatch } from "redux";
import { useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageAnimationData } from "./constant";
import {
  elementAnimation,
  pageAnimation,
  photoAnimation,
  textAnimation,
} from "@/redux/reducer/dataReducer";
import { useScreenHeight } from "@/commonFunction/screenHeight";

type AnimationItem = {
  name: string;
  image: string;
};

type AnimationData = {
  title: string;
  data: AnimationItem[];
};

export default function PageAnimation(): JSX.Element {
  const dispatch = useDispatch<Dispatch>();
  const screenHeight = useScreenHeight();
  const pageAnimationValue = useSelector(
    (state: any) => state.data.pageAnimation
  );
  const textAnimationValue = useSelector(
    (state: any) => state.data.textAnimation
  );
  const photoAnimationValue = useSelector(
    (state: any) => state.data.photoAnimation
  );
  const elementAnimationValue = useSelector(
    (state: any) => state.data.elementAnimation
  );

  const [applyAll, setApplyAll] = useState<boolean>(false);

  const removeAll = useMemo(() => {
    return (
      textAnimationValue?.name !== "" ||
      pageAnimationValue !== "" ||
      photoAnimationValue?.name !== "" ||
      elementAnimationValue?.name !== ""
    );
  }, [
    textAnimationValue,
    pageAnimationValue,
    photoAnimationValue,
    elementAnimationValue,
  ]);

  console.log("removeAll: ", applyAll);

  const height = useMemo(() => {
    if (removeAll && applyAll) {
      return 325;
    } else if (removeAll && !applyAll) {
      return 273;
    } else {
      return 195;
    }
  }, [applyAll, removeAll]);

  return (
    <div>
      <div
        style={{
          height: `${screenHeight - height}px`,
        }}
        className="scroll_bar_section"
      >
        {PageAnimationData?.map((animationData: AnimationData) => (
          <div key={animationData.title}>
            <h3 className="title">{animationData.title}</h3>
            <div className="gridBox">
              {animationData.data.map((item: AnimationItem) => {
                return (
                  <div
                    className="box"
                    key={item.name}
                    onClick={() => {
                      dispatch(pageAnimation(item.name ?? ""));
                      setApplyAll(true);
                    }}
                  >
                    <div
                      className={`${
                        pageAnimationValue === item.name
                          ? "active_img_box"
                          : "img_box"
                      }`}
                    >
                      <img src={item.image} alt="" />
                    </div>
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      <div className="divider" />
      {removeAll && (
        <div className="remove_animation">
          <button
            className="remove_all_button"
            onClick={() => {
              dispatch(pageAnimation(""));
              dispatch(textAnimation({ name: "", position: "" }));
              dispatch(photoAnimation({ name: "", position: "" }));
              dispatch(elementAnimation({ name: "", position: "" }));
            }}
          >
            Remove all animation
          </button>
        </div>
      )}
      {applyAll && removeAll && (
        <div className="remove_animation">
          <button
            className=""
            onClick={() => {
              setApplyAll(false);
            }}
          >
            Apply to all pages
          </button>
        </div>
      )}
    </div>
  );
}
