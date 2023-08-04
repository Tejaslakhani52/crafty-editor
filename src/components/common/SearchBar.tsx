import React from "react";

export default function SearchBar({ value, setValue }: any) {
  return (
    <div className="searchbar mx-[12px]">
      <img src="./icons/search.svg" alt="" />
      <input
        type="text"
        placeholder="Search templates"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <img src="./icons/settingBox.svg" alt="" /> */}
    </div>
  );
}
