import React from "react";

export default function TextButtonBox({ data, value, setValue }: any) {
  return (
    <div className="text_button">
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          className={`${value === item?.value ? "activeButton" : "button"}`}
          onClick={() => setValue(item?.value)}
        >
          {item?.name}
        </div>
      ))}
    </div>
  );
}
