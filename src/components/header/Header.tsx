import React from "react";
import File from "./components/file/File";
import Resize from "./components/resize/Resize";
import IconButton from "../common/IconButton";

export default function Header({ designName, setDesignName }: any) {
  return (
    <div className="main_header threed_shadow">
      <div className="items_center gap-8">
        <div className="logo ">
          <img src="./images/logo.svg" alt="logo" className="logo" />
        </div>
        <div className="gap-2 items_center">
          <File designName={designName} setDesignName={setDesignName} />
          <Resize />
        </div>
        {/* <p className="text-[#ABB2C7] text-[15px]">
          Jewelry Sale Promotion Branding Post
        </p> */}

        <input
          type="text"
          value={designName}
          onChange={(e) => setDesignName(e.target.value)}
          placeholder="Jewelry Sale Promotion Branding Post"
        />
      </div>
      <div className="items_center gap-5">
        <IconButton>
          <img src="./icons/rightCloud.svg" alt="" />
        </IconButton>
        <div className=" items_center gap-0">
          <IconButton>
            <img src="./icons/ArrowOutlineLeft.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="./icons/ArrowOutlineRight.svg" alt="" />
          </IconButton>
        </div>

        <button className="crafty_pro">
          <div>
            <img src="./icons/pricing.svg" alt="" /> Get CraftyArt Pro
          </div>
        </button>
        <button className="share_button">
          <img src="./icons/share.svg" alt="" /> Share
        </button>
      </div>
    </div>
  );
}
