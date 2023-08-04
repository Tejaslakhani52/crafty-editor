import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface ImageUploadBoxProps {
  onImageUpload: (image: File) => void;
}

const VideoUploadBox: React.FC<ImageUploadBoxProps> = ({ onImageUpload }) => {
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
        Drag & Drop your videos here <br /> to Upload
      </p>
      <img
        src="./images/videoUpload.png"
        alt=""
        className="block mx-auto my-4"
      />
      <p>Supported file formats are MP4, GIF and MOV. </p>
      <input type="file" style={{ display: "none" }} {...getInputProps()} />
      <button
        onClick={() => document.querySelector("input")?.click()}
        className="uploadButton"
      >
        Upload video
      </button>
    </div>
  );
};

export default VideoUploadBox;
