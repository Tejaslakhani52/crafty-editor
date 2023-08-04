import { templatesData } from "@/redux/action/apiAction";
import { templates } from "@/redux/reducer/apiDataReducer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AllTemplates(props: any) {
  const templatesValue = useSelector((state: any) => state.apiData.templates);

  return (
    <div className="mt-8">
      <h3 className="slider_heading">All results</h3>
      <div className="all_template mt-3 ">
        {templatesValue?.map((item: any, index: number) => (
          <div key={index} className="mb-[6px] template_showing_box">
            <img src={item?.template_thumb} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
