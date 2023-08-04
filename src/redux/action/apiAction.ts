import axios from "axios";
import { templates } from "../reducer/apiDataReducer";
import { Dispatch } from "redux";

export const templatesData = (data: any) => (dispatch: Dispatch<any>) => {
  axios
    .post(`/api/get/datas`, data)
    .then((res: any) => {
      dispatch(templates(res?.data?.datas));
    })
    .catch((err) => console.log("err: ", err));
};
