import React, { useState } from "react";
import Brushes from "./components/Brushes";
import Weight from "./components/Weight";
import Transparency from "./components/Transparency";
import Colors from "./components/Colors";
import SearchBar from "@/components/common/SearchBar";
import { useScreenHeight } from "@/commonFunction/screenHeight";

export default function Draw() {
  const screenHeight = useScreenHeight();
  const [searchValue, setSearchValue] = useState("");
  const [activeButton, setActiveButton] = useState<string>();
  return (
    <div>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <div
        style={{
          height: `${screenHeight - 160}px`,
        }}
        className="scroll_bar_section mt-4"
      >
        <div className="draw">
          <Brushes />
          <Weight />
          <Transparency />

          <div className="button_box">
            <button onClick={() => setActiveButton("erase")}>
              <img src="./icons/eraseIcon.svg" alt="" />
              <p className="gradient_text">Erase</p>
            </button>
            <button
              onClick={() => setActiveButton("deselect")}
              className={`${"deselect"}`}
            >
              <img src="./icons/deselect.svg" alt="" />
              Deselect
            </button>
          </div>

          <Colors />
        </div>
      </div>
    </div>
  );
}
