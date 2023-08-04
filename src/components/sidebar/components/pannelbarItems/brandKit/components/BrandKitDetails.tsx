import React from "react";

const TitleButton = (props: any) => {
  return (
    <div className="mb-2">
      <div className="flex items-center gap-[5px] ">
        <p className="title font-semibold text-[14px]">{props?.name}</p>
        <img src="./icons/premium.svg" alt="" />
      </div>

      <button
        className="brand_button"
        style={{ width: "100%", padding: "8px " }}
        {...props}
      >
        {props?.buttonName}
      </button>
    </div>
  );
};

export default function BrandKitDetails() {
  return (
    <div>
      <TitleButton name={"Brand name"} buttonName={"Add your brand name"} />
      <TitleButton name={"Brand logo"} buttonName={"Add your brand logos"} />
      <TitleButton name={"Brand colors"} buttonName={"Add your brand colors"} />
      <TitleButton name={"Brand fonts"} buttonName={"Add your brand fonts"} />
      <TitleButton name={"Brand photos"} buttonName={"Add your brand photos"} />
      <TitleButton
        name={"Brand graphics"}
        buttonName={"Add your brand graphics"}
      />
      <TitleButton name={"Brand icons"} buttonName={"Add your brand icons"} />
    </div>
  );
}
