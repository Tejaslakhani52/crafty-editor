import { openFolder } from "@/redux/reducer/projectReducer";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TabBar from "../TabBar";
import CommonTabBar from "@/components/common/CommonTabBar";
import FolderAllItem from "./components/FolderAllItem";
import FolderImages from "./components/FolderImages";
import FolderVideos from "./components/FolderVideos";
import FolderDesigns from "./components/FolderDesigns";
import FolderMoreAction from "./components/common/FolderMoreAction";

export default function OpenFolder() {
  const dispatch = useDispatch();
  const openFolderName = useSelector((state: any) => state.project.openFolder);

  const [activeFolderName, setActiveFolderName] = useState<string>("All");

  const tabBarComponent: any = {
    All: <FolderAllItem setAction={setActiveFolderName} />,
    Images: <FolderImages />,
    Videos: <FolderVideos />,
    Designs: <FolderDesigns />,
  };

  return (
    <div>
      <div className="flex justify-between px-[15px] items-center">
        <h3 className="flex gap-[15px] font-medium">
          <img
            src="./icons/longLeftArrow.svg"
            alt=""
            width={"18px"}
            height={"18px"}
            className="cursor-pointer"
            onClick={() => {
              dispatch(openFolder(""));
            }}
          />
          {openFolderName}
        </h3>

        <FolderMoreAction />
      </div>

      <CommonTabBar
        categoryName={["All", "Designs", "Images", "Videos"]}
        setValue={setActiveFolderName}
        value={activeFolderName}
      />

      {tabBarComponent[activeFolderName]}
    </div>
  );
}
