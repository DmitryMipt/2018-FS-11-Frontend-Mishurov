import React from "react";
import SendIconZone from "./send-icon-zone/send-icon-zone";
import GeoLocationZone from "./geoLocation-zone/geoLocation-zone";
import AttachZone from "./attach-zone/attach-zone";
import './input-bar.css'
import FormInput from "./input-form/input-form";




export function InputBar({addMessage,sendMessage,attachFiles})  {



    let handleSubmit = (content) => {

        addMessage(content);
    };
    let handleSend = (val) => {

        sendMessage(val);

    };
    let handleAttachment = (files) => {

        attachFiles(files);

    };
        return (<div className="InputBar">

            <FormInput
                addMessage={handleSubmit}

            />
            <SendIconZone sendMessage={handleSend}/>
            <AttachZone attachFiles={handleAttachment}/>
        </div>);

    }


