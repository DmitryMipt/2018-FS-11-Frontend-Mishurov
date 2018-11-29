import * as actionTypes from '../action.js'
import React from "react";

const initialStore = {
    messages: [],
}
const messagesReducer = (store = initialStore, action) => {
    if(action.type === actionTypes.SUBMIT) {

        if (action.value!=='') {


            const mess = [...store.messages].reverse();
            mess.push(action.value);

            return {
                messages: mess.map((el) => <li>{el}</li>).reverse()
            }
        }
    }
    if(action.type === actionTypes.SEND) {

        if (action.value!=='') {

            const mess = [...store.messages].reverse();
            mess.push(action.value);
            return {
                ...store,
                messages: mess.map((el) => <li>{el}</li>).reverse()
            }
        }
    }
    if(action.type === actionTypes.ATTACH){

        const mess = [...store.messages].reverse();
        let filesList = action.event.target.files;

        for (let i = 0; i < filesList.length; i++) {

            let file = filesList[i];
            if (file.type === ('image/png') || file.type === ('image/jpeg') || file.type === ('image/gif')) {
                mess.push(<img className='fileImg' src={URL.createObjectURL(file)}/>)
            }
            else {
                mess.push(<a className='fileA' href={URL.createObjectURL(file)}>{file.name}</a>)
            }

        }

        return {
            ...store,
            messages: mess.reverse(),
        }


    }
    return store
};
export default messagesReducer;
