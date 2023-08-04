import { useScreenHeight } from "@/commonFunction/screenHeight";
import React, { useCallback, useRef, useState } from "react";
import BaddNewLogo from "./components/BaddNewLogo";
import { useDropzone } from "react-dropzone";

export default function BrandKitEditModal() {
  const screenHeight = useScreenHeight();
  const [uploadImage, setUploadImage] = useState<any>();
  console.log("uploadImage: ", uploadImage);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        setUploadImage(acceptedFiles[0]);
      }
    },
    [uploadImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="w-[600px] px-[15px] py-[15px]">
      <div style={{ maxHeight: `${screenHeight - 300}px`, overflow: "auto" }}>
        <h3 className="flex gap-[15px] font-semibold text-[22px] py-3">
          Design
        </h3>

        <h3 className="flex gap-[15px] font-semibold text-[18px] py-1">
          Brand Name
        </h3>

        <div className="flex items-center justify-between bg-[#F4F7FE] h-[50px] rounded-[6px] px-[10px] mt-2 mb-[30px]">
          <input
            type="text"
            placeholder="Add your brand name"
            className="w-[94%]"
          />
          <img
            src="./icons/brandKit/editInput.svg"
            alt=""
            className="w-[24px]"
          />
        </div>

        <div className="flex items-center justify-between my-2">
          <h3 className="flex gap-[15px] font-semibold text-[18px] py-1">
            Brand Logo
          </h3>

          <BaddNewLogo />
        </div>

        <div
          {...getRootProps()}
          className={`${"imageUploadBox"} ${
            isDragActive ? "dragging" : ""
          } mb-5`}
          style={{ backgroundColor: "#F4F7FE", border: "0", boxShadow: "none" }}
        >
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            style={{ display: "none" }}
            {...getInputProps()}
          />

          <div
            onClick={() => document.querySelector("input")?.click()}
            className="flex flex-col items-center cursor-pointer opacity-60 "
          >
            <img src="./icons/upload.svg" alt="" />
            Upload brand logos
          </div>
        </div>

        <div className="flex items-center justify-between my-2">
          <h3 className="flex gap-[15px] font-semibold text-[18px] py-1">
            Brand Colors
          </h3>

          <BaddNewLogo setUploadImage={setUploadImage} />
        </div>

        <div
          {...getRootProps()}
          className={`${"imageUploadBox"} ${
            isDragActive ? "dragging" : ""
          } mb-5`}
          style={{ backgroundColor: "#F4F7FE", border: "0", boxShadow: "none" }}
        >
          <input
            type="file"
            accept="image/jpeg, image/png, image/svg+xml"
            style={{ display: "none" }}
            {...getInputProps()}
          />

          <div
            onClick={() => document.querySelector("input")?.click()}
            className="flex flex-col items-center cursor-pointer opacity-60 "
          >
            <img src="./icons/upload.svg" alt="" />
            Upload brand logos
          </div>
        </div>
      </div>
    </div>
  );
}
