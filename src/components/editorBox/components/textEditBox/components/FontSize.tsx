import React, { useEffect, useRef, useState } from "react";

export default function FontSize() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [customeWeight, setCustomeWeight] = useState<any>(38);

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
    <div className="custome_font_size" ref={dropdownRef}>
      <button onClick={() => setCustomeWeight(customeWeight - 1)}>
        <img src="./icons/minus.svg" alt="" />
      </button>

      <div className="v_divider" />

      <input
        type="number"
        value={customeWeight}
        onChange={(e) => setCustomeWeight(Number(e.target.value))}
        onClick={handleButtonClick}
      />
      <div className="v_divider" />

      <button onClick={() => setCustomeWeight(customeWeight + 1)}>
        <img src="./icons/weight_plus.svg" alt="" />
      </button>

      {isOpen && (
        <div className="select_font">
          {Array.from({ length: 70 }, (_, index) => (
            <div
              onClick={() => {
                setCustomeWeight(index * 2 + 6);
                setIsOpen(false);
              }}
            >
              {index * 2 + 6}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
