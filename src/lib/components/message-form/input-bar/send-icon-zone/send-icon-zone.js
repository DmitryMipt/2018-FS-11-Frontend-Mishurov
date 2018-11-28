import React from "react";
import './send-icon-zone.css'

export function SendIconZone ({sendMessage}){

    let handleClick = () => {

        let inputVal = document.querySelector('input').value;
        if(inputVal!=='') {
            document.querySelector('input').value = '';
            sendMessage(inputVal);
        }

    }

        return <div className="SendIconZone" onClick={handleClick}>
            <i id="1" className="material-icons" >send</i>
        </div>

}

export default SendIconZone;
