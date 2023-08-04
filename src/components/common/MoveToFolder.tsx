import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { dialogRender } from "@/redux/reducer/dataReducer";

const recentFolder = [
  { icon: "./images/projects/folder.svg", name: "Crafty" },
  { icon: "./images/projects/folder.svg", name: "Homes" },
];
const allFolder = [
  { icon: "./images/projects/folder.svg", name: "Crafty" },
  { icon: "./images/projects/folder.svg", name: "Homes" },
  { icon: "./images/projects/folder.svg", name: "Homes1" },
];

const moveFolder: any = [];

export default function MoveToFolder({ backAction, dialogRenderAction }: any) {
  const dispatch = useDispatch();

  const [moveToHere, setMoveToHere] = useState<string>("");
  const [searchValue, setSearchValue] = useState("");
  const [activeButton, setActiveButton] = useState<string>("recent");
  const [createNewFolder, setcreateNewFolder] = useState<boolean>(false);
  const [newFolderName, setNewFolderName] = useState<string>("");
  const dialogRenderValue = useSelector(
    (state: any) => state?.data?.dialogRender
  );
  return (
    <>
      <div style={{ display: createNewFolder ? "none" : "block" }}>
        <div className="pb-[15px]">
          <SearchBar value={searchValue} setValue={setSearchValue} />
        </div>
        <div style={{ display: moveToHere === "" ? "block" : "none" }}>
          <div className="button_tabs">
            <button
              className={`${
                activeButton === "recent" ? "font" : "text_style"
              } `}
              onClick={() => setActiveButton("recent")}
              style={{ height: "35px" }}
            >
              Recent
            </button>
            <button
              className={`${
                activeButton === "folders" ? "font" : "text_style"
              } `}
              onClick={() => setActiveButton("folders")}
              style={{ height: "35px" }}
            >
              All folders
            </button>
          </div>
          {activeButton === "recent" ? (
            <div className="grid  justify-between grid-cols-3 gap-[10px] px-[15px] min-h-[250px] max-h-[300px] overflow-auto	">
              {recentFolder?.map((item, index) => (
                <div
                  className="  rounded-[12px] cursor-pointer"
                  key={index}
                  onClick={() => setMoveToHere(item?.name)}
                >
                  <div className="p-3 w-full bg-[#E6E8EE] rounded-[4px] h-[80px] flex flex-col gap-[5px] justify-center items-center">
                    <div className="icon">
                      <img src={item?.icon} alt="" className="mx-auto" />
                    </div>
                    <p className="text-[14px] text-center">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid  justify-between grid-cols-3 gap-[10px] px-[15px] min-h-[250px] max-h-[300px] overflow-auto	">
              {allFolder?.map((item, index) => (
                <div
                  className="rounded-[12px] cursor-pointer"
                  key={index}
                  onClick={() => setMoveToHere(item?.name)}
                >
                  <div className="p-3 w-full bg-[#E6E8EE] rounded-[4px] h-[80px] flex flex-col gap-[5px] justify-center items-center">
                    <div className="icon">
                      <img src={item?.icon} alt="" className="mx-auto" />
                    </div>
                    <p className="text-[14px] text-center">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ display: moveToHere === "" ? "none" : "block" }}>
          <h3 className="flex items-center gap-[5px] font-medium px-[30px]">
            <button
              className="cursor-pointer menu_hover  h-[30px] w-[30px] rounded-[4px]"
              onClick={() => setMoveToHere("")}
            >
              <img
                src="./icons/leftArrow.svg"
                alt=""
                width={"8px"}
                height={"8px"}
                className="mx-auto"
              />
            </button>
            {moveToHere}
          </h3>
          {moveFolder?.length > 0 ? (
            <div className="grid  justify-between grid-cols-3 gap-[10px] px-[15px] min-h-[250px] max-h-[300px] overflow-auto	">
              {moveFolder?.map((item: any, index: number) => (
                <div
                  className="rounded-[12px] cursor-pointer"
                  key={index}
                  onClick={() => setMoveToHere(item?.name)}
                >
                  <div className="p-3 w-full bg-[#E6E8EE] rounded-[4px] h-[80px] flex flex-col gap-[5px] justify-center items-center">
                    <div className="icon">
                      <img src={item?.icon} alt="" className="mx-auto" />
                    </div>
                    <p className="text-[14px] text-center">{item?.name}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex  justify-center   gap-[10px] px-[15px] min-h-[250px] max-h-[300px] overflow-auto items-center	">
              <p>Move here or create a folder.</p>
            </div>
          )}
        </div>

        <div className="button_tabs  ">
          <button
            className={`${"text_style"} `}
            onClick={() => {
              setcreateNewFolder(true);
              dispatch(dialogRender(!dialogRenderValue));
            }}
            style={{ height: "35px" }}
          >
            + Create new
          </button>
          <button
            className={`${
              moveToHere === "" ? "text_style cursor-not-allowed	" : "font"
            } `}
            // onClick={() => setActiveButton("Text")}
            style={{ height: "35px" }}
          >
            Move to folder  
          </button>
        </div>
      </div>

      <div
        className="pb-[10px]"
        style={{ display: createNewFolder ? "block" : "none" }}
      >
        <div
          className="searchbar mx-[12px] mb-4"
          style={{
            boxShadow:
              "-8px -8px 16px 0px rgba(255, 255, 255, 0.70) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.40) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.50), -8px -8px 16px 0px rgba(255, 255, 255, 0.80)",
          }}
        >
          <input
            type="text"
            placeholder="Name new folder"
            value={newFolderName}
            onChange={(e) => setNewFolderName(e.target.value)}
          />
          <img
            src="./icons/inputClose.svg"
            alt=""
            onClick={() => setNewFolderName("")}
            className="cursor-pointer"
          />
          {/* <img src="./icons/settingBox.svg" alt="" /> */}
        </div>

        <div className="button_tabs " style={{ padding: "0 15px" }}>
          <button
            className={`${
              newFolderName === "" ? "text_style cursor-not-allowed" : "font"
            } `}
            // onClick={() => setActiveButton("Text")}
            style={{ height: "35px", width: "100%" }}
          >
            Add to new folder
          </button>
        </div>
      </div>
    </>
  );
}
