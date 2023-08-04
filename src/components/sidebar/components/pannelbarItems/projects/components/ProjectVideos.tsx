import { useScreenHeight } from "@/commonFunction/screenHeight";
import { activeTab } from "@/redux/reducer/projectReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProjectMoreDropdown from "./common/ProjectMoreDropdown";
import SelectedBox from "./common/SelectedBox";

const videosData = [
  { video: "./images/projects/video1.mp4", name: "video" },
  { video: "./images/projects/video1.mp4", name: "video" },
  { video: "./images/projects/video1.mp4", name: "video" },
  { video: "./images/projects/video1.mp4", name: "video" },
];
export default function ProjectVideos() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();

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
      <div className="see_all mb-4 pt-1">
        <div className="flex flex-wrap justify-between">
          {videosData?.map((item, index) => {
            const id = `item_${index}`;
            const active = hoveredItem === id;
            const includes = selectedItems.includes(id);
            return (
              <div
                className="w-[48.5%] rounded-[12px] mb-[5px] ontick"
                key={index}
                onMouseEnter={() => setHoveredItem(id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="  w-full rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
                  <div className="icon">
                    <video style={{ width: "100%", height: "100%" }}>
                      <source src={item?.video} />
                    </video>

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
