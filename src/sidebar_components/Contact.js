import React from 'react';
import ComponentHeader from "../components/ComponentHeader";
import M from "materialize-css/dist/js/materialize.min";
import '../styles/sidebarComponent.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

library.add(fab);

const CONTACT_LIST = [
    ["mailto:ujjavaldesai1@gmail.com", "Email Ujjaval", faEnvelope, "ujjavaldesai1@gmail.com"],
    ["https://www.linkedin.com/in/ujjavaldesai", "View Ujjaval on LinkedIn", ['fab', "linkedin"], "linkedin.com/in/ujjavaldesai"],
    ["https://github.com/ujjavaldesai07", "View Ujjaval on GitHub", ['fab', "github"], "github.com/ujjavaldesai07"],
    ["https://www.facebook.com/ujjavaldesai", "View Ujjaval on Facebook", ['fab', "facebook"], "facebook.com/ujjavaldesai"],
    ["https://www.instagram.com/im_ujjval", "View Ujjaval on Instagram", ['fab', "instagram"], "instagram.com/im_ujjval"],
];

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
        let renderContactInfo = () => {
            const contacts = [];
            for(let contact of CONTACT_LIST) {
                contacts.push(
                <div>
                    <a href={contact[0]} target="_blank"
                       className="tooltipped btn-floating btn-large waves-effect waves-light brown"
                       data-position="top" data-tooltip={contact[1]}>
                        <FontAwesomeIcon icon={contact[2]} size="2x"/>
                    </a>
                    <a href={contact[0]} target="_blank" className="teal-text">{contact[3]}</a>
                </div>
                )
            }
            return contacts;
        };


        return (
            <div>
                <ComponentHeader heading={"Contact"}/>
                <div className="container contact-info">
                    {renderContactInfo()}
                </div>
            </div>
        )
    }

}

export default Contact;