import React from 'react';
import './result-form.css'

export function ResultForm({messages, selectedFiles}) {

    let messagesJSX = messages.map((el) => <li>{el}</li>);


        return ( <div className="res">
        <ul id="messages" className="result">{messagesJSX.reverse()}</ul>
            </div>
        );


}


