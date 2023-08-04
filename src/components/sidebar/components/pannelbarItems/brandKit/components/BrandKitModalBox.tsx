import { useScreenHeight } from "@/commonFunction/screenHeight";
import SearchBar from "@/components/common/SearchBar";
import React, { useState } from "react";

const data = [
  {
    brandKitLogo: "./images/Brand Kit/brandkitlogo1.png",
    colors: ["#070000", "#D18966", "#D775FA", "#B4B71B", "#3BB78A", "#FF6D03"],
    name: "Infiapp ",
  },
  {
    brandKitLogo: "./images/Brand Kit/brandkitlogo2.png",
    colors: ["#AB1010", "black", "#D775FA", "#82834A", "#46B2EE", "#D22BA3"],
    name: "Design",
  },
  {
    brandKitLogo: null,
    name: "Home templete",
  },
  {
    brandKitLogo: null,
    name: "Template Design",
  },
  {
    brandKitLogo: null,
    name: "Design",
  },
  {
    brandKitLogo: null,
    name: "Design",
  },
  {
    brandKitLogo: null,
    name: "Design",
  },
  {
    brandKitLogo: null,
    name: "Design",
  },
];

export default function BrandKitModalBox({ setOpenBrandKit }: any) {
  const [searchValue, setSearchValue] = useState("");

  const screenHeight = useScreenHeight();

  return (
    <div className="w-[550px]   ">
      <h3 className="flex gap-[15px] font-medium  px-[15px] text-[22px] py-3">
        Select Brand Kit
      </h3>
      <div className="pb-[25px]">
        <div
          className="searchbar mx-[12px]"
          style={{
            boxShadow: "none",
            border: "1px solid #ABB2C7",
            background: "white",
            height: "37px",
          }}
        >
          <img src="./icons/search.svg" alt="" />
          <input
            type="text"
            placeholder="Search brand kit"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </div>

      <div
        className="px-[15px]"
        style={{ maxHeight: `${screenHeight - 300}px`, overflow: "auto" }}
      >
        <div className="flex justify-between flex-wrap">
          {data?.map((item: any, index: number) => (
            <div
              key={index}
              className="pt-[15px] pb-[5px] px-[15px] w-[48.5%] mb-[10px] rounded-[10px] cursor-pointer"
              style={{ border: "1px solid #D9D9D9" }}
              onClick={() => setOpenBrandKit(false)}
            >
              <div className="w-[100%] h-[150px] flex flex-col items-center justify-center bg-[#D5D8E3] rounded-[6px]  ">
                {item?.brandKitLogo ? (
                  <img src={item?.brandKitLogo} alt="" className="w-[90px]" />
                ) : (
                  <img
                    src="./icons/brandFavorite.svg"
                    alt=""
                    style={{
                      border: "0.857px solid #FFF",
                      padding: "10px",
                      borderRadius: "8px",
                    }}
                  />
                )}

                {item.colors && (
                  <div className="flex pt-3 gap-[5px]">
                    {item.colors?.map((color: any, index: number) => (
                      <div
                        key={index}
                        className={`w-[20px] h-[20px] rounded-[50%]`}
                        style={{ backgroundColor: color }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>

              <h1 className="font-[600] text-[14px] pt-[5px]">{item?.name} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
