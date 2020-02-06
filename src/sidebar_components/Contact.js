import React from 'react';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import '../styles/sidebarComponent.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

library.add(fab);

class Contact extends React.Component {
    componentDidMount() {
        var elem = document.querySelectorAll(".tooltipped");
        M.Tooltip.init(elem, {
            margin: 30,
            enterDelay: 400,
            exitDelay: 200
        });
    }

    render() {
        var iconSize = "3x";
        return (
            <div>
                <ComponentHeader heading={"Contact"}/>
                <div className="container contact-logo">
                    <p>
                        <a href="mailto:ujjavaldesai1@gmail.com"
                           className="tooltipped" data-position="top" data-tooltip="Email Ujjaval">
                        <FontAwesomeIcon icon={faEnvelope} size={iconSize}/></a>
                        <a href="mailto:ujjavaldesai1@gmail.com" className="teal-text contact-info">ujjavaldesai1@gmail.com</a>
                    </p>
                    <p className="customize">
                        <a href="https://www.linkedin.com/in/ujjavaldesai/" target="_blank"
                           className="tooltipped" data-position="top" data-tooltip="View Ujjaval on LinkedIn">
                        <FontAwesomeIcon icon={['fab', "linkedin"]}size={iconSize}/></a>
                        <a href="https://www.linkedin.com/in/ujjavaldesai/" className="teal-text contact-info"> linkedin.com/in/ujjavaldesai</a>
                    </p>
                    <p>
                        <a href="https://github.com/ujjavaldesai07" target="_blank"
                           className="tooltipped" data-position="top" data-tooltip="View Ujjaval on GitHub">
                        <FontAwesomeIcon icon={['fab', "github"]} size={iconSize}/></a>
                        <a href="https://github.com/ujjavaldesai07" className="teal-text contact-info">github.com/ujjavaldesai07</a>
                    </p>
                    <p>
                        <a href="https://www.facebook.com/ujjavaldesai" target="_blank"
                           className="tooltipped" data-position="top" data-tooltip="Message Ujjaval on Facebook">
                        <FontAwesomeIcon icon={['fab', "facebook"]} size={iconSize}/></a>
                        <a href="https://www.facebook.com/ujjavaldesai" className="teal-text contact-info">facebook.com/ujjavaldesai</a>
                    </p>
                    <p className="customize">
                        <a href="https://www.instagram.com/im_ujjval/" target="_blank"
                           className="tooltipped" data-position="top" data-tooltip="Message Ujjaval on Instagram">
                        <FontAwesomeIcon icon={['fab', "instagram"]} size={iconSize}/></a>
                        <a href="https://www.instagram.com/im_ujjval/" className="teal-text contact-info"> instagram.com/im_ujjval</a>
                    </p>
                </div>
            </div>
        )
    }

}

export default Contact;