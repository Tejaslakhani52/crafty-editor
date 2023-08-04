import { Slider } from "antd";
import React, { useEffect, useRef, useState } from "react";

export default function Spacing() {
  const [isOpen, setIsOpen] = useState(false);
  const [letterSpacing, setLetterSpacing] = useState<number>(0);
  const [lineSpacing, setLineSpacing] = useState<number>(1.4);
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

  const [value, setValue] = useState(0); // Default value
  const min = -100;
  const max = 100;
  const step = 1;

  const handleChange = (event: any) => {
    setValue(parseInt(event.target.value));
  };

  return (
    <div className="specing" ref={dropdownRef}>
      <button
        onClick={handleButtonClick}
        className={`${isOpen && "threed_shadow"}`}
      >
        <img src="./icons/line-spacing.svg" alt="" />
      </button>

      {isOpen && (
        <div className="dialog">
          <div className="rangebar_box">
            <div className="latter_spacing">
              <h3>Latter spacing</h3>
              <div className="value">{letterSpacing}</div>
            </div>
            {/* <div className="latter_rangebar"> */}
            <input
              type="range"
              min="-200"
              max="800"
              value={letterSpacing}
              className={`slider`}
              onChange={({ target: { value: radius } }) => {
                setLetterSpacing(Number(radius));
              }}
            />

            <div className="range_div" onClick={() => setLetterSpacing(0)}>
              <div className="sign"></div>
            </div>
          </div>
          {/* <div className="range_mark" /> */}
          {/* </div> */}
          <div className="rangebar_box_line">
            <div className="latter_spacing">
              <h3>Latter spacing</h3>
              <div className="value">{lineSpacing}</div>
            </div>
            {/* <div className="latter_rangebar"> */}
            <input
              type="range"
              min="0.5"
              max="2.5"
              value={lineSpacing}
              step={0.01}
              className={`slider`}
              onChange={({ target: { value: radius } }) => {
                setLineSpacing(Number(radius));
              }}
            />
            <div className="range_div_line" onClick={() => setLineSpacing(1.4)}>
              <div className="sign"></div>
            </div>

            {/* <Slider
              defaultValue={30}
              // onChange={onChange}
              // onAfterChange={onAfterChange}
            />
            
            <Slider
              range
              step={10}
              defaultValue={[20, 0]}
              // onChange={onChange}
              // onAfterChange={onAfterChange}
            /> */}
          </div>

          <div className="divider" />

          <div className="anchor_box">
            <h3>Anchor text box</h3>

            <div className="anchor_icon">
              <button>
                <img src="./icons/anchor1.svg" alt="" />
              </button>
              <button>
                <img src="./icons/anchor2.svg" alt="" />
              </button>
              <button>
                <img src="./icons/anchor3.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
