import Skeleton from "@/components/common/Skelton";
import { report } from "@/redux/reducer/dataReducer";
import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";

const keywords = [
  "happy",
  "birthday",
  "party",
  "celebration",
  "birth",
  "celebration",
  "simple",
  "modern",
  "minimalist",
];

export default function ImageComponent({ item, index }: any) {
  const dispatch = useDispatch();
  const buttonRef: any = useRef(null);
  const dropdownRef: any = useRef(null);
  const [distanceFromBottom, setDistanceFromBottom] = useState<any>(null);
  const [showMoreKeyword, setShowMoreKeyword] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [top, setTop] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [isLoadedImage, setIsLoadedImage] = useState(false);
  const handleImageLoad = () => {
    setIsLoadedImage(true);
  };

  console.log("distanceFromBottom: ", distanceFromBottom, top);

  const toggleDropdown = () => {
    const buttonRect = buttonRef.current.getBoundingClientRect();
    const top = buttonRect.top + window.pageYOffset;
    const left = buttonRect.left + window.pageXOffset;
    setTop(top);
    setLeft(left);
    setDropdownOpen(!isDropdownOpen);
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleWindowResize = () => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const distance: any = window.innerHeight - buttonRect.bottom;
      setDistanceFromBottom(distance);
    };

    document.addEventListener("mousedown", handleClickOutside);

    handleWindowResize();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  };

  return (
    <>
      <div
        key={index}
        className="mb-[6px] template_showing_box "
        style={{ display: isLoadedImage ? "block" : "none" }}
      >
        <img
          src={item?.template_thumb}
          alt=""
          crossOrigin="anonymous"
          onLoad={handleImageLoad}
        />

        <div
          className="more_dialog"
          ref={buttonRef}
          onClick={toggleDropdown}
          style={{
            opacity: isDropdownOpen ? "1" : "",
          }}
        >
          <img src="./icons/More.svg" alt="" />
        </div>
        {isDropdownOpen && (
          <div
            style={{
              backgroundColor: "transparent",
              position: "fixed",
              top: "80px",
              left: "125px",
              width: "349px",
              bottom: "20px",
              zIndex: "555",
            }}
          >
            <div
              className="dropdown"
              ref={dropdownRef}
              style={{
                maxHeight: "385px",
                width: "250px",
                position: "fixed",
                borderRadius: "6px",
                zIndex: "50000",
                top: `${distanceFromBottom < 400 ? top - 350 : top}px`,
                left: `${left + 40}px`,
                boxShadow:
                  "-8px -8px 16px 0px rgba(255, 255, 255, 0.70) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.30) inset, 8px 8px 16px 0px rgba(171, 178, 199, 0.50), -8px -8px 16px 0px rgba(255, 255, 255, 0.30)",
                padding: "0",
              }}
            >
              <h3 className="font-[600] p-[10px]">{item?.template_name}</h3>
              <div className="divider" />

              {showMoreKeyword ? (
                <p
                  className="p-[10px] green_gredient"
                  onClick={() => setShowMoreKeyword(false)}
                >
                  Show fewer keywords
                </p>
              ) : (
                <p
                  className="p-[10px] green_gredient"
                  onClick={() => setShowMoreKeyword(true)}
                >
                  Show all keywords
                </p>
              )}

              <div className="keyword_div px-[10px] ">
                {keywords
                  ?.filter((data, index) =>
                    showMoreKeyword ? data : index < 5
                  )
                  ?.map((item, index) => (
                    <div className="chips" key={index}>
                      {item}
                    </div>
                  ))}
              </div>

              <div className="divider mt-[15px] mb-[5px]" />
              <div className="unlike_report " onClick={() => setLike(!like)}>
                <div className="unlike_icon">
                  {like ? (
                    <img src="./icons/like.svg" alt="" />
                  ) : (
                    <img src="./icons/unlike.svg" alt="" />
                  )}
                </div>
                <p>Like</p>
              </div>
              <div
                className="unlike_report mb-[10px]"
                onClick={() => dispatch(report(true))}
              >
                <div className="unlike_icon">
                  <img src="./icons/report.svg" alt="" />
                </div>
                <p>Report</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Skeleton
        height={"150px"}
        width={"49%"}
        mb={"6px"}
        redius={"0px"}
        display={isLoadedImage ? "none" : "block"}
      />
    </>
  );
}
