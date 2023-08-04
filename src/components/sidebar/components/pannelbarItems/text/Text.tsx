import SearchBar from "@/components/common/SearchBar";
import React, { useState } from "react";
import CategoryButtonSlider from "../../common/CategoryButtonSlider";
import AllTemplates from "../../common/AllTemplates";
import RecentlyUsed from "./components/RecentlyUsed";
import AllFont from "./components/AllFont";
import { useScreenHeight } from "@/commonFunction/screenHeight";

const recentlyUsed = [
  { img: "./images/text_1.png" },
  { img: "./images/text_2.png" },
  { img: "./images/text_3.png" },
  { img: "./images/text_1.png" },
  { img: "./images/text_2.png" },
];

export default function Text() {
  const screenHeight = useScreenHeight();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <div
        style={{
          height: `${screenHeight - 160}px`,
          padding: "0 11px 0 15px",
        }}
        className="scroll_bar_section"
      >
        <div className="text">
          {/* <CategoryButtonSlider /> */}
          {/* 
      <AllTemplates img={"./images/allTemplatedemo1.png"} /> */}
          <div className="add_heading_box">
            <button className="add_text_box ">Add a text box</button>
            <button className="add_heading text-[22px]">Add a heading</button>
            <button className="add_heading subheading   ">
              Add a subheading
            </button>
            <button className="add_heading little text-[14px] ">
              Add a little bit of body text
            </button>
          </div>

          <RecentlyUsed data={recentlyUsed} />
          <AllFont />
        </div>
      </div>
    </div>
  );
}
