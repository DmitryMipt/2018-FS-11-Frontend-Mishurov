import * as actionTypes from '../action.js'
import React from "react";

const initialStore = {
    chatId: 'default',
    payload: {
        messages: [],
    }

};
const messageListForChatReducer = (store = initialStore, action) => {

    return store
};
export default messageListForChatReducer;
