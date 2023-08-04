import Skeleton from "@/components/common/Skelton";
import React from "react";

const data = [
  { name: "Birthday", img: "./images/backgroundRecent.png" },
  { name: "Baby", img: "./images/backgroundRecent2.png" },
  { name: "Wedding", img: "./images/backgroundRecent3.png" },
  { name: "Birthday", img: "./images/backgroundRecent.png" },
  { name: "Baby", img: "./images/backgroundRecent2.png" },
];

export default function RecentlySeeAll() {
  return (
    <div
      className="all_template mt-3 "
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto",
        justifyContent: "space-between",
        gap: "25px",
      }}
    >
      {data.length > 0
        ? data?.map((item: any, index: number) => (
            <div
              key={index}
              className="mb-[6px] template_showing_box "
              style={{
                // display: isLoadedImage ? "block" : "none",
                width: "100%",
              }}
            >
              <img
                src={item?.img}
                alt=""
                crossOrigin="anonymous"
                // onLoad={handleImageLoad}
              />
            </div>
          ))
        : new Array(30)
            .fill("#497dec26")
            .map((item, index) => (
              <Skeleton
                height={"101px"}
                width={"32%"}
                mb={"6px"}
                redius={"0px"}
              />
            ))}
    </div>
  );
}
