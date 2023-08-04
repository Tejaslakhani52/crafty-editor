import React from "react";

export default function IconButton(props: any) {
  return (
    <button {...props} className="menu_name ">
      {props.children}
    </button>
  );
}
