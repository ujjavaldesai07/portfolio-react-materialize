import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

const Education_Data = [
    {
        title: "University of Houston - Clear Lake",
        titleLink: "https://www.uhcl.edu",
        degree: "M.S. in Computer Science",
        gpa: "GPA: 3.94/4.0",
        date: "Jan 2019 - Dec 2020 | Houston, TX"
    },
    {
        title: "Gujarat Technological University",
        titleLink: "https://www.gtu.ac.in",
        degree: "B.E. in Electronics & Communication",
        gpa: "GPA: 7.9/10",
        date: "Jun 2009 - Jun 2013 | Gujarat, India"
    }
]

class Education extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".education-tooltip");
        M.Tooltip.init(elem, {
            margin: 15,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderCard(data) {
        return (
            <div key={data.title} className="row justify-content-center">
                <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                    <div className="card darken-1">
                        <div className="card-content common-attributes">
                            <a href={data.titleLink}
                               className="education-tooltip" data-position="top"
                               data-tooltip="Look at the university website">
                                <span className="card-title teal-text">{data.title}</span></a>
                                <div className="container pt-4">
                                    <div className="row">
                                        <div className="mr-auto">
                                            <li>
                                            {data.degree}
                                            </li>
                                        </div>
                                        <div className="justify-content-end">
                                            {data.gpa}
                                        </div>
                                    </div>
                                </div>
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

        Education_Data.forEach(data => {
            renderCardList.push(this.renderCard(data))
        })

        return renderCardList
    }

    render() {
        return (
            <div className="webpage-height">
                <ComponentHeader heading={"Education"}/>
                <div className="container flow-text education-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Education;
