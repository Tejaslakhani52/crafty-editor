import React, { useEffect, useState } from "react";

const data = [
  { name: "Birthday", img: "./images/demoImage.png" },
  { name: "Baby", img: "./images/demoImage2.png" },
  { name: "Wedding", img: "./images/demoImage3.png" },
  { name: "Birthday", img: "./images/demoImage.png" },
  { name: "Baby", img: "./images/demoImage2.png" },
  { name: "Wedding", img: "./images/demoImage3.png" },
];

export default function RecentlyUsed({ data }: any) {
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
    const container = document.getElementById("see_all_slider");
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll({ target: container } as unknown as Event);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, ["see_all_slider"]);

  const handleNextClick = () => {
    const container = document.getElementById("see_all_slider") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handlePrevClick = () => {
    const container = document.getElementById("see_all_slider") as HTMLElement;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="see_all">
      <div className="headingbar">
        <h3 className="slider_heading">Recently used</h3>
        <button className="see_all_button">See all</button>
      </div>

      <div className="relative">
        {showNextButton && (
          <button className="next_button" onClick={handleNextClick}>
            <img src="./icons/rightArrow.svg" alt="" />
          </button>
        )}
        <div className="scroll_slider scroll_none " id="see_all_slider">
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
