import { useScreenHeight } from "@/commonFunction/screenHeight";
import { activeTab, openFolder } from "@/redux/reducer/projectReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ProjectMoreDropdown from "../common/ProjectMoreDropdown";
import SelectedBox from "../common/SelectedBox";

const foldersData = [
  { icon: "./images/projects/add.svg", name: "Create Folders", id: "1" },
  { icon: "./images/projects/like.svg", name: "Liked", id: "2" },
  { icon: "./images/projects/folder.svg", name: "Crafty", id: "3" },
];

const imagesData = [
  { image: "./images/projects/img3.png", name: "image", id: "4" },
  { image: "./images/projects/img4.png", name: "image", id: "5" },
  { image: "./images/projects/img4.png", name: "image", id: "6" },
  { image: "./images/projects/img3.png", name: "image", id: "7" },
];

const videosData = [
  { video: "./images/projects/video1.mp4", name: "video", id: "8" },
  { video: "./images/projects/video1.mp4", name: "video", id: "9" },
  { video: "./images/projects/video1.mp4", name: "video", id: "10" },
  { video: "./images/projects/video1.mp4", name: "video", id: "11" },
];

export default function AllProject() {
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
      <div className="see_all mb-4">
        <div className="headingbar">
          <h3 className="slider_heading">Design</h3>
          <button
            className="see_all_button"
            onClick={() => {
              dispatch(activeTab("Design"));
            }}
          >
            See all
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {new Array(4).fill("#497dec26").map((item, index) => {
            const id = `item_${index}`;
            const active = hoveredItem === id;
            const includes = selectedItems.includes(id);
            return (
              <div className={`w-[48.5%] rounded-[12px]`} key={id}>
                <div
                  className="p-3 w-full bg-[#E6E8EE] rounded-[10px] ontick"
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <img
                    src="./images/projects/img2.png"
                    alt="image"
                    className="w-[auto] h-[100px] mx-auto rounded-[4px]"
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

      <div className="see_all mb-4">
        <div className="headingbar">
          <h3 className="slider_heading">Folders</h3>
          <button
            className="see_all_button"
            onClick={() => {
              dispatch(activeTab("Folders"));
            }}
          >
            See all
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {foldersData?.map((item, index) => (
            <div
              className="w-[31%] rounded-[12px] cursor-pointer"
              key={index}
              onClick={() => dispatch(openFolder(item?.name))}
            >
              <div className="p-3 w-full bg-[#E6E8EE] rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
                <div className="icon">
                  <img src={item?.icon} alt="" className="mx-auto" />
                </div>
                <p className="text-[14px] text-center">{item?.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="see_all mb-4 pt-1">
        <div className="headingbar">
          <h3 className="slider_heading">Images</h3>
          <button
            className="see_all_button"
            onClick={() => {
              dispatch(activeTab("Images"));
            }}
          >
            See all
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {imagesData?.map((item, index) => {
            const active = hoveredItem === item?.id;
            const includes = selectedItems.includes(item?.id);
            return (
              <div
                className="w-[48.5%] rounded-[12px] ontick mb-[9px]"
                key={index}
                onMouseEnter={() => setHoveredItem(item?.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className=" w-full rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
                  <div className="icon h-[100%]">
                    <img
                      src={item?.image}
                      alt=""
                      className="mx-auto h-[100%] rounded-[8px]"
                    />
                    <div
                      className="untick"
                      style={{
                        opacity: active && !includes ? 1 : 0,
                        transition: "0.3s all",
                      }}
                      onClick={() => handleItemClick(item?.id)}
                    >
                      <img src="./icons/untickBlack.svg" alt="" />
                    </div>

                    <div
                      className="ticked"
                      style={{
                        display: includes ? "block" : "none",
                        transition: "0.3s all",
                      }}
                      onClick={() => handleItemClick(item?.id)}
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

      <div className="see_all mb-4 pt-1">
        <div className="headingbar">
          <h3 className="slider_heading">Videos</h3>
          <button
            className="see_all_button"
            onClick={() => {
              dispatch(activeTab("Videos"));
            }}
          >
            See all
          </button>
        </div>

        <div className="flex flex-wrap justify-between">
          {videosData?.map((item, index) => {
            const active = hoveredItem === item?.id;
            const includes = selectedItems.includes(item?.id);
            return (
              <div
                className="w-[48.5%] rounded-[12px] mb-[5px] ontick"
                key={index}
                onMouseEnter={() => setHoveredItem(item?.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <div className="  w-full rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
                  <div className="icon">
                    <video
                      style={{ width: "100%", height: "100%" }}
                      className=" rounded-[8px]"
                    >
                      <source src={item?.video} />
                    </video>
                    <div
                      className="untick"
                      style={{
                        opacity: active && !includes ? 1 : 0,
                        transition: "0.3s all",
                      }}
                      onClick={() => handleItemClick(item?.id)}
                    >
                      <img src="./icons/untickBlack.svg" alt="" />
                    </div>

                    <div
                      className="ticked"
                      style={{
                        display: includes ? "block" : "none",
                        transition: "0.3s all",
                      }}
                      onClick={() => handleItemClick(item?.id)}
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
