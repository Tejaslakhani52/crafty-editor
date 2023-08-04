import React from "react";

export default function IconText(props: any) {
  return (
    <div
      className="flex gap-5  py-[10px] px-5 menu_hover cursor-pointer items-center justify-between w-full"
      {...props}
    >
      <div className="flex gap-2 items-center">
        {/* <img src={props.icon} alt="icon" /> */}
        {props.icon}
        <p className="text-[15px]">{props.text}</p>
      </div>
      {props.extraicon && <img src={props.extraicon} alt="icon" />}
      {props.extraText && <p className="text-[13px]">{props.extraText}</p>}
    </div>
  );
}
