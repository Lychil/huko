import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newEventActions } from "./reducers/events/newEventSlice";

const actions = {
    ...newEventActions
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};