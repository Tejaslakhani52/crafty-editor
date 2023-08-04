import DropdownModel from "@/components/common/DropdownModel";
import InputWithEditIcon from "@/components/common/InputWithEditIcon";
import MoveToFolder from "@/components/common/MoveToFolder";
import SearchBar from "@/components/common/SearchBar";
import { dialogRender } from "@/redux/reducer/dataReducer";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ProjectMoreDropdown({ hoveredItem }: any) {
  const dispatch = useDispatch();
  const dialogRenderValue = useSelector(
    (state: any) => state?.data?.dialogRender
  );
  const [projectName, setProjectName] = useState<string>("Example name");
  const [moveToFolder, setMoveToFolder] = useState<boolean>(false);

  return (
    <>
      <DropdownModel
        hoveredItem={hoveredItem}
        dialogRender={moveToFolder}
        dCloseAction={setMoveToFolder}
      >
        {moveToFolder ? (
          <div className="w-[300px] ">
            <h3 className="flex gap-[15px] font-medium p-[15px] ">
              <img
                src="./icons/longLeftArrow.svg"
                alt=""
                width={"18px"}
                height={"18px"}
                className="cursor-pointer"
                onClick={() => {
                  setMoveToFolder(false);
                  dispatch(dialogRender(!dialogRenderValue));
                }}
              />
              Move to folder
            </h3>
            <MoveToFolder
              backAction={setMoveToFolder}
              dialogRenderAction={setMoveToFolder}
            />
          </div>
        ) : (
          <div className="w-[300px]">
            <div className="p-[15px]">
              <InputWithEditIcon
                value={projectName}
                setValue={setProjectName}
                placeholder="Name"
              />
            </div>
            <div className="divider" />

            <div className="unlike_report ">
              <div className="unlike_icon">
                <img src="./icons/Edit.svg" alt="" />
              </div>
              <p>Edit design</p>
            </div>

            <div
              className="unlike_report"
              onClick={() => {
                setMoveToFolder(true);
                dispatch(dialogRender(!dialogRenderValue));
              }}
            >
              <div className="unlike_icon">
                <img src="./images/projects/folder.svg" alt="" />
              </div>
              <p>Move to folder</p>
              <div className=" ml-[auto] ">
                <img src="./icons/rightArrow.svg" alt="" />
              </div>
            </div>

            <div className="unlike_report mb-3">
              <div className="unlike_icon">
                <img src="./icons/delete.svg" alt="" />
              </div>
              <p>Move to trash</p>
            </div>
          </div>
        )}
      </DropdownModel>
    </>
  );
}
