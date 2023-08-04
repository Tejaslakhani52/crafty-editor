import React from "react";

export default function IconButtonBox({ data, value, setValue }: any) {
  return (
    <div className="text_button">
      {data?.map((item: any, index: number) => (
        <div
          key={index}
          className={`${value === item?.value ? "activeButton" : "button"}`}
          onClick={() => setValue(item?.value)}
        >
          <img src={item?.image} alt="" />
        </div>
      ))}
    </div>
  );
}
