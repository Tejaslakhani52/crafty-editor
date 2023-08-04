import { documentsColors, solidColors } from "@/constants/colorsFile";
import { useRef, useState } from "react";
import ColorPicker from "./ColorPicker";

const ColorDropdown = ({ button }: any) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const buttonRef: any = useRef(null);
  const [distanceFromBottom, setDistanceFromBottom] = useState(null);
  const [selectColor, setSelectColor] = useState<string>("#2f2325");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleWindowResize = () => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const distance: any = window.innerHeight - buttonRect.bottom;
      setDistanceFromBottom(distance);
    };

    document.addEventListener("mousedown", handleClickOutside);

    handleWindowResize();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={toggleDropdown}>
        {button}
        {/* <div
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: selectColor,
            borderRadius: "4px",
          }}
        ></div> */}
      </button>
      {isDropdownOpen && (
        <div
          className="dropdown"
          ref={dropdownRef}
          style={{
            height: "385px",
            width: "319px",
            position: "absolute",
            bottom:
              distanceFromBottom !== null && distanceFromBottom > 450
                ? ""
                : "125%",
            top:
              distanceFromBottom !== null && distanceFromBottom > 450
                ? "125%"
                : "",
            right: "0",
            borderRadius: "6px",
          }}
        >
          <div className="colors my-4">
            <div className="color_box">
              <h3>Document colors</h3>
              <div className="flex_box_2">
                <div className="boxs">
                  <ColorPicker color={selectColor} setColor={setSelectColor} />
                </div>
                {documentsColors?.map((item) => (
                  <div
                    className={`boxs ${
                      selectColor === item?.color ? "active_color" : ""
                    }`}
                    style={{ backgroundColor: item?.color }}
                    onClick={() => {
                      setSelectColor(item?.color);
                      setDropdownOpen(false);
                    }}
                  ></div>
                ))}
              </div>
            </div>

            <div className="color_box">
              <h3>Default colors</h3>
              <div className="flex_box_2">
                {solidColors?.map((item, index) => (
                  <div
                    className={`boxs ${
                      selectColor === item?.color ? "active_color" : ""
                    }`}
                    key={index}
                    style={{ backgroundColor: item?.color }}
                    onClick={() => {
                      setSelectColor(item?.color);
                      setDropdownOpen(false);
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{``}</style>
    </div>
  );
};

export default ColorDropdown;
