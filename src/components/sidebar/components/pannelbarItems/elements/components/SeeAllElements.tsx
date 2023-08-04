import { seeAllName } from "@/redux/reducer/elementReducer";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function SeeAllElements({ item }: any) {
  const dispatch = useDispatch();
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
    const container = document.getElementById(item?.title);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [item?.title]);

  const handleNextClick = () => {
    const container = document.getElementById(item?.title) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(item?.title) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="see_all mb-4">
      <div className="headingbar">
        <h3 className="slider_heading">{item?.title}</h3>
        <button
          className="see_all_button"
          onClick={() => dispatch(seeAllName(item?.title))}
        >
          See all
        </button>
      </div>

      <div className="relative">
        {showNextButton && (
          <button className="next_button" onClick={handleNextClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none " id={item?.title}>
          {item?.data?.map((data: any, index: number) => (
            <div className="see_all_image" key={index}>
              <img src={data.img} alt="" />
            </div>
          ))}
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
