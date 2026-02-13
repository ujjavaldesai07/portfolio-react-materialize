import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';

class Introduction extends React.Component {
    render() {
        return (
            <div id="Introduction" className="section relative intro-wrapper">
                <div className="intro-blur-bg" />
                <div className="main-container relative z-10">
                    <div className="container">
                        <div>
                            <h2 className="white-text">
                                I <span className="teal">enjoy coding</span>&nbsp;and
                                &nbsp;<span className="underline">learning</span>
                                <br />new things in the software world.
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;
