import React, { useState } from "react";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import BrandKitDetails from "./components/BrandKitDetails";
import BrandDetails from "./components/BrandDetails";
import DialogModal from "@/components/common/DialogModal";
import SearchBar from "@/components/common/SearchBar";
import BrandKitModalBox from "./components/BrandKitModalBox";
import BrandKitEditModal from "./components/brandKitEdit/BrandKitEditModal";

export default function BrandKit() {
  const screenHeight = useScreenHeight();
  const [activeTab, setActiveTab] = useState("Brand Kit");
  const [openBrandKit, setOpenBrandKit] = useState(false);
  const [editBrandKit, setEditBrandKit] = useState(false);

  return (
    <div>
      <div
        style={{
          height: `${screenHeight - 115}px`,
        }}
        className="scroll_bar_section"
      >
        <h1 className="flex items-center gap-[15px] font-medium text-[14px] mb-5">
          <img src="./icons/brandTemplate.svg" alt="" className="w-[24px]" />
          Brand templates
        </h1>
        <div className="upload_file">
          <div className={`${"imageUploadBox"}  `}>
            <p>Finish setting up your Brand Templates</p>
            <img
              src="./images/brandTemplateImage.png"
              alt=""
              className="block mx-auto my-5"
            />

            <p>
              Maintain brand consistency by creating ready-to-use templates.
            </p>

            <button className="uploadButton">
              <img src="./icons/whitePremium.svg" alt="" className="mr-2" />
              Try CraftyArt Pro
            </button>
          </div>
        </div>

        <div
          className="w-[100%] mt-[20px] p-[15px] rounded-[8px]"
          style={{
            boxShadow:
              "-10px -10px 16px 0px rgba(255, 255, 255, 0.80), 8px 8px 16px 0px rgba(171, 178, 199, 0.50)",
          }}
        >
          <div className="flex justify-between items-center mb-5 pr-1">
            <h1
              className="flex items-center font-semibold text-[14px] cursor-pointer"
              onClick={() => setOpenBrandKit(true)}
            >
              <img
                src="./icons/pannelbarIcons/Brand kit.svg"
                alt=""
                className="w-[24px] mr-[10px]"
              />
              Brand Kit
              <img src="./icons/seeAllBottom.svg" alt="" className="ml-1" />
            </h1>

            <button
              className="flex items-center font-medium text-[14px] "
              onClick={() => setEditBrandKit(true)}
            >
              Edit
            </button>
          </div>

          <div className="h-[150px] bg-[#D5D8E3] rounded-[10px] flex items-center justify-center">
            <img src="./icons/brandFavorite.svg" alt="" />
          </div>
        </div>

        <div className="my-[10px] flex justify-between">
          <button
            className={` ${
              activeTab === "Brand Kit" ? "brand_activeTab " : "brand_button"
            }   `}
            style={{ width: "48%" }}
            onClick={() => {
              setActiveTab("Brand Kit");
            }}
          >
            Brand Kit
          </button>

          <button
            className={`${
              activeTab === "Brand Details" ? "brand_activeTab" : "brand_button"
            }`}
            style={{ width: "48%" }}
            onClick={() => {
              setActiveTab("Brand Details");
            }}
          >
            Brand Details
          </button>
        </div>
        {activeTab === "Brand Kit" ? <BrandKitDetails /> : <BrandDetails />}
      </div>

      <DialogModal open={openBrandKit} setOpen={setOpenBrandKit}>
        <BrandKitModalBox setOpenBrandKit={setOpenBrandKit} />
      </DialogModal>

      <DialogModal open={editBrandKit} setOpen={setEditBrandKit}>
        <BrandKitEditModal setEditBrandKit={setEditBrandKit} />
      </DialogModal>
    </div>
  );
}
