import DataBar from "@/components/common/DataBar";
import SearchBar from "@/components/common/SearchBar";
import React, { useEffect, useRef, useState } from "react";

export default function SelectFontStyle({ dataBar, setDataBar }: any) {
  const [activeButton, setActiveButton] = useState<string>("Font");
  const [searchValue, setSearchValue] = useState("");

  const innerSidebarRef = useRef(null);
  const [scrollHeight, setScrollHeight] = useState<any>("");

  useEffect(() => {
    const innerSidebarElement: any = innerSidebarRef.current;
    const height = innerSidebarElement?.offsetHeight;
    const width = innerSidebarElement?.offsetWidth;
    setScrollHeight(height);
  }, []);

  return (
    <>
      <div ref={innerSidebarRef}>
        <div>
          <div className="button_tabs">
            <button
              className={`${activeButton === "Font" ? "font" : "text_style"} `}
              onClick={() => setActiveButton("Font")}
            >
              Font
            </button>
            <button
              className={`${activeButton === "Text" ? "font" : "text_style"} `}
              onClick={() => setActiveButton("Text")}
            >
              Text Styles
            </button>
          </div>
          <SearchBar value={searchValue} setValue={setSearchValue} />
        </div>
        <div
          style={{
            height: `${scrollHeight - 380}px`,
          }}
          className="scroll_bar_section"
        ></div>
      </div>
    </>
  );
}
