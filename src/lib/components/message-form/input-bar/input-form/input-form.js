import React, {Component} from 'react'
import './input-form.css'
import {connect} from "react-redux";


class FormInput extends Component {

    render() {
        return <form className="Form-Input" onSubmit={this.props.Submitting}>
            <input name="message-text" type="text" placeholder="Сообщение"/>
        </form>

    }

}
const mapStateToProps = (state) => {
    return {
        ctr: state.mes.messages
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        Submitting: (e) => {
            e.preventDefault();
            dispatch({
                type: 'SUBMIT',
                value: e.target[0].value
            });
            e.target[0].value = '';

        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(FormInput);
