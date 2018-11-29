import {Component} from "react";
import ResultForm from "./result-form/result-form";
import {connect} from 'react-redux';

import React from "react";

import {InputBar} from "./input-bar/input-bar";
import './message-form.css'


class MessageForm extends Component {

    render() {
        return <div className="MessageForm">
            <ResultForm
                messages={this.props.msg}
                selectedFiles={this.props.msg}
            />
            <InputBar/>
        </div>
    }
}


const mapStateToProps = (state) => {
    return {
        msg: state.mes.messages
    }
};

export default connect(mapStateToProps) (MessageForm);
