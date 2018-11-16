import React, {Component} from 'react'
import './input-form.css'


class FormInput extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addMessage = props.addMessage;

    }


    handleSubmit = (e) => {
        e.preventDefault();
        if (e.target[0].value!=='') {
            this.props.addMessage(e.target[0].value);
            e.target[0].value = '';
        }
    }


    render() {
        return <form className="Form-Input" onSubmit={this.handleSubmit}>
            <input name="message-text" type="text" placeholder="Сообщение"/>
        </form>

    }

}

export default FormInput;
