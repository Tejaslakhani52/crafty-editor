import { useScreenHeight } from "@/commonFunction/screenHeight";
import { activeTab } from "@/redux/reducer/projectReducer";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FolderMoreDropdown from "./common/FolderMoreDropdown";
import SearchBar from "@/components/common/SearchBar";
import SelectedBox from "../../common/SelectedBox";

const imagesData = [
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img4.png", name: "image" },
  { image: "./images/projects/img3.png", name: "image" },
];
export default function FolderImages() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
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
    <>
      <div className="pb-2">
        <SearchBar value={searchValue} setValue={setSearchValue} />
      </div>
      <div
        style={{
          height: `${screenHeight - 250}px`,
        }}
        className="scroll_bar_section"
      >
        <div className="see_all mb-4 pt-1">
          <div className="flex flex-wrap justify-between">
            {imagesData?.map((item, index) => {
              const id = `item_${index}`;
              const active = hoveredItem === id;
              const includes = selectedItems.includes(id);
              return (
                <div
                  className="w-[48.5%] rounded-[12px] ontick mb-[9px]"
                  key={index}
                  onMouseEnter={() => setHoveredItem(id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="  w-full rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
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

                      <FolderMoreDropdown
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
    </>
  );
}
