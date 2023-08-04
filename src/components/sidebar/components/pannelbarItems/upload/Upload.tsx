import React, { useState } from "react";
import CategoryButtonSlider from "../../common/CategoryButtonSlider";
import FileType from "./components/FileType";
import ImageUploadBox from "./components/ImageUploadBox";
import VideoUploadBox from "./components/VideoUploadBox";
import AudioUploadBox from "./components/AudioUploadBox";
import StickerUploadBox from "./components/StickerUploadBox";
import SearchBar from "@/components/common/SearchBar";
import { useScreenHeight } from "@/commonFunction/screenHeight";

const handleUploadClick = () => {
  const fileInput = document.getElementById("fileInput");
  fileInput?.click();
};

const handleFileSelect = (event: any) => {
  const file = event.target.files[0];
};

export default function Upload() {
  const screenHeight = useScreenHeight();
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [type, setType] = useState<string>("Images");
  const [searchValue, setSearchValue] = useState("");
  console.log("uploadedImage: ", uploadedImage);

  const handleImageUpload = (file: File) => {
    setUploadedImage(file);
  };

  return (
    <div>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <div
        style={{
          height: `${screenHeight - 160}px`,
          padding: "0 15px",
        }}
        className="scroll_bar_section"
      >
        <div className="upload_file">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
          <button onClick={handleUploadClick} className="button">
            Upload files
          </button>

          <FileType type={type} setType={setType} />

          {type === "Images" && (
            <ImageUploadBox onImageUpload={handleImageUpload} />
          )}

          {type === "Videos" && (
            <VideoUploadBox onImageUpload={handleImageUpload} />
          )}

          {type === "Audio" && (
            <AudioUploadBox onImageUpload={handleImageUpload} />
          )}

          {type === "Stickers" && (
            <StickerUploadBox onImageUpload={handleImageUpload} />
          )}
        </div>
      </div>
    </div>
  );
}
