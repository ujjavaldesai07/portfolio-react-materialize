import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import resumeImage from '../images/navbar/resume.png';

class Resume extends React.Component {

    handleDownloadFile = () => {
        window.open(process.env.REACT_APP_RESUME_URL, "_blank");
    };

    render() {
        let menu_class = this.props.menu_class;
        return (
            <li>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a onClick={this.handleDownloadFile}
                     className={menu_class + " black-text waves-effect waves-green"}>
                    <img src={resumeImage} className="images" width="30" height="30" alt="icon"/>
                    <span>Resume</span>
                </a>
            </li>

        )
    }

}

export default Resume;
