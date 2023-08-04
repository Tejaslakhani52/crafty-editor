import React, { useState } from "react";

export default function ListType() {
  const [listType, setListType] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  return listType === "dot" ? (
    <button
      onClick={() => setListType("number")}
      className={`${active && "threed_shadow"}`}
    >
      <img src="./icons/list.svg" alt="" />
    </button>
  ) : listType === "number" ? (
    <button
      onClick={() => {
        setListType("");
        setActive(false);
      }}
      className={`${active && "threed_shadow"}`}
    >
      <img src="./icons/numberList.svg" alt="" />
    </button>
  ) : (
    <button
      onClick={() => {
        setListType("dot");
        setActive(true);
      }}
    >
      <img src="./icons/list.svg" alt="" />
    </button>
  );
}
