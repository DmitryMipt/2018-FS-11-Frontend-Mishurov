import {Component} from "react";
import {ResultForm} from "./result-form/result-form";

import React from "react";

import {InputBar} from "./input-bar/input-bar";
import './message-form.css'


class MessageForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSend = this.handleSend.bind(this);
        this.handleAttachment = this.handleAttachment.bind(this);
        this.state = {
            messages: [],
            selectedFiles: [],
        };
    }

    handleSubmit = function (content) {
        const mess = [...this.state.messages];
        mess.push(content);
        this.setState({
            messages: mess,
                    });
    };

    handleSend = (val) => {
        const mess = [...this.state.messages];
        mess.push(val);
        this.setState({
            messages: mess,
        });
    };

    handleAttachment = (files) => {
        let filesJSX =[];
        for (let i = 0; i < files.length; i++) {

            let file = files[i];
            if (file.type === ('image/png') || file.type === ('image/jpeg') || file.type === ('image/gif')) {
                filesJSX.push(<img src={URL.createObjectURL(file)}/>)
            }
            else {
                filesJSX.push(<a href={URL.createObjectURL(file)}>{file.name}</a>)
            }

        }
        const mess = [...this.state.messages];

        mess.push.apply(mess, filesJSX);
        this.setState({
            messages: mess,

        });
    };

    render() {
        return <div className="MessageForm">
            <ResultForm
                messages={this.state.messages}
                selectedFiles={this.state.messages}
            />
            <InputBar
                addMessage={this.handleSubmit}
                sendMessage={this.handleSend}
                attachFiles={this.handleAttachment}

            />
        </div>
    }
}
export default MessageForm;

