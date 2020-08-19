import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";

class About extends React.Component {
    render() {
        return (
            <>
                <ComponentHeader heading={"About"}/>
                <div className="container flow-text about-container justify-content-center px-4 pb-5 px-sm-1 px-md-5">
                    <div className="pb-3">
                        <blockquote className="brown-text">
                            <h2>
                                Goal-oriented software developer with a passion to build applications that make a difference.
                            </h2>
                        </blockquote>
                    </div>
                    <div>
                        <p>
                            I've 4+ years of experience as a Senior Software Engineer working in Deep Packet Inspection
                            technologies of the networking domain. Experienced in software development with C/C++ in Unix environment.
                            Equipped with diverse and promising skillset. Currently, I am pursuing my Master's degree in
                            Computer Science and I will be graduating in December 2020.
                        </p>
                        <p>
                            As a Software Developer, I am always obsessed with minor details, learning new technologies,
                            and building innovative features in an application. At present, I am looking for an opportunity to
                            contribute my professional knowledge at the right place and enhance my skills for further
                            growth and betterment.
                        </p>
                    </div>
                </div>
            </>
        )
    }

}

export default About;
