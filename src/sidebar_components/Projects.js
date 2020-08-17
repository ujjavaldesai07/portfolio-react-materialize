import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";

export const ProjectData =  [
    {
        title: "eCommerce App",
        description: "eCommerce application based on the microservices architecture built using Spring Boot and ReactJS.",
        websiteLink: "https://shoppers-ecom-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/spring-boot-react-ecommerce-app"
    },
    {
        title: "ExpenseTracker App",
        description: "Application to track living expenses using Spring boot, JPA, AOP, MySQL with containerization using Docker.",
        websiteLink: "http://Expense-tracker-3.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/springboot-JPA-AOP-expense-tracker-app"
    },
    {
        title: "Uflix App",
        description: "YouTube video search application built using YouTube REST API, JavaScript, jQuery, Nodejs.",
        websiteLink: "https://uflix-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/uflix-app"
    },
    {
        title: "Weather App",
        description: "Application to get weather information built using Open Weather API, React JS & Node JS.",
        websiteLink: "http://getweather-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/react-weather-app"
    },
    {
        title: "UnitConversion App",
        description: "Application to convert metric units built using Spring boot and Spring MVC.",
        websiteLink: "https://unit-conversion-application.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/springboot-mvc-docker-unitconversion-app"
    }
];

class Projects extends React.Component {
    componentDidMount() {
        var elem = document.querySelectorAll(".project-tooltip");
        M.Tooltip.init(elem, {
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    render() {
        const renderCard = (data) => {
            return (
                <div key={data.title} className="col-md-6">
                    <div className="card darken-1">
                        <div className="card-content">
                            <span className="card-title teal-text">{data.title}</span>
                            <div className="card-data">
                                <p className="brown-text">{data.description}</p>
                            </div>
                            <div className="card-action">
                                <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                   className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                   data-position="top" data-tooltip="View Demo" style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm"/>
                                </a>
                                <a href={data.githubLink} target="_blank" rel="noopener noreferrer"
                                   className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                   data-position="top" data-tooltip="View Source" style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={['fab', "github"]} size="sm"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        const renderCards = () => {
            let renderCardList = []
            ProjectData.forEach(data => {
                renderCardList.push(renderCard(data))

            })
            return renderCardList
        }

        return (
            <div>
                <ComponentHeader heading={"Projects"}/>
                <div className="container flow-text project-container">
                    <div className="row justify-content-center justify-content-md-between justify-content-lg-between">
                        {renderCards()}
                    </div>
                </div>
            </div>
        )
    }

}

export default Projects;
