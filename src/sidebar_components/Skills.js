import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import cssImg from '../images/skills/frontend/css3.png'
import htmlImg from '../images/skills/frontend/html5.png'
import jsImg from '../images/skills/frontend/javascript.png'
import bootstrapImg from '../images/skills/frontend/bootstrap.png'
import materializeImg from '../images/skills/frontend/materialize.png'

import javaImg from '../images/skills/languages/java.png'
import cImg from '../images/skills/languages/c.png'
import c_plusImg from '../images/skills/languages/c++.png'
import pythonImg from '../images/skills/languages/python.png'
import swiftImg from '../images/skills/languages/swift.png'

import springImg from '../images/skills/backend/spring.png'
import springbootImg from '../images/skills/backend/springboot.png'
import reactImg from '../images/skills/frontend/react.png'
import nodeImg from '../images/skills/backend/nodejs.png'
import mysqlImg from '../images/skills/backend/mysql.png'

import dockerImg from '../images/skills/buildtools/docker.png'
import herokuImg from '../images/skills/buildtools/heroku.png'
import webpackImg from '../images/skills/buildtools/webpack.png'
import githubImg from '../images/skills/buildtools/github.png'

import wiresharkImg from '../images/skills/othertools/wireshark.png'
import jenkinsImg from '../images/skills/othertools/jenkins.png'
import gdbImg from '../images/skills/othertools/gdb.png'
import valgrindImg from '../images/skills/othertools/valgrind.png'
import bullseyeImg from '../images/skills/othertools/bullseye.png'
import jiraImg from '../images/skills/othertools/jira.png'

const LANGUAGES_MAP = new Map([
    ['Java', javaImg], ['C', cImg],
    ['C++', c_plusImg], ['Python', pythonImg],
    ['Swift', swiftImg]
]);

const FRONTEND_MAP = new Map([
    ['HTML', htmlImg], ['JavaScript', jsImg],
    ['React', reactImg], ['CSS', cssImg],
    ['Bootstrap', bootstrapImg], ['Materialize', materializeImg],
]);

const BACKEND_MAP = new Map([
    ['Spring', springImg], ['Spring Boot', springbootImg],
    ['Node', nodeImg], ['MySQL', mysqlImg]
]);

const BUILDTOOLS_MAP = new Map([
    ['Docker', dockerImg], ['Heroku', herokuImg],
    ['Webpack', webpackImg], ['GitHub', githubImg]
]);

const OTHERTOOLS_MAP = new Map([
    ['Wireshark', wiresharkImg], ['Jenkins', jenkinsImg],
    ['GDB', gdbImg], ['Valgrind', valgrindImg],
    ['Bullseye Coverage', bullseyeImg], ['Jira', jiraImg]
]);

const CARD_LIST = new Map([
    [LANGUAGES_MAP, "languages"], [FRONTEND_MAP, "front-end"],
    [BACKEND_MAP, "back-end"], [BUILDTOOLS_MAP, "build-tools"],
    [OTHERTOOLS_MAP, "other-tools"]]);

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNavId: 'all'
        }
    }

    getCardList() {
        if(this.state.activeNavId === 'all') {
            return CARD_LIST;
        }

        for (const [key, value] of CARD_LIST.entries()) {
            if(this.state.activeNavId === value) {
                console.log("getCardList = " + key);
                return new Map([
                    [key, value]]);
            }
        }
    }

    handleMouseEnter = (e) => {
        const href = e.target.href;
        const id = href.substring(href.indexOf('#') + 1);

        this.setState({
            activeNavId: id
        })
    };

    render() {
        function renderSkills(skills_map) {
            const skills = [];
            console.log("In renderSkills: skills_map = " + skills_map);
            for (const [key, value] of skills_map.entries()) {
                skills.push(<div className="col col-sm-4 col-md-2">
                    <img src={value} className="responsive-img" alt=""/>{key}
                </div>)
            }
            return skills;
        }

        function renderCardSkeletons(card_list) {
            var cards = [];
            console.log("renderCardSkeletons: card_list = " + card_list);
            for (const [key, value] of card_list.entries()) {
                console.log("In renderCardSkeleton: key = " + key + ", value = " + value);
                cards.push(
                    <div id={value} className="card skills-card">
                        <div className="card-content">
                            <h4 className="card-title brown-text">{value}</h4>
                            <div className="row text-center">
                                {renderSkills(key)}
                            </div>
                        </div>
                    </div>)
            }
            return cards;
        }

        const navbarItems = [];
        const NAVBAR_ITEMS = ['all', 'languages', 'front-end', 'back-end', 'build-tools', 'other-tools'];

        for (const [, value] of NAVBAR_ITEMS.entries()) {
            navbarItems.push(<span>
                <a href={'#' + value} onMouseEnter={this.handleMouseEnter} className="waves-green black-text">{value}
                </a>
            </span>)
        }

        return (
            <div>
                <ComponentHeader heading={"Skills"}/>
                <div className="container skills-navbar">
                    <div className="row">
                        <div className="col-10">
                            <nav>
                                <div className="nav-wrapper white">
                                    <ul>
                                        {navbarItems}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container">
                    {renderCardSkeletons(this.getCardList())}
                </div>
            </div>
        )
    }

}

export default Skills;