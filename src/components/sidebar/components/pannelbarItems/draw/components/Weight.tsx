import React, { useState } from "react";

export default function Weight() {
  const [customeWeight, setCustomeWeight] = useState<number>(38);
  return (
    <div className="weight my-2">
      <h3 className="title">Weight</h3>
      <div className="flex_box">
        <div className="box">
          <div className="weight_1"></div>
        </div>
        <div className="box">
          <div className="weight_2"></div>
        </div>
        <div className="box">
          <div className="weight_3"></div>
        </div>
        <div className="box">
          <div className="weight_4"></div>
        </div>

        <div className="custome_box">
          <img
            src="./icons/minus.svg"
            alt=""
            onClick={() => setCustomeWeight(customeWeight - 1)}
          />
          <p>{customeWeight}</p>
          <img
            src="./icons/weight_plus.svg"
            alt=""
            onClick={() => setCustomeWeight(customeWeight + 1)}
          />
        </div>
      </div>
    </div>
  );
}
