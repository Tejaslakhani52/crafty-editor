import React from "react";

export default function MoveToTrashBox({ setAction }: any) {
  return (
    <div>
      <h3 className="flex gap-[15px] font-semibold  px-[15px] text-[25px]  pb-4">
        Are you sure you want to trash these items?
      </h3>

      <p className="px-[15px] pb-[35px]">
        <strong>2 items </strong>
        will be moved to trash. Items can be restored from trash in the next 30
        days.
      </p>

      <div className="button_tabs" style={{ paddingBottom: "0" }}>
        <button
          className={`${"text_style"} `}
          onClick={() => setAction(false)}
          style={{ height: "35px" }}
        >
          Cancle
        </button>
        <button
          className={`font`}
          onClick={() => setAction(false)}
          style={{ height: "35px" }}
        >
          Move to trash
        </button>
      </div>
    </div>
  );
}
