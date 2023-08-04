import { useScreenHeight } from "@/commonFunction/screenHeight";
import SearchBar from "@/components/common/SearchBar";
import { pannelbar } from "@/redux/reducer/dataReducer";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function InnerSidebar(props: any) {
  const dispatch = useDispatch();
  const innerSidebarRef = useRef(null);

  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(true);

    const timer = setTimeout(() => {
      setIsTrue(false);
    }, 200);

    return () => clearTimeout(timer);
  }, [props?.animate]);

  const pannelbarValue = useSelector((state: any) => state.data.pannelbar);

  return (
    <div
      className="inner_pannelbar threed_shadow"
      style={{
        width: pannelbarValue ? "350px" : "0",
        padding: pannelbarValue ? "15px 0px" : "0",
        marginLeft: "10px",
      }}
      id="inner_sidebar"
      ref={innerSidebarRef}
    >
      {pannelbarValue && (
        <div className={`${isTrue ? props?.animationClass : ""} w-full `}>
          {/* {props?.searchBox && (
            <SearchBar value={searchValue} setValue={setSearchValue} />
          )}
          <div
            style={{
              height: `${screenHeight - (props?.searchBox ? 160 : 120)}px`,
            }}
            className="scroll_bar_section"
          > */}
          {props.children}
          {/* </div> */}
        </div>
      )}

      <button
        className="back_button"
        style={{
          left: pannelbarValue ? "474px" : "-100px",
          width: pannelbarValue ? "15px" : "0",
          backgroundColor: props?.color,
          // border: "1px solid rgba(0, 0, 0, 0.05)",
        }}
        onClick={() => {
          dispatch(pannelbar(false));
          props?.setActive("");
        }}
      >
        <img
          src="./icons/rightArrow.svg"
          alt=""
          className={`${pannelbarValue ? "" : "w-[0]"}`}
        />
      </button>
    </div>
  );
}
