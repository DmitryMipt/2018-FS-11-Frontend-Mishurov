import React from "react";
import SendIconZone from "./send-icon-zone/send-icon-zone";
import AttachZone from "./attach-zone/attach-zone";
import './input-bar.css'
import FormInput from "./input-form/input-form";




export function InputBar()  {

        return (<div className="InputBar">

            <FormInput/>
            <SendIconZone/>
            <AttachZone/>
        </div>);

    }


