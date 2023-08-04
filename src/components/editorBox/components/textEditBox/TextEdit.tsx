import DataBar from "@/components/common/DataBar";
import SearchBar from "@/components/common/SearchBar";
import InnerSidebar from "@/components/sidebar/components/PannelItemBox";
import React, { useState } from "react";
import SelectFontStyle from "./components/SelectFontStyle";
import FontSize from "./components/FontSize";
import Spacing from "./components/Spacing";
import Transparency from "./components/Transparency";

import ListType from "./components/ListType";
import TextDirection from "./components/TextDirection";
import ColorsText from "./components/Colors";
import { useDispatch, useSelector } from "react-redux";
import { content, databar, pannelbar } from "@/redux/reducer/dataReducer";

export default function TextEdit({ dataBar, setDataBar }: any) {
  const dispatch = useDispatch();
  const [customeWeight, setCustomeWeight] = useState<number>(38);
  const [openCopystyle, setOpenCopystyle] = useState<boolean>(false);
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState<boolean>(false);
  const [underline, setUnderline] = useState<boolean>(false);
  const [uppercase, setUppercase] = useState<boolean>(false);

  const databarValue = useSelector((state: any) => state.data.databar);
  const contentValue = useSelector((state: any) => state.data.content);

  return (
    <>
      <div className="animate_position_box">
        {/* <SelectFontStyle dataBar={dataBar} setDataBar={setDataBar} /> */}
        <div className="custom-select">
          <button
            onClick={() => {
              dispatch(pannelbar(false));
              dispatch(
                databar(contentValue === "fontStyle" ? !databarValue : true)
              );
              dispatch(content("fontStyle"));
            }}
            className={`select_Box`}
          >
            Abhya Libre Reg...
            <img
              src="./icons/dropdown.svg"
              alt="Custom Icon"
              className="custom-icon"
            />
          </button>
        </div>
        <FontSize />
        <div className="text_decoration">
          {/* <ColorsText dataBar={dataBar} setDataBar={setDataBar} /> */}
          <button
            className={`${
              contentValue === "colors" && databarValue && "threed_shadow"
            } underline_text `}
            onClick={() => {
              dispatch(pannelbar(false));
              dispatch(
                databar(contentValue === "colors" ? !databarValue : true)
              );
              dispatch(content("colors"));
            }}
          >
            <h1>A</h1>
            <div />
          </button>
          <button
            className={`bold_text ${bold && "threed_shadow"} `}
            onClick={() => setBold(!bold)}
          >
            <h1>B</h1>
          </button>
          <button
            className={`italic_text  ${italic && "threed_shadow"}`}
            onClick={() => setItalic(!italic)}
          >
            <h1>I</h1>
          </button>
          <button
            className={`u_underline  ${underline && "threed_shadow"}`}
            onClick={() => setUnderline(!underline)}
          >
            <h1>U</h1>
            <div />
          </button>
          <button
            className={`a_A  ${uppercase && "threed_shadow"}`}
            onClick={() => setUppercase(!uppercase)}
          >
            <h1>aA</h1>
          </button>
        </div>
        <div className="small_v_divider" />
        <div className="text_location">
          <TextDirection />
          <ListType />
          <Spacing />
        </div>
        <div className="small_v_divider" />

        <div className="animate_buttons">
          <button
            onClick={() => {
              dispatch(pannelbar(false));
              dispatch(
                databar(contentValue === "effect" ? !databarValue : true)
              );
              dispatch(content("effect"));
            }}
            className={`${
              contentValue === "effect" && databarValue && "threed_shadow"
            }`}
          >
            Effects
          </button>
          <div className="small_v_divider" />
          <button
            onClick={() => {
              dispatch(pannelbar(false));
              dispatch(
                databar(contentValue === "animation" ? !databarValue : true)
              );
              dispatch(content("animation"));
            }}
            className={`${
              contentValue === "animation" && databarValue && "threed_shadow"
            }`}
          >
            <img src="./icons/animate.svg" alt="" />
            Animate
          </button>
          <div className="small_v_divider" />
          <button
            onClick={() => {
              dispatch(pannelbar(false));
              dispatch(
                databar(contentValue === "position" ? !databarValue : true)
              );
              dispatch(content("position"));
            }}
            className={`${
              contentValue === "position" && databarValue && "threed_shadow"
            }`}
          >
            Position
          </button>
          <div className="small_v_divider" />
        </div>

        <div className="text_location">
          <Transparency />

          <button
            className={`${openCopystyle && "threed_shadow"}`}
            onClick={() => setOpenCopystyle(!openCopystyle)}
          >
            <img src="./icons/copyStyle.svg" alt="" />
          </button>
          <button>
            <img src="./icons/lock.svg" alt="" />
          </button>
        </div>
      </div>
    </>
  );
}
