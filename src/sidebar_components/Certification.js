import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";

const Certificate_Data = [
    {
        title: "Online Machine Learning Course",
        titleLink: "https://www.coursera.org/account/accomplishments/certificate/ZL8C2MUN7NWC",
        description: "Studied various concepts of machine learning such as linear regression, " +
                     "logistic regression, neural networks etc.",
        date: "February 2017",
        tooltip: "Look at the Certificate"
    },
    {
        title: "Advanced Certified Course in Embedded Systems",
        titleLink: "http://www.vectorindia.org",
        description: "Learned wide array of concepts such as C, C++, Linux internals, " +
                     "TCP/IP and socket programming.",
        date: "Apr 2014 - Sep 2014 | Bangalore, India",
        tooltip: "Look at the institute website"
    }
]

class Certification extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".certificate-tooltip");
        M.Tooltip.init(elem, {
            margin: 15,
            enterDelay: 400,
            exitDelay: 200,
        });
    }

    renderCard(data) {
        return (
            <div className="row justify-content-center">
                <div className="col-12 col-md-12 col-sm-12 col-lg-10 col-xl-10">
                    <div className="card darken-1">
                        <div className="card-content common-attributes">
                            <a href={data.titleLink}
                               className="certificate-tooltip" data-position="top"
                               data-tooltip={data.tooltip}>
                                <span className="card-title teal-text">{data.title}</span></a>
                            <p className="py-4">{data.description}</p>
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

        Certificate_Data.forEach(data => {
            renderCardList.push(this.renderCard(data))
        })

        return renderCardList
    }

    render() {
        return (
            <div>
                <ComponentHeader heading={"Certification"}/>
                <div className="container flow-text certificate-container">
                    {this.renderCards()}
                </div>
            </div>
        )
    }

}

export default Certification;