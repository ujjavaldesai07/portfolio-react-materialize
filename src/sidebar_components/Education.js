import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

class Education extends React.Component {
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
                <ComponentHeader heading={"Education"}/>
                <div className="container flow-text certificate-bg">
                    <div className="row">
                        <div className="col-6">
                            <div className="card darken-1">
                                <div className="card-content education-card">
                                    <a href="https://www.uhcl.edu"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">University of Houston - Clear Lake</span></a>
                                    <div className="brown-text">
                                        <span>Houston, TX</span>
                                        <span className="date">Jan. 2019 - Dec. 2020</span>
                                    </div>
                                    <li>M.S. in Computer Science <span>GPA: 3.92/4.0</span></li>
                                </div>
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="card darken-1">
                                <div className="card-content education-card">
                                    <a href="https://www.gtu.ac.in/"
                                       className="tooltipped" data-position="top" data-tooltip="Look at the university website">
                                        <span className="card-title teal-text">Gujarat Technological University</span></a>
                                    <div className="brown-text">
                                        <span>Gujarat, INDIA</span>
                                        <span className="date">Jun. 2009 - Jun. 2013</span>
                                    </div>
                                    <li>B.E. in Electronics & Communication<span>GPA: 7.9/10</span></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Education;