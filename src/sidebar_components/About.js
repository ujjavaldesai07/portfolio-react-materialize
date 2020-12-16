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
                                    Hello! I am a recent graduate (December 2020) with a Master’s degree in Computer
                                    Science with strong academic performance (3.96 GPA). In past, I have gained 4+ years of
                                    experience in software development with C++ and Deep Packet Inspection
                                    technologies of the Networking domain. I had worked as a Senior Software Engineer
                                    at Sandvine in 2014 and I had a great experience working in such a professional
                                    environment.
                                </p>
                                <p>
                                    I am passionate about coding and building real-world applications which
                                    gives me a better understanding in terms of performance, scalability,
                                    user experience, etc. I have built personal projects such as a shopping website,
                                    chat application, self-assessment tool, etc. These applications are built using
                                    Java, JavaScript, and CSS frameworks like Spring Boot, Node.js, React, Material UI, etc.
                                    I have also used databases and tools in my project such as MySQL, MongoDB, Redis,
                                    Docker, Webpack, etc. All of my personal projects are deployed on Heroku, AWS and
                                    the source code is available on GitHub.
                                </p>
                                <p>
                                    As a Software Engineer, I am always obsessed with minor details, learning new
                                    technologies, and building innovative features in an application. At present,
                                    I am looking for an opportunity to contribute my professional knowledge
                                    at the right place and enhance my skills for further growth and betterment.
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
