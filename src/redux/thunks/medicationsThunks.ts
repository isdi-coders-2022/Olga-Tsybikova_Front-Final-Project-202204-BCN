import { Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { loadMedicationsActionCreator } from "../features/medicationsSlice";

export const loadMedicationsThunk = () => async (dispatch: Dispatch) => {
  const url: string = `${process.env.REACT_APP_API_URL}medications/list`;
  const token = localStorage.getItem("token");

  try {
    const { data, status } = await axios.get(url, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (status === 200) {
      dispatch(loadMedicationsActionCreator(data));
    }
  } catch (error: any) {
    return error.message;
  }
};