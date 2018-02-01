import { combineReducers } from "redux";
import links from "./linksreducer";
import comments from "./commentsreducer";

export default combineReducers({ links, comments });
