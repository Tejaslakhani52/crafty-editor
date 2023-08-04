import React from "react";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import { useDispatch, useSelector } from "react-redux";
import { seeAllName } from "@/redux/reducer/elementReducer";

const data = [
  { name: "", img: "./images/elements/recent1.png" },
  { name: "", img: "./images/elements/recent2.png" },
  { name: "", img: "./images/elements/recent3.png" },
  { name: "", img: "./images/elements/recent4.png" },
  { name: "", img: "./images/elements/recent5.png" },
  { name: "", img: "./images/elements/recent6.png" },
  { name: "", img: "./images/elements/recent1.png" },
  { name: "", img: "./images/elements/recent2.png" },
  { name: "", img: "./images/elements/recent3.png" },
  { name: "", img: "./images/elements/recent4.png" },
  { name: "", img: "./images/elements/recent5.png" },
  { name: "", img: "./images/elements/recent6.png" },
  { name: "", img: "./images/elements/recent1.png" },
  { name: "", img: "./images/elements/recent2.png" },
  { name: "", img: "./images/elements/recent3.png" },
  { name: "", img: "./images/elements/recent4.png" },
  { name: "", img: "./images/elements/recent5.png" },
  { name: "", img: "./images/elements/recent6.png" },
  { name: "", img: "./images/elements/recent1.png" },
  { name: "", img: "./images/elements/recent2.png" },
  { name: "", img: "./images/elements/recent3.png" },
  { name: "", img: "./images/elements/recent4.png" },
  { name: "", img: "./images/elements/recent5.png" },
  { name: "", img: "./images/elements/recent6.png" },
  { name: "", img: "./images/elements/recent1.png" },
  { name: "", img: "./images/elements/recent2.png" },
  { name: "", img: "./images/elements/recent3.png" },
  { name: "", img: "./images/elements/recent4.png" },
  { name: "", img: "./images/elements/recent5.png" },
  { name: "", img: "./images/elements/recent6.png" },
];

export default function SeeAllComponent() {
  const seeAllNameValue = useSelector(
    (state: any) => state.elements.seeAllName
  );
  const screenHeight = useScreenHeight();
  const dispatch = useDispatch();
  return (
    <div>
      <h3 className="flex gap-[15px] font-medium px-[20px] pb-[10px]">
        <img
          src="./icons/longLeftArrow.svg"
          alt=""
          width={"18px"}
          height={"18px"}
          className="cursor-pointer"
          onClick={() => dispatch(seeAllName(""))}
        />
        {seeAllNameValue}
      </h3>
      <div
        style={{
          height: `${screenHeight - 160}px`,
        }}
        className="scroll_bar_section"
      >
        <div className="flex flex-wrap justify-between pt-[10px]">
          {data?.map((item, index) => (
            <div className="w-[33%] mb-3 cursor-pointer" key={index}>
              <img src={item?.img} alt="" className="block mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
