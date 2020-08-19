import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import sandvineImg from '../images/experience/sandvine.jpg';
import uhclImg from '../images/experience/uhcl.png';

const Experience_Data = [
    {
        image: uhclImg,
        websiteLink: "https://uhcl.edu",
        professionTitle: "Teaching Assistant",
        descriptionPoints: [
            "Assisted, graded, and gave feedback on assignments for over 30 students.",
            "Tutored students individually and in small groups to reinforce learning concepts."
        ],
        date: "June 2019 - Present | Houston, TX",
        tooltip: "Look at the university's website"
    },
    {
        image: sandvineImg,
        websiteLink: "https://www.sandvine.com",
        professionTitle: "Senior Software Engineer",
        descriptionPoints: [
            "Knowledge of Internet traffic analysis with a good understanding of L4-L7 protocols (TCP/UDP, HTTP, SSL, QUIC).",
            "Involved in the complete software development life cycle.",
            "Performed code reviews to ensure the work delivered by the team is of high-quality standards.",
            "Collaborated with the DevOps team to improve the build infrastructure.",
            "Written Python script to generate report by fetching data from web and sending to testing team.",
            "Documented and trained other team members on the usage of API, features and utilities.",
            "Analyzed, debugged and/or assisted in problem solving in both development and production environment.",
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
        let descriptionPointList = []

        let count = 0
        descriptionPoints.forEach(point => {
            descriptionPointList.push(<li key={count}> {point}</li>)
            ++count
        })
        return descriptionPointList
    }

    renderCard(data) {
        return (
            <div key={data.professionTitle} className="row justify-content-center">
                <div className="col-12 col-lg-11 col-xl-10">
                    <div className="card darken-1">
                        <div className="card-content common-attributes">
                            <div className="row align-items-center experience-header justify-content-center">
                                <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                                    <a href={data.websiteLink}
                                       className="experience-tooltip" data-position="top" data-tooltip={data.tooltip}>
                                        <img src={data.image} className="responsive-img" style={{height: "auto", maxWidth: "100%"}}
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
    }

    renderCards() {
        let renderCardList = []

        Experience_Data.forEach(data => {
            renderCardList.push(this.renderCard(data))
        })

        return renderCardList
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
