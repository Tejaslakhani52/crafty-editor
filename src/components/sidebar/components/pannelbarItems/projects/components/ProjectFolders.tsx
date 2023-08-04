import { useScreenHeight } from "@/commonFunction/screenHeight";
import { activeTab, openFolder } from "@/redux/reducer/projectReducer";
import React from "react";
import { useDispatch } from "react-redux";

const foldersData = [
  { icon: "./images/projects/like.svg", name: "Liked" },
  { icon: "./images/projects/folder.svg", name: "Crafty" },
  { icon: "./images/projects/folder.svg", name: "Crafty" },
  { icon: "./images/projects/folder.svg", name: "Homes" },
];

export default function Folders() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();

  return (
    <div
      style={{
        height: `${screenHeight - 210}px`,
        padding: " 0 15px",
      }}
      className="scroll_bar_section"
    >
      <div className="see_all mb-4 mt-3">
        <div className="grid  justify-between grid-cols-3 gap-[10px]">
          <div className="rounded-[12px] cursor-pointer">
            <div className="p-3 w-full bg-[#E6E8EE] rounded-[4px] h-[100px] flex flex-col gap-[5px] justify-center items-center">
              <div className="icon">
                <img
                  src={"./images/projects/add.svg"}
                  alt=""
                  className="mx-auto"
                />
              </div>
              <p className="text-[14px] text-center">Create Folders</p>
            </div>
          </div>
          {foldersData?.map((item, index) => (
            <div
              className="  rounded-[12px] cursor-pointer"
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
    </div>
  );
}
