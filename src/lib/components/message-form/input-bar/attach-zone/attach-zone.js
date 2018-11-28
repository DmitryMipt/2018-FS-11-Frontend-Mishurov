import React, {Component} from "react";
import './attach-zone.css'

class AttachZone extends Component {

    constructor(props) {
        super(props);
        this.handleSelectedFiles = this.handleSelectedFiles.bind(this);
        this.attachFiles = props.attachFiles;

    }

    handleSelectedFiles = (event) => {
            console.log(event.target.files)
            this.props.attachFiles(event.target.files);


    }

    render() {
        return <div className="AttachZone">
            <label className="input" htmlFor="file-input">
                <i id="2" className="material-icons">add_box</i>
            </label>
                <input className="file-input" id="file-input" type="file"  name="files[]" multiple onChange={this.handleSelectedFiles}/>
        </div>


    }
}

export default AttachZone;
