import React, { useEffect, useState } from "react";

export default function CategoryButtonSlider({ title, categoryName }: any) {
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
    <div className="category_slider">
      {title && <h3> {title}</h3>}

      <div className="relative">
        {showNextButton && (
          <button className="next_button" onClick={handleNextClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none " id="brandIcons">
          {categoryName?.map((item: any, index: number) => (
            <button className="button" key={index}>
              {item}
            </button>
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
