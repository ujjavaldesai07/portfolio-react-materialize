import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

class Certification extends React.Component {
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
                <ComponentHeader heading={"Certification"}/>
                <div className="container flow-text certificate-bg">
                    <div className="row">
                        <div className="col-6">
                            <div className="card darken-1">
                                <div className="card-content certificate-card">
                                    <a href="https://www.coursera.org/account/accomplishments/certificate/ZL8C2MUN7NWC"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the Certificate">
                                        <span className="card-title teal-text">Online Machine Learning Course</span></a>
                                        <span className="brown-text">February 2017</span>
                                    <p>Studied various concepts of machine learning such as linear regression,
                                    logistic regression, neural networks etc.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card darken-1">
                                <div className="card-content certificate-card">
                                    <a href="http://www.vectorindia.org/"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the institute website">
                                        <span className="card-title teal-text">Advanced Certified Course in Embedded Systems</span></a>
                                    <span className="brown-text">Apr. 2014 - Sep. 2014</span>
                                    <p>Learned wide array of concepts such as C, C++, Linux internals,
                                        TCP/IP and socket programming.</p>
                                </div>
                            </div>
                        </div>
                </div>
                </div>
            </div>
        )
    }

}

export default Certification;