import * as actionTypes from '../action.js'
import React from "react";

const initialStore = {
    name: 'default',
    isAuthorized: 'False',
}
const usersReducer = (store = initialStore, action) => {

    return store
};
export default usersReducer;
