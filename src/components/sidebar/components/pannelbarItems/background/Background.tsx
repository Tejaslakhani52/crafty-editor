import { backgroundColors } from "@/constants/colorsFile";
import React, { useEffect, useRef, useState } from "react";
import SeeAllSlider from "../../common/SeeAllSlider";
import SearchBar from "@/components/common/SearchBar";
import { useScreenHeight } from "@/commonFunction/screenHeight";
import ColorBar from "./components/ColorBar";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { templates } from "@/redux/reducer/apiDataReducer";
import Skeleton from "@/components/common/Skelton";
import ImageComponent from "./components/ImageComponent";
import RecentlySeeAll from "./components/RecentlySeeAll";

const data = [
  { name: "Birthday", img: "./images/backgroundRecent.png" },
  { name: "Baby", img: "./images/backgroundRecent2.png" },
  { name: "Wedding", img: "./images/backgroundRecent3.png" },
  { name: "Birthday", img: "./images/backgroundRecent.png" },
  { name: "Baby", img: "./images/backgroundRecent2.png" },
];

export default function Background() {
  const dispatch = useDispatch();
  const listInnerRef: any = useRef();
  const screenHeight = useScreenHeight();
  const templatesValue = useSelector((state: any) => state.apiData.templates);
  const [searchValue, setSearchValue] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [prevPage, setPrevPage] = useState(0);
  const [wasLastList, setWasLastList] = useState(false);
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [recentlyAll, setRecentlyAll] = useState<boolean>(false);

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
      <div className="background">
        <div className="px-[15px] pb-[15px]">
          <ColorBar />
        </div>
        <div
          style={{
            height: `${screenHeight - 260}px`,
            padding: "0 11px 0 15px",
          }}
          className="scroll_bar_section"
          onScroll={onScroll}
          ref={listInnerRef}
        >
          {recentlyAll ? (
            <>
              <RecentlySeeAll />
            </>
          ) : (
            <>
              <div className="">
                <SeeAllSlider
                  data={data}
                  title="Recently used"
                  setAction={setRecentlyAll}
                />
              </div>

              <div className="mt-8">
                <h3 className="slider_heading">All results</h3>
                <div
                  className="all_template mt-3 "
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto auto auto",
                    justifyContent: "space-between",
                    gap: "10px",
                  }}
                >
                  {templatesValue.length > 0
                    ? templatesValue?.map((item: any, index: number) => (
                        <ImageComponent item={item} index={index} />
                      ))
                    : new Array(30)
                        .fill("#497dec26")
                        .map((item, index) => (
                          <Skeleton
                            height={"105px"}
                            width={"100%"}
                            mb={"0px"}
                            redius={"0px"}
                          />
                        ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
