import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadBoxProps {
  onImageUpload: (image: File) => void;
}

const ImageUploadBox: React.FC<ImageUploadBoxProps> = ({ onImageUpload }) => {
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
        Drag & Drop your images here <br /> to Upload
      </p>
      <img
        src="./images/ulpoadFile.png"
        alt=""
        className="block mx-auto my-4"
      />

      <p>Supported file formats are JPG, PNG, and SVG.</p>

      <input
        type="file"
        accept="image/jpeg, image/png, image/svg+xml"
        style={{ display: "none" }}
        {...getInputProps()}
      />

      <button
        onClick={() => document.querySelector("input")?.click()}
        className="uploadButton"
      >
        Upload Image
      </button>
    </div>
  );
};

export default ImageUploadBox;
