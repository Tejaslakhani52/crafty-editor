import { useScreenHeight } from "@/commonFunction/screenHeight";
import { activeTab } from "@/redux/reducer/projectReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProjectMoreDropdown from "./common/ProjectMoreDropdown";
import SelectedBox from "./common/SelectedBox";

export default function Design() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const [searchValue, setSearchValue] = useState("");

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  console.log("selectedItems: ", selectedItems);
  const [hoveredItem, setHoveredItem] = useState<any>(null);

  const handleItemClick = (id: string) => {
    const isSelected = selectedItems.includes(id);
    if (isSelected) {
      setSelectedItems((prevState) => prevState.filter((item) => item !== id));
    } else {
      setSelectedItems((prevState) => [...prevState, id]);
    }
  };

  return (
    <div
      style={{
        height: `${screenHeight - 210}px`,
      }}
      className="scroll_bar_section"
    >
      <div className="see_all mb-4">
        <div className="flex flex-wrap justify-between">
          {new Array(30).fill("#497dec26")?.map((item, index) => {
            const id = `item_${index}`;
            const active = hoveredItem === id;
            const includes = selectedItems.includes(id);
            return (
              <div className="w-[48.5%] rounded-[12px]" key={index}>
                <div
                  className="p-3 w-full bg-[#E6E8EE] rounded-[10px] ontick"
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src={"./images/projects/img2.png"}
                    alt={"image"}
                    className={` w-[auto] h-[100px] mx-auto rounded-[4px]`}
                  />
                  <div
                    className="untick"
                    style={{
                      opacity: active && !includes ? 1 : 0,
                      transition: "0.3s all",
                    }}
                    onClick={() => handleItemClick(id)}
                  >
                    <img src="./icons/untickBlack.svg" alt="" />
                  </div>

                  <div
                    className="ticked"
                    style={{
                      display: includes ? "block" : "none",
                      transition: "0.3s all",
                    }}
                    onClick={() => handleItemClick(id)}
                  >
                    <img
                      src="./icons/tickBlue.svg"
                      alt=""
                      className="ml-[6px] mt-[6px]"
                    />
                  </div>

                  <ProjectMoreDropdown
                    hoveredItem={includes ? false : active}
                  />
                </div>

                <div className="py-2 pb-4">
                  <p className="text-ellipsis w-[100%] whitespace-nowrap overflow-hidden text-[14px] text-black font-medium">
                    Dark now or never questions
                  </p>
                  <p className="text-[#ABB2C7] text-[14px]">Phone Wallpaper</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <SelectedBox
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </div>
  );
}
