import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import messagesReducer from "./store/reducers/messagesReducer";
import usersReducer from "./store/reducers/usersReducer";
import chatListReducer from "./store/reducers/chatListReducer";
import messageListForChatReducer from "./store/reducers/messageListForChatReducer";


const rootReducer = combineReducers({
    mes: messagesReducer,
    usr: usersReducer,
    cht: chatListReducer,
    msgl: messageListForChatReducer,

});
const store = createStore(rootReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
