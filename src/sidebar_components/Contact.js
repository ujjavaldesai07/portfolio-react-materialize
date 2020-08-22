import React from 'react';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import '../styles/sidebarComponent.css'

import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const CONTACT_DATA = [
    {
        link: "mailto:ujjavaldesai1@gmail.com",
        tooltip: "Email Ujjaval",
        icon: faEnvelope,
        title: "ujjavaldesai1@gmail.com"
    },
    {
        link: "https://www.linkedin.com/in/ujjavaldesai",
        tooltip: "View Ujjaval on LinkedIn",
        icon: ['fab', "linkedin"],
        title: "linkedin.com/in/ujjavaldesai"
    },
    {
        link: "https://github.com/ujjavaldesai07",
        tooltip: "View Ujjaval on GitHub",
        icon: ['fab', "github"],
        title: "github.com/ujjavaldesai07"
    },
    {
        link: "https://www.facebook.com/ujjavaldesai",
        tooltip: "View Ujjaval on Facebook",
        icon: ['fab', "facebook"],
        title: "facebook.com/ujjavaldesai"
    },
    {
        link: "https://www.instagram.com/im_ujjval",
        tooltip: "View Ujjaval on Instagram",
        icon: ['fab', "instagram"],
        title: "instagram.com/im_ujjval"
    },
];

class Contact extends React.Component {
    componentDidMount() {
        const elem = document.querySelectorAll(".contact-tooltip");
        M.Tooltip.init(elem, {
            enterDelay: 400,
            exitDelay: 200
        });
    }

    renderContactInfo = () => {
        return CONTACT_DATA.map(data => {
            return (
                <div key={data.link} className="row align-items-center">
                    <div className="pr-4">
                        <a href={data.link} target="_blank" rel="noopener noreferrer"
                           className="contact-tooltip btn-floating btn-large waves-effect waves-light brown"
                           data-position="top" data-tooltip={data.tooltip}>
                            <FontAwesomeIcon icon={data.icon} size="2x"/>
                        </a>
                    </div>
                    <div>
                        <a href={data.link} target="_blank" rel="noopener noreferrer"
                           className="teal-text">{data.title}</a>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <>
                <ComponentHeader heading={"Contact"}/>
                <div className="container contact-info">
                    <div className="col-sm-11">
                        {this.renderContactInfo()}
                    </div>
                </div>
            </>
        )
    }

}

export default Contact;