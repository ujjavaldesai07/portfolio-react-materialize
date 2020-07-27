import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

const ProjectData =  [
    [
        "Uflix App",
        "YouTube video search application built using YouTube REST API, JavaScript, jQuery, Nodejs.",	
        "https://uflix-app.herokuapp.com",
        "https://github.com/ujjavaldesai07/uflix-app"
    ],
    [
        "Weather App",
        "Application to get weather information built using Open Weather API, React JS & Node JS.",
        "http://getweather-app.herokuapp.com",
        "https://github.com/ujjavaldesai07/react-weather-app"
    ],
    [
        "ExpenseTracker App",
        "Application to track living expenses using Spring boot, JPA, AOP, MySQL with containerization using Docker.",
        "http://Expense-tracker-3.herokuapp.com",
        "https://github.com/ujjavaldesai07/springboot-JPA-AOP-expense-tracker-app"
    ],
    [
        "UnitConversion App",
        "Application to convert metric units built using Spring boot and Spring MVC.",
        "https://unit-conversion-application.herokuapp.com",
        "https://github.com/ujjavaldesai07/springboot-mvc-docker-unitconversion-app"
    ]
];


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
        function  renderCards(data) {
            return (
                <div className="col-10 col-md-6">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title teal-text">{data[0]}</span>
                            <div className="card-data">
                                <p className="brown-text">{data[1]}</p>
                            </div>
                            <div className="card-action">
                                <a href={data[2]} target="_blank" className="tooltipped btn-floating btn-large waves-effect waves-light brown"
                                   data-position="top" data-tooltip="View Demo">
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size="lg"/>
                                </a>
                                <a href={data[3]} target="_blank" className="tooltipped btn-floating btn-large waves-effect waves-light brown"
                                   data-position="top" data-tooltip="View Source">
                                    <FontAwesomeIcon icon={['fab', "github"]} size="lg"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <ComponentHeader heading={"Projects"}/>
                <div className="container flow-text project-container">
                    <div className="row justify-content-center">
                        {renderCards(ProjectData[0])}
                        {renderCards(ProjectData[1])}
                    </div>
                </div>
                <div className="container flow-text project-container">
                    <div className="row justify-content-center">
                        {renderCards(ProjectData[2])}
                        {renderCards(ProjectData[3])}
                    </div>
                </div>
            </div>
        )
    }

}

export default Projects;
