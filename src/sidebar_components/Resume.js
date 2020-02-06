import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

class Resume extends React.Component {
    componentDidMount() {
        var elem = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(elem, {
            margin: 30,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    render() {
        return (
            <div>
                <ComponentHeader heading={"Resume"}/>
                <div className="container flow-text certificate-bg">
                    <div className="row">
                        <div className="col-6">
                            <div className="card darken-1">
                                <div className="card-content certificate-card-1">
                                    <a href="https://www.coursera.org/account/accomplishments/certificate/ZL8C2MUN7NWC"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the Certificate">
                                        <span className="card-title teal-text">Online Machine Learning Course</span></a>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card blue-grey darken-1">
                                <div className="card-content white-text">
                                    <span className="card-title">Card Title</span>
                                    <p>I am a very simple card. I am good at containing small bits of information.
                                        I am convenient because I require little markup to use effectively.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Resume;