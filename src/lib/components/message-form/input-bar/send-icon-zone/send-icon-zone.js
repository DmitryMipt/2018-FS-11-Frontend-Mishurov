import React, {Component} from "react";
import './send-icon-zone.css'
import connect from "react-redux/es/connect/connect";

class SendIconZone extends Component {


    render() {
        return <div className="SendIconZone" onClick={this.props.Sending}>
            <i id="1" className="material-icons">send</i>
        </div>

    }
}
const mapStateToProps = (state) => {
    return {
        ctr: state.mes.messages
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Sending: () => {

            dispatch({
                type: 'SEND',
                value: document.querySelector('input').value
            });
            document.querySelector('input').value = '';


        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SendIconZone)
