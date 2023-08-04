import React, { useRef, useState } from "react";

export default function BaddNewLogo({ setUploadImage }: any) {
  const buttonRef: any = useRef(null);
  const dropdownRef: any = useRef(null);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleUploadClick = () => {
    const fileInput = document.getElementById("upload-input");
    fileInput?.click();
    setDropdownOpen(false);
  };

  const handleFileSelect = (event: any) => {
    const file = event.target.files[0];
    // if (file) {
    //   const imageUrl = URL.createObjectURL(file);
    // }
    setUploadImage(file);
  };

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
        className="flex items-center gap-2 bg-[#EDF0F9] rounded-[3px] px-[10px] py-[5px] font-medium text-[14px]"
        ref={buttonRef}
        onClick={toggleDropdown}
      >
        <img src="./icons/plus.svg" alt="" />
        Add new
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
            right: "20px",
            padding: "10px 0",
            width: "250px",
            backgroundColor: "white",
            boxShadow: " 0px 0px 10px 2px rgba(0, 0, 0, 0.10)",
          }}
        >
          <div
            className="pb-[10px] px-[20px] font-medium mb-[10px]"
            style={{ borderBottom: "1px solid #D5D8E3" }}
          >
            <p>Add new</p>
          </div>

          <input
            type="file"
            id="upload-input"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <div className="unlike_report " onClick={handleUploadClick}>
            <div className="w-[25px] flex items-center">
              <img src="./icons/upload.svg" alt="" />
            </div>
            <p>Upload Logos</p>
          </div>

          <div className="unlike_report ">
            <div className="unlike_icon">
              <img src="./icons/brandKit/guidelines.svg" alt="" />
            </div>
            <p>Add guidelines</p>
          </div>
        </div>
      )}
    </div>
  );
}
