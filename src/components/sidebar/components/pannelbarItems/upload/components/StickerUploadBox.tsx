import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadBoxProps {
  onImageUpload: (image: File) => void;
}

const StickerUploadBox: React.FC<ImageUploadBoxProps> = ({ onImageUpload }) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        onImageUpload(acceptedFiles[0]);
      }
    },
    [onImageUpload]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`${"imageUploadBox"} ${isDragActive ? "dragging" : ""}`}
    >
      <p>
        Drag & Drop your stickers here <br />
        to Upload
      </p>
      <img
        src="./images/stickerUpload.png"
        alt=""
        className="block mx-auto my-4"
      />
      <p>Supported file formats are PNG. </p>
      <input type="file" style={{ display: "none" }} {...getInputProps()} />
      <button
        onClick={() => document.querySelector("input")?.click()}
        className="uploadButton"
      >
        Upload stickers
      </button>
    </div>
  );
};

export default StickerUploadBox;
