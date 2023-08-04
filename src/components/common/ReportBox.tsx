import { report } from "@/redux/reducer/dataReducer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useScreenHeight } from "@/commonFunction/screenHeight";

const reportingContent = [
  {
    title: "Incorrect labeling",
    text: "Inappropriate or irrelevant keywords or title",
  },
  {
    title: "Graphic violence",
    text: "Violent or triggering content or promotion of violence, abuse or self harm",
  },
  {
    title: "Sexually explicit content",
    text: "Sexually explicit content, objectification or sexualisation",
  },
  {
    title: "Political partiality",
    text: "Content that favours or disfavours a particular political stance",
  },
  {
    title: "Hatefull speech, activities or discrimination",
    text: "Prejudice, stereotypes, degradation, cultural or racial intensitivity",
  },
  {
    title: "Prohibited content",
    text: "Promotion of weapons, dangerous goods or drug usage",
  },
  {
    title: "Other",
    text: "Something Else",
  },
];

const ReportBox = () => {
  const screenHeight = useScreenHeight();
  console.log("screenHeight: ", screenHeight);
  const [redioHover, setRedioHover] = useState<string>("");
  const [comment, setComment] = useState<boolean>(false);

  const dispatch = useDispatch();
  const reportBox = useSelector((state: any) => state.data.report);

  return (
    <>
      <div
        className="background_blur"
        style={{ display: reportBox ? "flex" : "none" }}
        onClick={() => {
          dispatch(report(false));
          setComment(false);
          setRedioHover("");
        }}
      ></div>
      <div
        className={`report_dialog `}
        style={{
          padding: "20px 30px",
          display: reportBox ? "block" : "none",
        }}
      >
        {comment ? (
          <div>
            <h2 className="text-[26px] font-medium">Report</h2>
            <p className="text-[#ABB2C7] text-[16px] py-[10px]">
              Please provide any additional comment
            </p>

            <div
              className={`reporting_content `}
              style={{ maxHeight: screenHeight - 300 }}
            >
              <textarea
                name=""
                id=""
                className="report_textarea"
                rows={8}
              ></textarea>
            </div>

            <div className="flex justify-end gap-[15px] pt-[10px]">
              <button
                className={`g_button w-[100px]`}
                onClick={() => setComment(false)}
              >
                Back
              </button>
              <button
                className={`n_button w-[100px] `}
                disabled={redioHover === ""}
                style={{ opacity: redioHover === "" ? "0.5" : "1" }}
                onClick={() => {
                  dispatch(report(false));
                  setComment(false);
                }}
              >
                Report
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-[26px] font-medium">Report</h2>
            <p className="text-[#ABB2C7] text-[16px] py-[10px]">
              CraftyArt is able to ensure its content is appropriate for its
              audience and correctly labeled through reporting.
            </p>

            <h3 className="pt-3 font-medium text-[16px]">
              Why are you reporting this content ?
            </h3>

            <div
              className={`reporting_content `}
              style={{ maxHeight: screenHeight - 300 }}
            >
              {reportingContent?.map((item, index) => (
                <div
                  className="redio_hover"
                  onClick={() => setRedioHover(item?.text)}
                  key={index}
                >
                  <div className="icon pt-1 w-[]">
                    {redioHover === item?.text ? (
                      <img src="./icons/tick.svg" alt="" />
                    ) : (
                      <img src="./icons/untick.svg" alt="" />
                    )}
                  </div>
                  <div className="dd">
                    <h3 className="text-[15px]">{item?.title}</h3>
                    <p className="text-[#ABB2C7] text-[14px]">{item?.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-[15px] pt-[10px]">
              <button
                className={`g_button w-[100px]`}
                onClick={() => dispatch(report(false))}
              >
                Cancle
              </button>
              <button
                className={`n_button w-[100px] `}
                disabled={redioHover === ""}
                style={{ opacity: redioHover === "" ? "0.5" : "1" }}
                onClick={() => setComment(true)}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ReportBox;
