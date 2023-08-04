import { activeTab } from "@/redux/reducer/projectReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function TabBar({ title, categoryName }: any) {
  const dispatch = useDispatch();
  const activeName = useSelector((state: any) => state.project.activeTab);
  console.log("activeName: ", activeName);
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById("brandIcons");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["brandIcons"]);

  useEffect(() => {
    if (activeName === "Videos" || activeName === "Background") {
      handleNextClick();
    } else handlePrevClick();
  }, [activeName]);

  const handleNextClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("brandIcons") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category_slider px-[15px]">
      {title && <h3> {title}</h3>}

      <div className="relative">
        {showNextButton && (
          <button
            className="next_button"
            onClick={handleNextClick}
            style={{ height: "30px" }}
          >
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none  mt-[5px] " id="brandIcons">
          {["All", "Design", "Folders", "Images", "Videos", "Background"]?.map(
            (item: any, index: number) => (
              <button
                key={index}
                className={` ${activeName === item ? "activeTab " : "button"} `}
                onClick={() => {
                  dispatch(activeTab(item));
                }}
              >
                {item}
              </button>
            )
          )}
        </div>
        {showPrevButton && (
          <button className="prev_button" onClick={handlePrevClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
}
