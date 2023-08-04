import { useState, useRef, useEffect } from "react";

const DropdownMenu = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef: any = useRef(null);
  const buttonRef: any = useRef(null);
  const [distanceFromBottom, setDistanceFromBottom] = useState(null);

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
    window.addEventListener("resize", handleWindowResize);

    handleWindowResize(); // Calculate initial distance

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  };

  return (
    <div className="dropdown-container">
      <button ref={buttonRef} onClick={toggleDropdown}>
        Toggle Dropdown
      </button>
      {isDropdownOpen && (
        <div
          className="dropdown"
          ref={dropdownRef}
          style={{
            height: "320px",
            width: "312px",
            position: "absolute",
            bottom:
              distanceFromBottom !== null && distanceFromBottom > 360
                ? ""
                : "100%",
          }}
        >
          Content of the dropdown
        </div>
      )}

      <style jsx>{`
        .dropdown-container {
          position: relative;
        }

        .dropdown {
          background-color: #fff;
          padding: 10px;
          border: 1px solid #ccc;
          overflow-y: auto;
          z-index: 500;
        }
      `}</style>
    </div>
  );
};

export default DropdownMenu;

 