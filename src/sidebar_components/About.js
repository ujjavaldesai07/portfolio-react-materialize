import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";

class About extends React.Component {
    render() {
        return (
            <>
                <ComponentHeader heading={"About"}/>
                <div className="container flow-text about-container justify-content-center px-4 pb-5 px-sm-1">
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <blockquote className="brown-text">
                                <h2>
                                    Goal-oriented full stack engineer with a passion to build applications that make a
                                    difference.
                                </h2>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <div className="card-panel">
                                <p>
                                    Hello! I'm a Full Stack Engineer at Galen Data. I have 5+ years of experience in
                                    software development and expertise in object-oriented programming.
                                    Strong debugging skills in large codebases. Experience working in Agile Software
                                    Development. Good team member with a strong belief that working together as a team
                                    can achieve great success. Proactive in taking responsibility for new initiatives.
                                    Open and flexible to learn new technologies. Worked across all functional areas of
                                    software development.
                                </p>
                                <p>
                                    As a Web Developer, I am always obsessed with minor details, learning new
                                    technologies, and building innovative features in an application.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default About;
