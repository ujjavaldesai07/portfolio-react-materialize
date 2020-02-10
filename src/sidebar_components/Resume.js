import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import resumeImage from '../images/navbar/resume.png';
import axios from 'axios';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const RESUME_URL = 'https://drive.google.com/file/d/1rcCJ3qzJIEyq_Wqkxu_E7Hs2m9IMg1c8/view?usp=sharing';

class Resume extends React.Component {

    handleDownloadFile = (e) => {
        window.open(RESUME_URL, "_blank");
    };

    render() {
        let menu_class = this.props.menu_class;
        return (
            <li>
                <a href="#" onClick={this.handleDownloadFile} target="_blank" className={menu_class + " black-text waves-effect waves-green"}>
                    <img src={resumeImage} className="images" width="30" height="30" alt="icon"/><span>Resume</span></a>
            </li>

        )
    }

}

export default Resume;