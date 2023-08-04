import { useRef, useState } from "react";
import { ChromePicker } from "react-color";

const ColorPicker = ({ color, setColor }: any) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const buttonRef: any = useRef(null);
  const [selectColor, setSelectColor] = useState<string>("#2f2325");

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  return (
    <div className="relative">
      <button ref={buttonRef} onClick={toggleDropdown}>
        <div
          style={{
            height: "35px",
            width: "35px",
            backgroundColor: selectColor,
            borderRadius: "4px",
          }}
        >
          <img src="./images/addColor.png" alt="" />
        </div>
      </button>
      {isDropdownOpen && (
        <div
          className="dropdown"
          ref={dropdownRef}
          style={{
            height: "auto",
            width: "auto",
            position: "absolute",
            left: "0",
            zIndex: "500",
            boxShadow: "none",
          }}
        >
          <ChromePicker color={color} onChange={(e: any) => setColor(e?.hex)} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
