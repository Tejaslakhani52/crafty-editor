import { Slider } from "antd";
import React, { useEffect, useRef, useState } from "react";

export default function Transparency() {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState<number>(50);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="specing" ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
        className={`${isOpen && "threed_shadow"}`}
      >
        <img src="./icons/transparancy.svg" alt="" />
      </button>

      {isOpen && (
        <div className="dialog">
          <div className="rangebar_box pb-[20px]">
            <div className="latter_spacing">
              <h3>Transparency</h3>
            </div>
            <div className="transparency">
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                className={`slider`}
                onChange={({ target: { value: radius } }) => {
                  setValue(Number(radius));
                }}
              />
              <h3>{`${value}%`}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
