import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newEventActions } from "./reducers/events/newEventSlice";
import { userActions } from "./reducers/user/userSlice";

const actions = {
    ...newEventActions,
    ...userActions,
};


export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};