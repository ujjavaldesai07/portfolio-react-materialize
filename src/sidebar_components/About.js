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
                                    Goal-oriented software developer with a passion to build applications that make a
                                    difference.
                                </h2>
                            </blockquote>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11 col-lg-10">
                            <div className="card-panel">
                                <p>
                                    I've 4+ years of experience as a Senior Software Engineer working in Deep Packet
                                    Inspection
                                    technologies of the networking domain. Experienced in software development with
                                    C/C++
                                    in Unix environment. Equipped with diverse and promising skill-set. Good
                                    interpersonal
                                    and communication skills. Built personal projects using trending languages like Java
                                    and
                                    JavaScript using frameworks, databases, and build tools like Spring Boot, React,
                                    Material UI, MySQL, MongoDB, Redis, Webpack, Docker, etc. Currently, I am pursuing
                                    my
                                    Master's degree in Computer Science and I will be graduating in December 2020.
                                </p>
                                <p>
                                    As a Software Developer, I am always obsessed with minor details, learning new
                                    technologies,
                                    and building innovative features in an application. At present, I am looking for an
                                    opportunity to contribute my professional knowledge at the right place and enhance
                                    my
                                    skills for further growth and betterment.
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
