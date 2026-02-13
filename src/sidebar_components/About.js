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
                                    Software engineer focused on building solutions that matter.
                                </h2>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <div className="card-panel">
                                <p>
                                    Hello! I’m a Senior Full Stack Engineer with 9+ years of experience building scalable cloud native and distributed systems. I specialize in backend microservices and frontend development, working end to end from API design and data modeling to UI development cloud infrastructure and observability.
                                </p>
                                <p>
                                    I enjoy solving challenging problems, writing clean and maintainable code, and building software that delivers real value at scale. I’m driven by continuous learning and enjoy adapting to new technologies to improve system performance and developer experience.
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
