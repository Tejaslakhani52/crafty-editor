import { useScreenHeight } from "@/commonFunction/screenHeight";
import SearchBar from "@/components/common/SearchBar";
import Skelton from "@/components/common/Skelton";
import { templates } from "@/redux/reducer/apiDataReducer";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryButtonSlider from "../../common/CategoryButtonSlider";
import SeeAllSlider from "../../common/SeeAllSlider";
import ImageComponent from "./components/ImageComponent";

const data = [
  { name: "Birthday", img: "./images/demoImage.png" },
  { name: "Baby", img: "./images/demoImage2.png" },
  { name: "Wedding", img: "./images/demoImage3.png" },
  { name: "Birthday", img: "./images/demoImage.png" },
  { name: "Baby", img: "./images/demoImage2.png" },
  { name: "Wedding", img: "./images/demoImage3.png" },
];

export default function Templates() {
  const dispatch = useDispatch();
  const screenHeight = useScreenHeight();
  const listInnerRef: any = useRef();
  const templatesValue = useSelector((state: any) => state.apiData.templates);
  console.log("templatesValue: ", templatesValue);
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  console.log("currPage: ", currPage);
  const [prevPage, setPrevPage] = useState(0);
  console.log("prevPage: ", prevPage, currPage);
  const [wasLastList, setWasLastList] = useState(false);
  console.log("wasLastList: ", wasLastList);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetchingMore(true);
      const res = await axios.post(`/api/get/datas`, {
        cat_id: "quotes-post-square",
        debug_key: "debug",
        limit: 30,
        page: currPage,
      });
      if (!res?.data?.datas.length) {
        setWasLastList(true);
        return;
      }
      setPrevPage(currPage);
      if (prevPage !== currPage) {
        dispatch(templates([...templatesValue, ...res?.data?.datas]));
      }

      setIsFetchingMore(false);
    };
    if (!wasLastList && prevPage !== currPage) {
      fetchData();
    }
  }, [currPage, wasLastList]);

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;

      if (scrollTop + clientHeight > scrollHeight - 1000 && !isFetchingMore) {
        setCurrPage((prevCurrPage) => prevCurrPage + 1);
      }
    }
  };

  return (
    <div>
      <SearchBar value={searchValue} setValue={setSearchValue} />
      <div
        style={{
          height: `${screenHeight - 160}px`,
        }}
        className="scroll_bar_section"
        onScroll={onScroll}
        ref={listInnerRef}
      >
        <CategoryButtonSlider
          title={"All Templates"}
          categoryName={[
            "Birthday",
            "Baby",
            "Wedding",
            "Birthday",
            "Baby",
            "Wedding",
          ]}
        />
        <SeeAllSlider data={data} title="Recently used" />
        <div className="mt-8">
          <h3 className="slider_heading">All results</h3>
          <div className="all_template mt-3 ">
            {templatesValue.length > 0
              ? templatesValue?.map((item: any, index: number) => (
                  <ImageComponent item={item} index={index} />
                ))
              : new Array(10)
                  .fill("#497dec26")
                  .map((item, index) => (
                    <Skelton
                      height={"150px"}
                      width={"49%"}
                      mb={"6px"}
                      redius={"0px"}
                    />
                  ))}
          </div>
        </div>
      </div>
    </div>
  );
}
