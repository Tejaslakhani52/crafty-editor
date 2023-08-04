import React from "react";

export default function InputWithEditIcon({
  value,
  setValue,
  placeholder,
}: any) {
  return (
    <div className="editbox">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src="./icons/Edit.svg" alt="" />
    </div>
  );
}
