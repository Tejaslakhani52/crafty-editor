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

export default function BrandDetails() {
  return (
    <div>
      <TitleButton
        name={"Personal Details"}
        buttonName={"Add your personal details"}
      />
      <TitleButton
        name={"Profile Icon"}
        buttonName={"Add your profile icons"}
      />
      <TitleButton
        name={"Business Details"}
        buttonName={"Add your business details"}
      />

      <TitleButton
        name={"Contact Details"}
        buttonName={"Add your contact details"}
      />

      <TitleButton name={"Social Media"} buttonName={"Add your social media"} />
    </div>
  );
}
