import DialogModal from "@/components/common/DialogModal";
import MoveToFolder from "@/components/common/MoveToFolder";
import MoveToTrashBox from "@/components/common/MoveToTrashBox";
import ReportBox from "@/components/common/ReportBox";
import React, { useState } from "react";

export default function SelectedBox({ selectedItems, setSelectedItems }: any) {
  const [openMoveFolder, setOpenMoveFolder] = useState<boolean>(false);
  const [moveToTrash, setMoveToTrash] = useState<boolean>(false);
  return (
    <>
      <div
        className="h-[70px] w-[319px] fixed bottom-[30px] bg-[#edf0f9] rounded-[8px] flex items-center px-[15px]  justify-between items-center"
        style={{
          boxShadow:
            "10px 10px 20px 0px rgba(171, 178, 199, 0.90), 8px 8px 16px 0px rgba(171, 178, 199, 0.50)",
          display: selectedItems?.length > 0 ? "flex" : "none",
        }}
      >
        <div className="flex gap-[15px] items-center">
          <h1>{`(${selectedItems?.length ?? 0}) selected`}</h1>
          <button
            className="button_hover p-[5px] rounded-[4px]"
            onClick={() => setOpenMoveFolder(true)}
          >
            <img
              src="./images/projects/folder.svg"
              alt=""
              className="w-[24px] h-[24px]"
            />
          </button>
          <button
            className="button_hover p-[5px] rounded-[4px]"
            onClick={() => setMoveToTrash(true)}
          >
            <img
              src="./icons/delete.svg"
              alt=""
              className="w-[20px] h-[20px]"
            />
          </button>
        </div>

        <button
          className="button_hover p-[5px] rounded-[4px]"
          onClick={() => setSelectedItems([])}
        >
          <img
            src="./icons/closeIcon.svg"
            alt=""
            className="w-[24px] h-[24px]"
          />
        </button>
      </div>
      <DialogModal open={openMoveFolder} setOpen={setOpenMoveFolder}>
        <div className="w-[400px] ">
          <h3 className="flex gap-[15px] font-medium  px-[15px] text-[22px] py-3">
            Move to folder
          </h3>
          <MoveToFolder />
        </div>
      </DialogModal>

      <DialogModal open={moveToTrash} setOpen={setMoveToTrash}>
        <div className="w-[500px] py-5 ">
          <MoveToTrashBox setAction={setMoveToTrash} />
        </div>
      </DialogModal>
    </>
  );
}
