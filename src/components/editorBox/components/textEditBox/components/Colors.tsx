import { getMainImageColors } from "@/commonFunction/getImageColor";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import { Palette } from "color-thief-react";

import DataBar from "@/components/common/DataBar";
import SearchBar from "@/components/common/SearchBar";
import {
  brandColors,
  documentsColors,
  gradiantsColors,
  solidColors,
} from "@/constants/colorsFile";
import React, { useEffect, useRef, useState } from "react";

export default function ColorsText() {
  const screenHeight = useScreenHeight();

  return (
    <div>
      <SearchBar />
      <div
        style={{
          height: `${screenHeight - 160}px`,
        }}
        className="scroll_bar_section"
      >
        <div className="colors my-4">
          <div className="color_box">
            <h3>Document colors</h3>
            <div className="flex_box">
              <div className="box">
                <img src="./images/addColor.png" alt="" />
              </div>
              {documentsColors?.map((item, index) => (
                <div
                  key={index}
                  className="box"
                  style={{ backgroundColor: item?.color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="color_box">
            <h3>Brand Colors</h3>
            <div className="flex_box">
              {brandColors?.map((item, index) => (
                <div
                  key={index}
                  className="box"
                  style={{ backgroundColor: item?.color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="color_box">
            <h3>Brand Colors</h3>
            <div className="flex_box" style={{ padding: "13px 0 5px" }}>
              <div className="box">
                <img src="./images/getColor.png" alt="" />{" "}
              </div>
              <Palette
                src={"./images/getColor.png"}
                crossOrigin="anonymous"
                format="hex"
                colorCount={5}
              >
                {({ data }: any) =>
                  data?.map((color: any, index: number) => (
                    <div
                      key={index}
                      className="box"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))
                }
              </Palette>
            </div>

            <div className="flex_box" style={{ padding: "13px 0 5px" }}>
              <div className="box">
                <img src="./images/getColor2.png" alt="" />{" "}
              </div>
              <Palette
                src={"./images/getColor2.png"}
                crossOrigin="anonymous"
                format="hex"
                colorCount={5}
              >
                {({ data }: any) =>
                  data?.map((color: any, index: number) => (
                    <div
                      key={index}
                      className="box"
                      style={{ backgroundColor: color }}
                    ></div>
                  ))
                }
              </Palette>
            </div>
          </div>

          <div className="color_box">
            <h3>Solid Colors</h3>
            <div className="flex_box grid_box">
              {solidColors?.map((item, index) => (
                <div
                  key={index}
                  className="box"
                  style={{ backgroundColor: item?.color }}
                ></div>
              ))}
            </div>
          </div>

          <div className="color_box">
            <h3>Gradiants</h3>
            <div className="flex_box grid_box">
              {gradiantsColors?.map((item, index) => (
                <div
                  key={index}
                  className="box"
                  style={{ background: item?.color }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
