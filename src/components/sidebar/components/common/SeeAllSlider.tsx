import React, { useEffect, useState } from "react";

export default function SeeAllSlider({ data, title, setAction }: any) {
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
    const container = document.getElementById(title);
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [title]);

  const handleNextClick = () => {
    const container = document.getElementById(title) as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById(title) as HTMLElement;
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
        <h3 className="slider_heading">{title}</h3>
        <button className="see_all_button" onClick={() => setAction(true)}>
          See all
        </button>
      </div>

      <div className="relative">
        {showNextButton && (
          <button className="next_button" onClick={handleNextClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none " id={title}>
          {data?.map((item: any, index: number) => (
            <div className="see_all_image" key={index}>
              <img src={item.img} alt="" />
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
