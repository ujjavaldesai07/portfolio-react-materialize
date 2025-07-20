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
                                    Passionate software engineer focused on delivering solutions that matter.
                                </h2>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <div className="card-panel">
                                <p>
                                    Hello! I'm a software engineer with over 7 years of experience designing, developing, and 
                                    maintaining software applications. Throughout my career, I have honed my skills in programming, 
                                    problem-solving, and collaborating with diverse teams to deliver high-quality solutions.
                                </p>
                                <p>
                                    Experienced across the full software development lifecycle, I am adept at translating requirements
                                    into efficient, scalable code. I stay committed to continuous learning and adapting to new technologies
                                    to ensure the software I build is reliable and meets business objectives.
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
