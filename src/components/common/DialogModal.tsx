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

const DialogModal = (props: any) => {
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
        style={{ display: props?.open ? "flex" : "none" }}
        onClick={() => {
          props.setOpen(false);
        }}
      ></div>

      <div
        className={`report_dialog `}
        style={{
          display: props?.open ? "block" : "none",
        }}
      >
        <img
          src="./icons/dialogClose.svg"
          alt=""
          className="fixed right-[-40px] top-[-10px] cursor-pointer"
          onClick={() => {
            props.setOpen(false);
          }}
        />

        {props?.children}
      </div>
    </>
  );
};

export default DialogModal;
