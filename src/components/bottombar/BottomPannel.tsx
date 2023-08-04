import {
  bottombar,
  databar,
  gridView,
  pannelbar,
} from "@/redux/reducer/dataReducer";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function BottomPannel({
  pageSizeValue,
  setPageSizeValue,
  setEditorFullscreen,
}: any) {
  const dispatch = useDispatch();
  console.log("pageValue: ", pageSizeValue);

  const pannelbarOpen = useSelector((state: any) => state.data.pannelbar);
  const databarValue = useSelector((state: any) => state.data.databar);
  console.log("databarValue: ", databarValue, pannelbarOpen);
  const openGridView = useSelector((state: any) => state.data.gridView);
  const bottombarValue = useSelector((state: any) => state.data.bottombar);
  console.log("bottombarValue: ", bottombarValue);
  console.log("openGridView: ", openGridView);
  return (
    <div
      className="bottombar "
      style={{ left: pannelbarOpen || databarValue ? "482px" : "130px" }}
    >
      <div
        className="bottombar_inner"
        style={{
          gap: bottombarValue ? "20px" : "0",
        }}
      >
        <div
          className="template_bar"
          style={{
            paddingTop: bottombarValue ? "10px" : 0,
            height: bottombarValue ? "104px" : "0",
            visibility: bottombarValue ? "visible" : "hidden",
          }}
        >
          <div className="template_number">
            <div className="template_image">
              <img src="./images/templateAdd.png" alt="" />
            </div>
            <h3 className="text-center h-[20px]">1</h3>
          </div>
          <div className="template_number">
            <div className="add_template ">
              <img src="./icons/plus.svg" alt="" />
            </div>
            <h3 className="h-[20px]"></h3>
          </div>
        </div>
        <div className="defbar">
          <div className="notes_button">
            <button
              onClick={() => {
                dispatch(databar(!databarValue));
              }}
            >
              <img src="./icons/notes.svg" alt="" />
              <p>Notes</p>
            </button>
          </div>

          <div className="sec_div">
            <div className="rangebar">
              <p>page 1/2</p>
              <input
                disabled={openGridView}
                type="range"
                min="10"
                max="240"
                value={pageSizeValue}
                className={`${
                  openGridView && "opacity-50 cursor-not-allowed	"
                } slider`}
                onChange={({ target: { value: radius } }) => {
                  setPageSizeValue(Number(radius));
                }}
              />
              <p style={{ width: "38px" }}>{`${pageSizeValue}%`}</p>
            </div>
            <button
              onClick={() => {
                dispatch(gridView(!openGridView));  
                dispatch(pannelbar(false));
                dispatch(databar(false));
                dispatch(bottombar(false));
              }}
              className={`${
                openGridView && "threed_shadow  rounded-[4px]"
              } p-[7px]`}
            >
              <img src="./icons/gridView.svg" alt="" />
            </button>
            {/* <button onClick={() => setEditorFullscreen(!editorFullscreen)}> */}
            <button onClick={() => setEditorFullscreen(false)}>
              <img src="./icons/fullScreen.svg" alt="" />
            </button>
          </div>
        </div>
        {!openGridView && (
          <div
            className="close_bottombar"
            onClick={() => dispatch(bottombar(!bottombarValue))}
          >
            <img src="./icons/bottomArrow.svg" alt="" />
          </div>
        )}
      </div>
    </div>
  );
}
