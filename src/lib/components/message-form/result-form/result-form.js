import React from 'react';
import './result-form.css'
import {connect} from "react-redux";

const ResultForm = (props) => {


        return ( <div className="res">
        <ul id="messages" className="result">{props.messages}</ul>
            </div>
        );


};

export default ResultForm;


