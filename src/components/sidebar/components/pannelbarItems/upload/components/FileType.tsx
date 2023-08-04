import React, { useEffect, useState } from "react";
const data = [
  { name: "Images" },
  { name: "Videos" },
  { name: "Audio" },
  { name: "Stickers" },
];

export default function FileType({ setType, type }: any) {
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
      <div className="relative">
        {showNextButton && (
          <button className="next_button" onClick={handleNextClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none" id="brandIcons">
          {data?.map((item, index) => (
            <button
              className={`${type === item.name ? "active_button" : "button"}`}
              style={{ padding: "7px 12px" }}
              key={index}
              onClick={() => setType(item?.name)}
            >
              <div>{item?.name}</div>
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
