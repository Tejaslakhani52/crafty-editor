import ColorDropdown from "@/components/common/ColorDropdown";
import SelectColorBox from "@/components/editorBox/components/textEditBox/components/animation/components/commonComponents/common/SelectColorBox";
import { backgroundColors } from "@/constants/colorsFile";
import React, { useEffect, useState } from "react";

export default function ColorBar({ title, categoryName }: any) {
  const [showPrevButton, setShowPrevButton] = useState(true);
  const [showNextButton, setShowNextButton] = useState(true);
  const [selectColor, setSelectColor] = useState<string>("#2f2325");
  console.log("selectColor: ", selectColor);

  const handleScroll = (e: Event) => {
    const container = e.target as HTMLElement;
    setShowPrevButton(container.scrollLeft > 0);
    setShowNextButton(
      container.scrollLeft < container.scrollWidth - container.clientWidth
    );
  };

  useEffect(() => {
    const container = document.getElementById("colorbar");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["colorbar"]);

  const handleNextClick = () => {
    const container = document.getElementById("colorbar") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("colorbar") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="category_slider">
      <div className="colors_title pb-3">
        <h3 style={{ margin: "0" }}>Colors</h3>

        <ColorDropdown
          button={
            <button className="cursor-pointer">
              <img src="./icons/colorIcons.svg" alt="" className="w-[18px]" />
            </button>
          }
        />
      </div>

      <div className="relative">
        {showNextButton && (
          <button
            className="next_button"
            onClick={handleNextClick}
            style={{ height: "50px" }}
          >
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none " id="colorbar">
          {backgroundColors?.map((item: any, index: number) => (
            <button
              key={index}
              className={` ${
                selectColor === item?.color ? "activeTab " : "button"
              } `}
              style={{ padding: "0", margin: "0" }}
              onClick={() => {
                setSelectColor(item?.color);
              }}
            >
              <div
                style={{
                  backgroundColor: item?.color,
                  height: selectColor === item?.color ? "32px" : "35px",
                  width: selectColor === item?.color ? "32px" : "35px",
                  borderRadius: "2px",
                  cursor: "pointer",
                }}
              ></div>
            </button>
            // <button className="button">{item?.color}</button>
          ))}
        </div>
        {showPrevButton && (
          <button
            className="prev_button"
            onClick={handlePrevClick}
            style={{ height: "36px", top: "0%" }}
          >
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
      </div>
    </div>
  );
}
