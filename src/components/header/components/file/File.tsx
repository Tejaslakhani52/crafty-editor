import {
  CommentsIcon,
  CopyIcon,
  CreateNewIcon,
  DownloadIcon,
  FindIcon,
  HelpIcon,
  HistoryIcon,
  ImportIcon,
  SaveFolderIcon,
  SaveIcon,
  SettingsIcon,
} from "@/assets/icons/fileIcon";
import Divider from "@/components/common/Divider";
import IconText from "@/components/common/IconText";
import InputWithEditIcon from "@/components/common/InputWithEditIcon";
import React, { useState, useEffect, useRef } from "react";
// import CreateNewDesign from "./fileComponents/CreateNewDesign";

export default function File({ designName, setDesignName }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [createNew, setCreateNew] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
    setCreateNew(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      // if (createNew) {
      //   setIsOpen(false);
      //   setCreateNew(false);
      // }
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className={`menu_name`} ref={dropdownRef}>
      <button className={` ${isOpen && "threed_shadow"}`}>
        <p className="font-medium " onClick={handleButtonClick}>
          File
        </p>
      </button>

      {isOpen && (
        <div className="dropdown_box">
          <>
            <div className="px-5 py-4 flex gap-2">
              {/* <h3 className="font-medium">Man with the purple sky</h3>
              <img src={"./icons/Edit.svg"} alt="icon" /> */}
              <InputWithEditIcon
                value={designName}
                setValue={setDesignName}
                placeholder="Jewelry Sale Promotion Branding Post"
              />
            </div>

            <Divider />
            <IconText
              icon={<CreateNewIcon />}
              text="Create new design"
              onClick={() => {
                setCreateNew(true);
                setIsOpen(false);
              }}
            />
            <IconText icon={<ImportIcon />} text="Import files" />
            <Divider />
            <IconText
              icon={<SettingsIcon />}
              text="Guide Settings"
              extraicon="./icons/rightArrow.svg"
            />
            <Divider />
            <IconText
              icon={<SaveIcon />}
              text="Save"
              extraText="All changes saved"
            />
            <IconText icon={<SaveFolderIcon />} text="Save to folder" />
            <IconText icon={<CopyIcon />} text="Make a copy" />
            <IconText icon={<DownloadIcon />} text="Download" />
            <IconText
              icon={<HistoryIcon />}
              text="Version history"
              extraicon="./icons/pricing.svg"
            />
            <Divider />
            <IconText
              icon={<FindIcon />}
              text={
                <div className="flex items-center gap-2">
                  <p className="text-[15px]">Find Text</p>
                  <p className="text-[12px] bg-[#D9D9D9] px-2 rounded-[2px]">
                    Ctrl+F
                  </p>
                </div>
              }
            />
            <IconText icon={<CommentsIcon />} text="View all comments" />
            <Divider />
            <IconText icon={<HelpIcon />} text="Help" />
          </>
        </div>
      )}
      {/* {createNew && <CreateNewDesign />} */}
    </div>
  );
}
7;
