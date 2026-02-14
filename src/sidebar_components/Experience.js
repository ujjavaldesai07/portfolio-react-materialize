import React from "react";
import "materialize-css/dist/js/materialize.min.js";
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import sandvineImg from "../images/experience/sandvine.jpg";
import uhclImg from "../images/experience/uhcl.png";
import galendataImg from "../images/experience/galendata.png";
import oracleImg from "../images/experience/oracle.png";

const EXPERIENCE_DATA = [
  {
    image: oracleImg,
    websiteLink: "https://www.oracle.com",
    professionTitle: "Senior Full Stack Engineer",
    descriptionPoints: [
      "Designed and implemented containerized microservices to ingest and process build lifecycle data, improving system scalability, fault tolerance, and real-time observability.",
      "Developed intuitive UI components to provide easy navigation and seamless access to build information, improving user efficiency and overall system usability.",
      "Utilized an event-driven messaging workflow using JMS to track and communicate build status and system events across distributed services.",
      "Integrated AI-powered search with vector-based LLM analysis, aggregating application logs and operational metadata to enhance issue resolution and knowledge retrieval across systems.",
      "Led project initiatives, coordinating cross-functional teams to design, develop, and deliver complex software systems on time and at scale, while mentoring engineers and driving technical excellence.",
    ],
    date: "Feb 2022 - Present | Redwood City, CA",
    tooltip: "Look at the company's website",
  },
  {
    image: galendataImg,
    websiteLink: "https://www.galendata.com",
    professionTitle: "Full Stack Engineer",
    descriptionPoints: [
      "Enhanced backend services by versioning REST APIs and enforcing role-based authorization for controlled data access in a multi-tenant SaaS application.",
      "Extended an existing hybrid database architecture to support additional patient information and medical records, maintaining data integrity and efficient querying.",
      "Implemented secure authentication and authorization mechanisms, including OAuth 2.0 and multi-factor authentication (MFA), to protect application access and sensitive data.",
      "Built a responsive, data-driven dashboard with aggregated metrics and a configurable drag-and-drop form builder for dynamic user input.",
    ],
    date: "Feb 2021 - Feb 2022 | Houston, TX",
    tooltip: "Look at the company's website",
  },
  {
    image: sandvineImg,
    websiteLink: "https://www.sandvine.com",
    professionTitle: "Senior Software Engineer",
    descriptionPoints: [
      "Developed internet traffic classification solutions using pattern-matching and behavioral analysis techniques to identify and categorize internet traffic.",
      "Diagnosed and fixed concurrency race conditions, memory leaks, and performance bottlenecks in multi-threaded C++ network applications, improving system stability and runtime efficiency.",
      "Owned end-to-end delivery and maintenance of a standalone product, managing customer support interactions, bug fixes, build integration, and testing.",
      "Designed and developed an application crawler to track Android and iOS app updates, release timelines, and install counts to support protocol validation workflows.",
    ],
    date: "Oct 2014 - Dec 2018 | Bangalore, India",
    tooltip: "Look at the company's website",
  },
];

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
    let count = 0;
    return descriptionPoints.map((point) => {
      ++count;
      return <li key={count}> {point}</li>;
    });
  }

  renderCards() {
    return EXPERIENCE_DATA.map((data) => {
      return (
        <div key={data.professionTitle} className="row justify-content-center">
          <div className="col-12 col-lg-11 col-xl-10">
            <div className="card darken-1">
              <div className="card-content common-attributes">
                <div className="row align-items-center experience-header justify-content-center">
                  <div className="col-10 pb-2 col-sm-4 mr-sm-auto">
                    <a
                      href={data.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="experience-tooltip"
                      data-position="top"
                      data-tooltip={data.tooltip}
                    >
                      <img
                        src={data.image}
                        className="responsive-img"
                        style={{ height: "auto", maxWidth: "100%" }}
                        alt={data.professionTitle}
                      />
                    </a>
                  </div>
                  <div className="card-title brown-text align-header pr-1 pr-sm-4">
                    {data.professionTitle}
                  </div>
                </div>

                <ul>{this.renderHtmlList(data.descriptionPoints)}</ul>
                <div className="card-action brown-text">
                  <span>{data.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <ComponentHeader heading={"Experience"} />
        <div className="container flow-text experience-container">
          {this.renderCards()}
        </div>
      </div>
    );
  }
}

export default Experience;
