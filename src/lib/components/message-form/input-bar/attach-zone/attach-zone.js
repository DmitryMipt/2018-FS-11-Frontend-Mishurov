import React, {Component} from "react";
import './attach-zone.css'
import {connect} from "react-redux";

class AttachZone extends Component {


    render() {
        return <div className="AttachZone">
            <label className="input" htmlFor="file-input">
                <i id="2" className="material-icons">add_box</i>
            </label>
                <input className="file-input" id="file-input" type="file"  name="files[]" multiple onChange={this.props.Attaching}/>
        </div>


    }
}
const mapStateToProps = (state) => {
    return {
        msg: state.mes.messages
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Attaching: (e) => {


            dispatch({
                type: 'ATTACH',
                event: e
            });


        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AttachZone);
