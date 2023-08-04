import React from "react";

const data = [
  { img: "./images/1.png" },
  { img: "./images/2.png" },
  { img: "./images/3.png" },
  { img: "./images/4.png" },
  { img: "./images/5.png" },
  { img: "./images/6.png" },
  { img: "./images/7.png" },
  { img: "./images/8.png" },
  { img: "./images/9.png" },
  { img: "./images/10.png" },
];

export default function AllFont() {
  return (
    <div className="mt-4">
      <h3 className="slider_heading">All Font Combinations</h3>
      <div className="all_template mt-3 ">
        {data?.map((item: any, index: number) => (
          <div key={index} className="mb-[10px] text_showing_box">
            <img src={item?.img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
