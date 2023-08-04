import React, { useState } from "react";

export default function GridView() {
  return (
    <div className="grid_view">
      <div
        className="animate_position_box"
        style={{ gap: "0px", width: "fit-content" }}
      >
        <button>Deselect page</button>
        <button>
          <img src="./icons/delete.svg" alt="" />
        </button>
        <button>
          <img src="./icons/Duplicate.svg" alt="" />
        </button>
        <button>
          <img src="./icons/Add.svg" alt="" />
        </button>
      </div>
      <div
        className="template_bar"
        style={{
          width: "100%",
          padding: " 10px 0",
        }}
      >
        <div className="template_number grid_number">
          <div className="template_image grid_templateImage ">
            <img src="./images/gridTemplateAdd.png" alt="" />
          </div>
          <h3 className="text-center h-[20px]">1</h3>
        </div>
        <div className="template_number">
          <div className="add_template grid_add_template">
            <img src="./icons/plus.svg" alt="" />
          </div>
          <h3 className="h-[20px]"></h3>
        </div>
      </div>
    </div>
  );
}
