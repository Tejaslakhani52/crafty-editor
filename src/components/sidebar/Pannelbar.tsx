import React, { useState } from "react";
import InnerSidebar from "./components/PannelItemBox";
import { useDispatch, useSelector } from "react-redux";
import { databar, gridView, pannelbar } from "@/redux/reducer/dataReducer";
import DataBar from "../common/DataBar";
import { databarContent, sidebarMenu } from "./components/constant/constant";
import Head from "next/head";

export default function Sidebar({ setOpenGridView }: any) {
  const dispatch = useDispatch();
  const [activeSidebarMenu, setActiveSidebarMenu] = useState<string>("");
  const [thisTop, setThisTop] = useState<number>(-2);
  const [mouseEnter, setMouseEnter] = useState<string>("");
  const [selectMenuIndex, setSelectMenuIndex] = useState<number>(0);
  const [positionArray, setPositionArray] = useState<any>([]);

  const pannelbarValue = useSelector((state: any) => state.data.pannelbar);
  const databarValue = useSelector((state: any) => state.data.databar);
  const contentValue = useSelector((state: any) => state.data.content);
  return (
    <>
      <Head>
        <title>Craftyart Editor</title>
      </Head>
      <div style={{ display: "flex" }}>
        <div
          className={`${
            pannelbarValue
              ? "w-[94px] rounded-[0]"
              : "scroll_none threed_shadow w-[90px]"
          } main_sidebar threed_shadow`}
        >
          <div className="fill_div">
            <div
              className="threed_shadow animation_box"
              style={{
                top: `${thisTop}px`,
                display: pannelbarValue ? "block" : "none",
              }}
            ></div>
            {sidebarMenu?.map((item, index) => {
              const activeMenu = activeSidebarMenu === item.name;
              const activeHover = mouseEnter === item.name;
              return (
                <div
                  className={`${
                    activeMenu && pannelbarValue ? "" : ""
                  } button_box absolute `}
                  key={index}
                  onClick={() => {
                    const updatedArray = [...positionArray, index].slice(-2);
                    setPositionArray(updatedArray);
                    setSelectMenuIndex(index);
                    setOpenGridView(false);
                    setActiveSidebarMenu(item.name);
                    setThisTop(index * 80);
                    dispatch(pannelbar(true));
                    dispatch(databar(false));
                    dispatch(gridView(false));
                  }}
                  onMouseEnter={() => setMouseEnter(item.name)}
                  onMouseLeave={() => setMouseEnter("")}
                  style={{
                    top: index * 80,
                    left: "50%",
                    transform: "translate(-50%)",
                  }}
                >
                  <div>
                    <img
                      src={
                        (activeMenu && pannelbarValue) || activeHover
                          ? item.activeIcons
                          : item?.icons
                      }
                      alt=""
                    />
                  </div>
                  <h4
                    className={`${
                      (activeMenu && pannelbarValue) || activeHover
                        ? "active_text_linear"
                        : ""
                    }`}
                  >
                    {item.name}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>

        <InnerSidebar
          setActive={setActiveSidebarMenu}
          searchBox={sidebarMenu[selectMenuIndex]?.searchBox}
          animate={sidebarMenu[selectMenuIndex]?.name}
          animationClass={
            positionArray[0] < positionArray[1] ? "bottom_top" : "top_bottom"
          }
          color={
            sidebarMenu[selectMenuIndex]?.name === "Upload"
              ? "#ffffff85"
              : "#f2f4fb"
          }
        >
          {sidebarMenu[selectMenuIndex]?.content}
        </InnerSidebar>

        <DataBar openPannelbar={databarValue}>
          {databarContent[contentValue]}
        </DataBar>
      </div>
    </>
  );
}
