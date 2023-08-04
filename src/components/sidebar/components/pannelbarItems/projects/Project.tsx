import React, { useState } from "react";
import CategoryButtonSlider from "../../common/CategoryButtonSlider";
import SearchBar from "@/components/common/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import SeeAllSlider from "../../common/SeeAllSlider";
import TabBar from "./components/TabBar";
import { activeTab } from "@/redux/reducer/projectReducer";
import AllProject from "./components/allProjectData/AllProject";
import Design from "./components/ProjectDesign";
import Folders from "./components/ProjectFolders";
import ProjectImages from "./components/ProjectImages";
import ProjectVideos from "./components/ProjectVideos";
import OpenFolder from "./components/folder/OpenFolder";

const tabBarComponent: any = {
  All: <AllProject />,
  Design: <Design />,
  Folders: <Folders />,
  Images: <ProjectImages />,
  Videos: <ProjectVideos />,
};

export default function Project() {
  const dispatch = useDispatch();
  const activeName = useSelector((state: any) => state.project.activeTab);
  const openFolderName = useSelector((state: any) => state.project.openFolder);

  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div style={{ display: openFolderName === "" ? "none" : "block" }}>
        <OpenFolder />
      </div>
      <div style={{ display: openFolderName === "" ? "block" : "none" }}>
        <SearchBar value={searchValue} setValue={setSearchValue} />
        <TabBar />

        {tabBarComponent[activeName]}
      </div>
    </>
  );
}
