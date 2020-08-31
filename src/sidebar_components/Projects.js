import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons";
import messengerImg from "../images/project/messenger.png"
import shoppersImg from "../images/project/shoppers.png"
import expenseTrackerImg from "../images/project/expensetracker.png"
import uflixImg from "../images/project/uflix.png"
import weatherImg from "../images/project/weather.png"
import unitconversionImg from "../images/project/unitconversion.png"
import portfolioImg from "../images/project/portfolio.png"

const PROJECT_DATA = [
    {
        title: "Messenger",
        description: "Messenger is a chat application which allows user to communicate in dark theme.",
        websiteLink: "https://messenger-2.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/messenger-reactjs-graphql-nodejs-mongodb",
        image: messengerImg,
        accomplishments: [
            <p>Built with <b>NodeJS</b> and <b>ReactJS</b>.</p>,
            <p>Stored data in <b>MongoDB</b>.</p>,
            <p>Fetch data from server using <b>GraphQL</b>.</p>,
            <p>Established communication using websocket technology based <b>GraphQL Subscription</b>.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b>.</p>,
            <p>Stored authentication details in <b>JS-Cookies</b>.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Shoppers",
        description: "Shoppers is an eCommerce website that allows user to shop clothing and other essentials.",
        websiteLink: "https://shoppers-ecom-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/spring-boot-react-ecommerce-app",
        image: shoppersImg,
        accomplishments: [
            <p>Developed using <b>Microservices Architecture</b>.</p>,
            <p>Built with <b>Spring Boot</b> and <b>ReactJS</b>.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Semantic UI</b>.</p>,
            <p>Fetch images from <b>Cloudinary CDN</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Minimized network calls using <b>Redis cache</b>.</p>,
            <p>Used <b>Stripe API</b> to handle payment service.</p>,
            <p>Integrated <b>Google OAuth 2.0 API</b> for quick login.</p>,
            <p>Used <b>Redux-Form</b> for quick form validation.</p>,
            <p>Stored product buying information and authentication token in <b>JS-Cookies</b>.</p>,
            <p>Used <b>Docker Compose</b> to test for quick application deployment.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Expense Tracker",
        description: "ExpenseTracker allows user to keep track of living expenses based on daily, monthly and yearly records.",
        websiteLink: "http://Expense-tracker-3.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/springboot-JPA-AOP-expense-tracker-app",
        image: expenseTrackerImg,
        accomplishments: [
            <p>Used <b>Spring Boot</b> to maintain back-end services.</p>,
            <p>Front-end built using <b>HTML</b> and <b>JavaScript</b>.</p>,
            <p>Used <b>Thymeleaf</b> as server side Java template engine.</p>,
            <p>Designed in <b>Bootstrap</b>.</p>,
            <p>Stored expense information in <b>MySQL</b> database using <b>Spring JPA</b>.</p>,
            <p>Used <b>Spring AOP</b> for logging.</p>,
            <p>Used <b>Docker Compose</b> to test for quick application deployment.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Uflix",
        description: "Stream Uflix with multiple YouTube videos to track news, stock and many more at the same time.",
        websiteLink: "https://uflix-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/uflix-app",
        image: uflixImg,
        accomplishments: [
            <p>Used <b>NodeJS</b> to maintain back-end services.</p>,
            <p>Front-end built using <b>HTML</b> and <b>JavaScript</b>.</p>,
            <p>Fetched data from <b>YouTube's REST API</b>.</p>,
            <p>Designed in <b>Bootstrap</b>.</p>,
            <p>Used <b>jQuery</b> for event handling and DOM tree traversal and manipulation.</p>,
            <p><b>AJAX</b> calls are made for fetching data from YouTube's API.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Weather App",
        description: "Weather application to get latest information of current temperature in different cities.",
        websiteLink: "http://getweather-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/react-weather-app",
        image: weatherImg,
        accomplishments: [
            <p>Used <b>NodeJS</b> and <b>Express</b> for fetching requests.</p>,
            <p>Front-end built using <b>ReactJS</b>.</p>,
            <p>Used <b>WebPack</b> to bundle and deploy application.</p>,
            <p>Fetched data from <b>Open Weather Map REST API</b>.</p>,
            <p>Designed in <b>Foundation</b> CSS framework.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Unit Conversion",
        description: "Unit Conversion is an application to convert metric units such as temperature, length," +
            " time, and area.",
        websiteLink: "https://unit-conversion-application.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/springboot-mvc-docker-unitconversion-app",
        image: unitconversionImg,
        accomplishments: [
            <p>Built using <b>Spring Boot and Spring MVC</b>.</p>,
            <p>Front-end built using <b>HTML</b> and <b>JavaScript</b>.</p>,
            <p>Used <b>Thymeleaf</b> as server side Java template engine.</p>,
            <p>Designed in <b>Bootstrap</b>.</p>,
            <p>Used <b>Docker</b> to test for quick application deployment.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Personal Portfolio",
        description: "Personal portfolio built with responsive UI using ReactJS and MaterialCSS.",
        websiteLink: null,
        githubLink: "https://github.com/ujjavaldesai07/portfolio-react-materialize",
        image: portfolioImg,
        accomplishments: [
            <p>Front-end built using <b>ReactJS</b>.</p>,
            <p>Used <b>ScrollSpy</b> library for the side navigation bar animation.</p>,
            <p>Designed in <b>MaterialCSS</b> and <b>Bootstrap</b>.</p>,
            <p>Deployed on <b>Netlify</b>.</p>,
        ]
    }
];

class Projects extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".project-tooltip");
        M.Tooltip.init(elem, {
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    render() {
        const renderAccomplishments = (accomplishments) => {
            if (!accomplishments) {
                return null
            }

            let count = 0
            return accomplishments.map(accomplishment => {
                ++count
                return (
                    <li key={count} id="project-accomplishments" style={{listStyleType: "disc", display: "list-item"}}>
                        {accomplishment}
                    </li>
                )
            })
        }

        const renderCards = () => {
            return PROJECT_DATA.map(data => {
                return (
                    <div key={data.title} className="col-md-6 col-lg-6 col-xl-4" style={{paddingBottom: 30}}>
                        <div className="card darken-1 sticky-action">
                            <div className="card-image waves-effect waves-block waves-light mb-2">
                                <img className="activator" src={data.image} alt="project-img"/>
                            </div>
                            <div className="card-content" style={{borderTop: "1px solid rgba(160, 160, 160, 0.2)"}}>
                                <div className="card-title activator teal-text">
                                    <div className="row align-items-center" style={{marginBottom: 0}}>
                                        <div className="col-10 justify-content-start">
                                            {data.title}
                                        </div>
                                        <div>
                                            <i className="material-icons right">more_vert</i>
                                        </div>
                                    </div>
                                </div>

                                <div className="card-data">
                                    <p>{data.description}</p>
                                </div>
                            </div>

                            <div className="card-action" style={{backgroundColor: "white"}}>
                                {data.websiteLink ? <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                                       className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                                       data-position="top" data-tooltip="View Demo"
                                                       style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={faExternalLinkAlt} size="sm"/>
                                </a> : null}
                                <a href={data.githubLink} target="_blank" rel="noopener noreferrer"
                                   className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                   data-position="top" data-tooltip="View Source" style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={['fab', "github"]} size="sm"/>
                                </a>
                            </div>

                            <div className="card-reveal">
                            <span className="card-title brown-text font-weight-light">Accomplishments
                                <i className="material-icons right brown-text">close</i>
                            </span>
                                <div style={{paddingLeft: 12}}>
                                    <ul>
                                        {renderAccomplishments(data.accomplishments)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })

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
