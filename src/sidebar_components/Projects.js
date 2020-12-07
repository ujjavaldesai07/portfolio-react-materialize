import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt, faPlay} from "@fortawesome/free-solid-svg-icons";
import messengerImg from "../images/project/messenger.png"
import shoppersImg from "../images/project/shoppers.png"
import expenseTrackerImg from "../images/project/expensetracker.png"
import uflixImg from "../images/project/uflix.png"
import weatherImg from "../images/project/weather.png"
import unitconversionImg from "../images/project/unitconversion.png"
import portfolioImg from "../images/project/portfolio.png"
import saWebsiteImg from "../images/project/saWebsiteImg.png"
import saAdminImg from "../images/project/saAdminImg.png"
import capstoneImg from "../images/project/capstoneImg.png"
import techeventsImg from "../images/project/techevents.png"
import ReactPlayer from 'react-player'


const PROJECT_DATA = [
    {
        title: "Shoppers",
        description: "Shoppers is an eCommerce website that allows user to shop clothing and other essentials.",
        websiteLink: "https://shoppers-ecom-app.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/spring-boot-react-ecommerce-app",
        image: shoppersImg,
        video: "https://youtu.be/PQ1c0Ag0DcA",
        technologyUsed: [
            <p>Developed using <b>Microservices Architecture</b>.</p>,
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
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
        title: "Messenger",
        description: "Messenger is a chat application which allows user to communicate in dark theme.",
        websiteLink: "https://messenger-2.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/messenger-React-graphql-nodejs-mongodb",
        image: messengerImg,
        video: "https://youtu.be/vfZMLAbNMGI",
        technologyUsed: [
            <p>Built with <b>NodeJS</b> and <b>React</b>.</p>,
            <p>Stored data in <b>MongoDB</b>.</p>,
            <p>Fetch data from server using <b>GraphQL</b>.</p>,
            <p>Established communication using <b>GraphQL Subscription</b> which is based
                on <b>WebSocket</b> technology.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b>.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Self-Assessment",
        description: "Self-Assessment is an application to assess whether the user needs the cloud connectivity support or not.",
        image: saWebsiteImg,
        video: "https://youtu.be/bBZvGnXbe0w",
        technologyUsed: [
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
            <p>Used <b>RESTful</b> architecture to serve the client requests.</p>,
            <p>Used <b>Swagger UI</b> to for REST Api documentation.</p>,
            <p>Added <b>logback-spring</b> support to manage logs.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Bootstrap</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Stored authentication token in <b>JS-Cookies</b>.</p>,
            <p>Deployed on <b>AWS</b>.</p>,
        ]
    },
    {
        title: "Self-Assessment Admin",
        description: "Self-Assessment admin is an application to manage the data of Self-Assessment website.",
        image: saAdminImg,
        video: "https://youtu.be/QuNnCsbhDPg",
        technologyUsed: [
            <p>Built with <b>Spring Boot</b> and <b>React</b>.</p>,
            <p>Used <b>RESTful</b> architecture to serve the client requests.</p>,
            <p>Used <b>Swagger UI</b> to for REST Api documentation.</p>,
            <p>Added <b>logback-spring</b> support to manage logs.</p>,
            <p><b>React-Redux</b> to maintain react states.</p>,
            <p>Designed in <b>Material UI</b> and <b>Bootstrap</b>.</p>,
            <p>Stored user and product information in <b>MySQL</b> database.</p>,
            <p>Stored authentication token in <b>JS-Cookies</b>.</p>,
            <p>Deployed on <b>AWS</b>.</p>,
        ]
    },
    {
        title: "Capstone Project Website",
        description: "This is capstone project website for Self-Assessment application.",
        websiteLink: "https://ujjavaldesai07.github.io/capstone-project-website",
        githubLink: "https://github.com/ujjavaldesai07/capstone-project-website",
        image: capstoneImg,
        video: null,
        technologyUsed: [
            <p>Built with <b>HTML</b> and <b>CSS</b>.</p>,
            <p>Designed in <b>Materialize CSS</b>.</p>,
            <p>Deployed on <b>GitHub pages</b>.</p>,
        ]
    },
    {
        title: "Web Scraper",
        description: "Web Scraper is tool which scrapes the tech events details periodically in the background and shows the list of events.",
        websiteLink: "https://scraper-events.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/scraper-springboot-angular-mongodb",
        image: techeventsImg,
        video: null,
        technologyUsed: [
            <p>Built with <b>Spring Boot</b>, <b>Angular</b>, and <b>MongoDB</b>.</p>,
            <p>Used <b>TypeScript</b> for strong typing.</p>,
            <p><b>NgRx</b> is used to maintain angular states.</p>,
            <p>Designed in <b>Angular Material</b>.</p>,
            <p>Data is scrape periodically/batch processing using <b>Multithreading</b> environment.</p>,
            <p>Stored scraped data in <b>MongoDB</b> database.</p>,
            <p>Used <b>JUnit</b> to write spring boot integration test.</p>,
            <p>Deployed on <b>Heroku</b> using <b>Docker</b>.</p>,
        ]
    },
    {
        title: "Expense Tracker",
        description: "ExpenseTracker allows user to keep track of living expenses based on daily, monthly and yearly records.",
        websiteLink: "http://Expense-tracker-3.herokuapp.com",
        githubLink: "https://github.com/ujjavaldesai07/springboot-JPA-AOP-expense-tracker-app",
        image: expenseTrackerImg,
        video: null,
        technologyUsed: [
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
        video: null,
        technologyUsed: [
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
        video: null,
        technologyUsed: [
            <p>Used <b>NodeJS</b> and <b>Express</b> for fetching requests.</p>,
            <p>Front-end built using <b>React</b>.</p>,
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
        video: null,
        technologyUsed: [
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
        description: "Personal portfolio built with responsive UI using React and MaterialCSS.",
        websiteLink: null,
        githubLink: "https://github.com/ujjavaldesai07/portfolio-react-materialize",
        image: portfolioImg,
        video: null,
        technologyUsed: [
            <p>Front-end built using <b>React</b>.</p>,
            <p>Used <b>ScrollSpy</b> library for the side navigation bar animation.</p>,
            <p>Designed in <b>MaterialCSS</b> and <b>Bootstrap</b>.</p>,
            <p>Deployed on <b>Netlify</b>.</p>,
        ]
    }
];

class Projects extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectVideo: null
        }
    }

    componentDidMount() {
        const tooltipElem = document.querySelectorAll(".project-tooltip");
        M.Tooltip.init(tooltipElem, {
            enterDelay: 400,
            exitDelay: 200,
        });

        const modalElem = document.querySelectorAll('.modal');
        M.Modal.init(modalElem, {
            onCloseEnd: () => this.setState({selectVideo: null})
        });
    }

    render() {
        const renderTechnologyUsed = (sentences) => {
            if (!sentences) {
                return null
            }

            return sentences.map((sentence, index) => {
                return (
                    <li key={index} style={{listStyleType: "disc", display: "list-item"}}>
                        {sentence}
                    </li>
                )
            })
        }

        const playVideoHandler = (video) => {
            this.setState({selectVideo: video})
        }

        const renderSelectedVideo = () => {
            return (
                <div id="modal1" className="modal" style={{
                    maxWidth: "80%",
                    height: "fit-content",
                    maxHeight: "fit-content",
                    backgroundColor: "black"
                }}>
                    <ReactPlayer url={this.state.selectVideo}
                                 muted={true}
                                 className='react-player'
                                 width="inherit"
                                 controls={true} playing={this.state.selectVideo !== null}/>
                </div>
            )
        }

        const renderCards = () => {
            return PROJECT_DATA.map(data => {
                return (
                    <div key={data.title} className="col-md-6 col-lg-6 col-xl-4" style={{paddingBottom: 30}}>
                        <div className="card darken-1 sticky-action">
                            <div className="project-tooltip card-image waves-effect waves-block waves-light mb-2"
                                 data-position="top" data-tooltip="View Technology Used">
                                <img className="activator" src={data.image} alt="project-img"/>
                            </div>
                            <div className="card-content" style={{borderTop: "1px solid rgba(160, 160, 160, 0.2)"}}>
                                <div className="card-title activator teal-text">
                                    <div className="row align-items-center" style={{marginBottom: 0}}>
                                        <div className="col-10 justify-content-start">
                                            {data.title}
                                        </div>
                                        <div className="project-tooltip" data-tooltip="View Technology Used" data-position="left">
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


                                {data.video ?
                                    // eslint-disable-next-line
                                    <a data-target="modal1" onClick={() => playVideoHandler(data.video)}
                                       className="modal-trigger project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                       data-position="top" data-tooltip="Play Demo Clip"
                                       style={{textAlign: "center"}}>
                                        <FontAwesomeIcon icon={faPlay} size="sm"/>
                                    </a> : null}

                                {data.githubLink ? <a href={data.githubLink} target="_blank" rel="noopener noreferrer"
                                                      className="project-tooltip btn-floating btn-small waves-effect waves-light brown"
                                                      data-position="top" data-tooltip="View Source"
                                                      style={{textAlign: "center"}}>
                                    <FontAwesomeIcon icon={['fab', "github"]} size="sm"/>
                                </a> : null}

                            </div>

                            <div className="card-reveal">
                            <span className="card-title brown-text font-weight-light">Technology Used
                                <i className="material-icons right brown-text">close</i>
                            </span>
                                <div style={{paddingLeft: 12}}>
                                    <ul>
                                        {renderTechnologyUsed(data.technologyUsed)}
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
                    <div className="row justify-content-start">
                        {renderCards()}
                    </div>
                </div>
                {renderSelectedVideo()}
            </div>
        )
    }

}

export default Projects;
