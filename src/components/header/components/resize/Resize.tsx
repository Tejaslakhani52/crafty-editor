import Divider from "@/components/common/Divider";
import IconText from "@/components/common/IconText";
import React, { useState, useEffect, useRef } from "react";
// import CreateNewDesign from "./fileComponents/CreateNewDesign";

export default function Resize() {
  const [isOpen, setIsOpen] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setCreateNew(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      // if (createNew) {
      //   setIsOpen(false);
      //   setCreateNew(false);
      // }
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
    <div className={`menu_name ${isOpen && "threed_shadow"}`} ref={dropdownRef}>
      <p
        className="text-[] cursor-pointer flex gap-2 font-medium"
        onClick={handleButtonClick}
      >
        <img src="./images/resize.svg" alt="" /> Resize
      </p>

      {/* {createNew && <CreateNewDesign />} */}
    </div>
  );
}
7;
