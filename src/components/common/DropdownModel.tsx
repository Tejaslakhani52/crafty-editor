import React, { useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function DropdownModel(props: any) {
  const buttonRef: any = useRef(null);
  const dropdownRef: any = useRef(null);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dialogRenderValue = useSelector(
    (state: any) => state?.data?.dialogRender
  );
  const [distanceFromBottom, setDistanceFromBottom] = useState<any>(null);
  const [dropdownHeight, setDropdownHeight] = useState<number>(0);
  console.log("dropdownHeight: ", dropdownHeight);

  const toggleDropdown = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const top = buttonRect.top + window.pageYOffset;
    const left = buttonRect.left + window.pageXOffset;
    setTop(top);
    setLeft(left);
    setDropdownOpen(!isDropdownOpen);
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
        props?.dCloseAction(false);
      }
    };

    const handleWindowResize = () => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const distance: any = window.innerHeight - buttonRect.bottom;
      console.log("distance: ", distance);
      setDistanceFromBottom(distance);
    };

    document.addEventListener("mousedown", handleClickOutside);

    handleWindowResize();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  useEffect(() => {
    if (isDropdownOpen) {
      if (dropdownRef.current) {
        const height = dropdownRef.current.scrollHeight;
        setDropdownHeight(height);
      }
    }
  }, [isDropdownOpen, dialogRenderValue]);

  const topValue = useMemo(() => {
    return distanceFromBottom < dropdownHeight + 20
      ? top - dropdownHeight
      : top;
  }, [distanceFromBottom, dropdownHeight, top]);
  return (
    <div>
      <div
        className="more_dialog"
        ref={buttonRef}
        onClick={toggleDropdown}
        style={{
          opacity: props?.hoveredItem || isDropdownOpen ? "1" : "",
          transition: "0.3s all",
          top: "5px",
          right: "8px",
        }}
        // onClick={toggleDropdown}
      >
        <img src="./icons/More.svg" alt="" />
      </div>
      {isDropdownOpen && (
        <div
          style={{
            backgroundColor: "transparent",
            position: "fixed",
            top: "80px",
            left: "125px",
            width: "349px",
            bottom: "20px",
            zIndex: "555",
          }}
        >
          <div
            className="dropdown"
            ref={dropdownRef}
            style={{
              position: "fixed",
              borderRadius: "6px",
              zIndex: "50000",
              top: `${topValue > 0 ? topValue : 10}px`,
              left: `${left + 40}px`,
              boxShadow:
                "-8px -8px 16px 0px rgba(255, 255, 255, 0.70) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.30) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.50), -8px -8px 16px 0px rgba(255, 255, 255, 0.30)",
              padding: "0",
            }}
          >
            {props?.children}
          </div>
        </div>
      )}
    </div>
  );
}
