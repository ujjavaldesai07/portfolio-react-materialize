import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";




class Projects extends React.Component {
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
                <ComponentHeader heading={"Projects"}/>
                <div className="container flow-text">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <a href="https://www.uhcl.edu"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">University of Houston - Clear Lake</span></a>
                                    <li>M.S. in Computer Science <span>GPA: 3.92/4.0</span></li>
                                    <div className="btn-floating btn-large waves-effect waves-light brown">
                                        <FontAwesomeIcon icon={faExternalLinkAlt} size="lg"/>
                                    </div>
                                    <div className="btn-floating btn-large waves-effect waves-light brown">
                                        <FontAwesomeIcon icon={['fab', "github"]} size="lg"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-5">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <a href="https://www.uhcl.edu"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">University of Houston - Clear Lake</span></a>
                                    <li>M.S. in Computer Science <span>GPA: 3.92/4.0</span></li>
                                    <div className="card-action brown-text">
                                        <span>Jan 2019 - Dec 2020 | Houston, TX</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-5">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <a href="https://www.gtu.ac.in/"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">Gujarat Technological University</span></a>
                                    <li>B.E. in Electronics & Communication<span>GPA: 7.9/10</span></li>
                                    <div className="card-action brown-text">
                                        <span>Jun 2009 - Jun 2013 | Gujarat, INDIA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="card darken-1">
                                <div className="card-content common-attributes">
                                    <a href="https://www.uhcl.edu"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">University of Houston - Clear Lake</span></a>
                                    <li>M.S. in Computer Science <span>GPA: 3.92/4.0</span></li>
                                    <div className="card-action brown-text">
                                        <span>Jan 2019 - Dec 2020 | Houston, TX</span>
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

export default Projects;