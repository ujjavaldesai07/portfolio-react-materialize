import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import sandvineImg from '../images/experience/sandvine.jpg';
import uhclImg from '../images/experience/uhcl.png';
import galendataImg from '../images/experience/galendata.png';

const EXPERIENCE_DATA = [
    {
        image: galendataImg,
        websiteLink: "https://www.galendata.com",
        professionTitle: "Full Stack Engineer",
        descriptionPoints: [
            "Develop and maintain Backend REST APIs and services using Spring Framework.",
            "Develop Angular interfaces based on UI/UX designs.",
            "Optimize cloud application for maximum performance, responsiveness, and scalability.",
            "Write and execute unit tests and end-to-end (e2e) tests using unit test frameworks like Karma, Jasmine, Mockito, JUnit.",
            "Work with team members to design innovative software programs that improve and simplify experience for customers.",
        ],
        date: "Feb 2021 - Present | Houston, TX",
        tooltip: "Look at the company's website"
    },
    {
        image: uhclImg,
        websiteLink: "https://uhcl.edu",
        professionTitle: "Teaching Assistant",
        descriptionPoints: [
            "Assisted, graded, and gave feedback on assignments for over 30 students.",
            "Tutored students individually and in small groups to reinforce learning concepts."
        ],
        date: "Jun 2019 - Dec 2020 | Houston, TX",
        tooltip: "Look at the university's website"
    },
    {
        image: sandvineImg,
        websiteLink: "https://www.sandvine.com",
        professionTitle: "Senior Software Engineer",
        descriptionPoints: [
            "Knowledge of Internet traffic analysis with a good understanding of L4-L7 protocols (TCP/UDP, HTTP, SSL, QUIC).",
            "Expertise in C++, OOPS, Multi-threading, Exception-Handling & STL Containers.",
            "Strong experience working in a Linux environment.",
            "Involved in the complete software development life cycle and agile development practices.",
            "Solved issues related to functionality breakage, concurrency, performance, memory leak, and crashes in C++.",
            "Worked with the DevOps team to implement the build infrastructure functionality in Python.",
            "Wrote Shell/AWK scripts to automate package building, unit-testing on different Linux distribution.",
            "Performed code reviews to ensure the work delivered by the team is of high-quality standards.",
            "Analyzed, debugged, and/or assisted in problem-solving in both development and production environment."
        ],
        date: "Oct 2014 - Dec 2018 | Bangalore, India",
        tooltip: "Look at the company's website"
    }
]

class Experience extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".experience-tooltip");
        M.Tooltip.init(elem, {
            margin: 50,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderHtmlList(descriptionPoints) {
        let count = 0
        return descriptionPoints.map(point => {
            ++count
            return <li key={count}> {point}</li>
        })
    }

    renderCards() {
        return EXPERIENCE_DATA.map(data => {
            return (
                <div key={data.professionTitle} className="row justify-content-center">
                    <div className="col-12 col-lg-11 col-xl-10">
                        <div className="card darken-1">
                            <div className="card-content common-attributes">
                                <div className="row align-items-center experience-header justify-content-center">
                                    <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                                        <a href={data.websiteLink} target="_blank" rel="noopener noreferrer"
                                           className="experience-tooltip" data-position="top"
                                           data-tooltip={data.tooltip}>
                                            <img src={data.image} className="responsive-img"
                                                 style={{height: "auto", maxWidth: "100%"}}
                                                 alt={data.professionTitle}/>
                                        </a>
                                    </div>
                                    <div className="card-title brown-text align-header pr-1 pr-sm-4">
                                        {data.professionTitle}
                                    </div>
                                </div>

                                <ul>
                                    {this.renderHtmlList(data.descriptionPoints)}
                                </ul>
                                <div className="card-action brown-text">
                                    <span>{data.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <ComponentHeader heading={"Experience"}/>
                <div className="container flow-text experience-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Experience;
