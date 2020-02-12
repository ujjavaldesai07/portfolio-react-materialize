import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import sandvineImg from '../images/experience/sandvine.png';
import uhclImg from '../images/experience/uhcl.png';

class Experience extends React.Component {
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
                <ComponentHeader heading={"Experience"}/>
                <div className="container flow-text experience-container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <div className="experience-header">
                                        <span>
                                    <a href="https://uhcl.edu/"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <img src={uhclImg} className="responsive-img" width="300px" height="300px" alt=""/>
                                    </a>
                                        </span>
                                        <span className="card-title brown-text align-header">Teaching Assistant</span>
                                    </div>
                                    <ul>
                                        <li>Assisted, graded, and gave feedback on assignments for over 30 students.</li>
                                        <li>Tutored students individually and in small groups to reinforce learning concepts.</li>
                                    </ul>
                                    <div className="card-action brown-text">
                                        <span>Jun 2019 - Present | Houston, TX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <div className="experience-header">
                                        <span>
                                    <a href="https://www.sandvine.com"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the company's website">
                                        <img src={sandvineImg} className="responsive-img center-block" width="200px" height="200px" alt=""/>
                                    </a>
                                        </span>
                                        <span className="card-title brown-text">Senior Software Engineer</span>
                                    </div>
                                    <ul>
                                        <li>Proficient in internet traffic analysis for classifying network-based applications with a good understanding of
                                            L4-L7 protocols (TCP/UDP, HTTP, SSL, QUIC).</li>
                                        <li>Designed solutions for internet traffic identification using traffic recognition techniques such as pattern matching, behavioral flow classification etc.</li>
                                        <li>Developed feature to expose header fields from QUIC protocol to recognize applications in real time.</li>
                                        <li>Solved issues related to functionality breakage, concurrency, performance, memory leak, and crashes in C++.</li>
                                        <li>Implemented solutions in C++ in the UNIX environment.</li>
                                        <li>Individually maintain a small-scale product that includes communicating with the support team, bugs addressing, build integration and testing.</li>
                                        <li>Worked collaboratively with the DevOps team to add a framework in Python to support non-recursive make in the build infrastructure.</li>
                                        <li>Built an application in Java which tracks Android/iOS application updates in the App store.</li>
                                        <li>Used Google Search Engine’s RESTful API to develop an application in the Shell script to extract the information related to latest trending iOS/Android application.</li>
                                    </ul>
                                    <div className="card-action brown-text">
                                        <span>Oct 2014 - Dec 2018 | Bangalore, India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Experience;