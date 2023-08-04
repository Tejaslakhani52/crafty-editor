import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function FolderMoreAction(props: any) {
  const buttonRef: any = useRef(null);
  const dropdownRef: any = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
      <button
        className={`${
          isDropdownOpen && "threed_shadow"
        } button_hover p-[5px] rounded-[4px]`}
        ref={buttonRef}
        onClick={toggleDropdown}  
        //   onClick={() => setSelectedItems([])}
      >
        <img
          src="./icons/settingMore.svg"
          alt=""
          className="w-[24px] h-[24px]"
        />
      </button>
      {isDropdownOpen && (
        <div
          className="dropdown"
          ref={dropdownRef}
          style={{
            position: "absolute",
            borderRadius: "6px",
            zIndex: "50000",
            top: "40px",
            right: "0",
            boxShadow:
              "-8px -8px 16px 0px rgba(255, 255, 255, 0.70) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.30) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.50), -8px -8px 16px 0px rgba(255, 255, 255, 0.30)",
            padding: "10px 0",
            width: "300px",
          }}
        >
          <div className="unlike_report ">
            <div className="w-[25px] flex items-center">
              <img src="./icons/upload.svg" alt="" />
            </div>
            <p>Upload</p>
          </div>

          <div className="unlike_report ">
            <div className="unlike_icon">
              <img src="./icons/downloadArrow.svg" alt="" />
            </div>
            <p>Create new folder</p>
          </div>
          <div className="unlike_report ">
            <div className="unlike_icon">
              <img src="./icons/Edit.svg" alt="" />
            </div>
            <p>Rename</p>
          </div>
          <div className="unlike_report ">
            <div className="unlike_icon">
              <img src="./icons/delete.svg" alt="" />
            </div>
            <p>Delete folder</p>
          </div>
        </div>
      )}
    </div>
  );
}
