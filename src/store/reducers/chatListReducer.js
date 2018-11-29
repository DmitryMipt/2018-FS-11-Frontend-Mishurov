import * as actionTypes from '../action.js'
import React from "react";

const initialStore = {
    name: 'default',
    unreadedMessages: 0,
}
const chatListReducer = (store = initialStore, action) => {

    return store
};
export default chatListReducer;
