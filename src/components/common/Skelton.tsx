import React from "react";

export default function Skeleton({ height, width, mb, redius, display }: any) {
  return (
    <div
      role="status"
      className={`flex items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700`}
      style={{
        height: height,
        width: width,
        marginBottom: mb,
        borderRadius: redius,
        display: display,
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
