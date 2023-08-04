import { useScreenHeight } from "@/commonFunction/screenHeight";
import SearchBar from "@/components/common/SearchBar";
import Skelton from "@/components/common/Skelton";
import { templates } from "@/redux/reducer/apiDataReducer";
import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryButtonSlider from "../../common/CategoryButtonSlider";
import SeeAllSlider from "../../common/SeeAllSlider";
import ImageComponent from "../templates/components/ImageComponent";
import SeeAllElements from "./components/SeeAllElements";
import SeeAllComponent from "./components/SeeAllComponent";

const data = [
  {
    title: "Recently used",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
  {
    title: "Graphics",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
  {
    title: "Shapes",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
  {
    title: "Stickers",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
  {
    title: "Frame",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
  {
    title: "Table",
    data: [
      { name: "Birthday", img: "./images/elements/recent1.png" },
      { name: "Baby", img: "./images/elements/recent2.png" },
      { name: "Wedding", img: "./images/elements/recent3.png" },
      { name: "Birthday", img: "./images/elements/recent4.png" },
    ],
  },
];

export default function Elements() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const listInnerRef: any = useRef();
  const templatesValue = useSelector((state: any) => state.apiData.templates);
  const seeAllNameValue = useSelector(
    (state: any) => state.elements.seeAllName
  );
  console.log("templatesValue: ", templatesValue);
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  console.log("currPage: ", currPage);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsFetchingMore(true);
  //     const res = await axios.post(`/api/get/datas`, {
  //       cat_id: "quotes-post-square",
  //       debug_key: "debug",
  //       limit: 30,
  //       page: currPage,
  //     });
  //     if (!res?.data?.datas.length) {
  //       setWasLastList(true);
  //       return;
  //     }
  //     setPrevPage(currPage);
  //     dispatch(templates([...templatesValue, ...res?.data?.datas]));
  //     setIsFetchingMore(false);
  //   };
  //   if (!wasLastList && prevPage !== currPage) {
  //     fetchData();
  //   }
  // }, [currPage, wasLastList, prevPage]);

  // const onScroll = () => {
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

  //     if (scrollTop + clientHeight > scrollHeight - 1000 && !isFetchingMore) {
  //       setCurrPage((prevCurrPage) => prevCurrPage + 1);
  //     }
  //   }
  // };

  // const seeAllComponents: any = useMemo(() => {
  //   return {
  //     "Recently used": <RecentlyUsed />,
  //   };
  // }, [seeAllNameValue]);

  return (
    <>
      <div style={{ display: seeAllNameValue === "" ? "block" : "none" }}>
        <SearchBar value={searchValue} setValue={setSearchValue} />
        <div
          style={{
            height: `${screenHeight - 160}px`,
          }}
          className="scroll_bar_section"
          // onScroll={onScroll}
          ref={listInnerRef}
        >
          <CategoryButtonSlider
            title={"All Elements"}
            categoryName={[
              "Arrow",
              "Line",
              "Circle",
              "Shadow",
              "Arrow",
              "Line",
              "Circle",
              "Shadow",
            ]}
          />

          {data?.map((item) => (
            <SeeAllElements item={item} />
          ))}
        </div>
      </div>
      {/* {seeAllComponents[seeAllNameValue]} */}
      <div style={{ display: seeAllNameValue === "" ? "none" : "block" }}>
        <SeeAllComponent />
      </div>
    </>
  );
}
