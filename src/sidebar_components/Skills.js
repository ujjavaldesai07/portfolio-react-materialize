import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import ComponentHeader from "../components/ComponentHeader";
import cssImg from '../images/skills/frontend/css3.png'
import htmlImg from '../images/skills/frontend/html5.png'
import jsImg from '../images/skills/frontend/javascript.png'
import bootstrapImg from '../images/skills/frontend/bootstrap.png'
import materializeImg from '../images/skills/frontend/materialize.png'
import materialUIImg from '../images/skills/frontend/material-ui.png'
import semanticUIImg from '../images/skills/frontend/semantic-ui.png'

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
import redisImg from '../images/skills/backend/redis.png'
import graphqlImg from "../images/skills/backend/graphql.png"
import mongodbImg from "../images/skills/backend/mongodb.png"

import dockerImg from '../images/skills/buildtools/docker.png'
import herokuImg from '../images/skills/buildtools/heroku.png'
import webpackImg from '../images/skills/buildtools/webpack.png'
import gitImg from '../images/skills/buildtools/git.png'

import wiresharkImg from '../images/skills/othertools/wireshark.png'
import jenkinsImg from '../images/skills/othertools/jenkins.png'
import gdbImg from '../images/skills/othertools/gdb.png'
import valgrindImg from '../images/skills/othertools/valgrind.png'
import bullseyeImg from '../images/skills/othertools/bullseye.png'
import jiraImg from '../images/skills/othertools/jira.png'

const LANGUAGES_MAP = new Map([
    ['Java', javaImg], ['C', cImg],
    ['C++', c_plusImg], ['Python', pythonImg], ['Swift', swiftImg]
]);

const FRONTEND_MAP = new Map([
    ['JavaScript', jsImg], ['HTML', htmlImg], ['CSS', cssImg], ['React', reactImg],
    ['Bootstrap', bootstrapImg], ['Materialize', materializeImg],
    ['Material UI', materialUIImg], ['Semantic UI', semanticUIImg]
]);

const BACKEND_MAP = new Map([
    ['Spring', springImg], ['Spring Boot', springbootImg],
    ['Node', nodeImg], ['GraphQL', graphqlImg], ['MySQL', mysqlImg],
    ['MongoDB', mongodbImg], ['Redis', redisImg]
]);

const BUILD_TOOLS_MAP = new Map([
    ['Docker', dockerImg], ['Heroku', herokuImg],
    ['Git', gitImg], ['Webpack', webpackImg], ['Jenkins', jenkinsImg]
]);

const OTHER_TOOLS_MAP = new Map([
    ['Wireshark', wiresharkImg], ['GDB', gdbImg],
    ['Valgrind', valgrindImg], ['Bullseye Coverage', bullseyeImg],
    ['Jira', jiraImg]
]);

const CARD_LIST = new Map([
    [LANGUAGES_MAP, "languages"], [FRONTEND_MAP, "front-end"],
    [BACKEND_MAP, "back-end"], [BUILD_TOOLS_MAP, "build-tools"],
    [OTHER_TOOLS_MAP, "other-tools"]]);

class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNavId: 'all',
            fullHeight: ''
        }
    }

    getCardList() {
        if (this.state.activeNavId === 'all') {
            return CARD_LIST;
        }

        for (const [key, value] of CARD_LIST.entries()) {
            if (this.state.activeNavId === value) {
                return new Map([
                    [key, value]]);
            }
        }
    }

    handleMouseEnter = (e) => {
        const href = e.target.href;
        const id = href.substring(href.indexOf('#') + 1);
        if (id !== null && id !== this.state.activeNavId) {
            this.getNavLinkElement(id).classList.add('active');
            this.getNavLinkElement(this.state.activeNavId).classList.remove('active');
            this.setState({
                activeNavId: id,
                fullHeight: ''
            });
            if (id !== 'all') {
                this.setState({
                    fullHeight: 'full-height'
                });
            }
        }
    };

    componentDidMount() {
        this.getNavLinkElement('all').classList.add('active');
    }

    getNavLinkElement(sectionID) {
        return document.querySelector(`a[href='#${sectionID}']`);
    }

    render() {
        function renderSkills(skills_map) {
            let skills = [];
            for (const [key, value] of skills_map.entries()) {
                skills.push(
                    <div key={key} className="col-6 col-sm-4 col-md-3 col-xl-2 pb-3" style={{
                        textAlignLast: "center",
                        textAlign: "-webkit-center"
                    }}>
                        <div>
                            <img src={value} className="responsive-img" alt=""/>
                        </div>
                        <div className="pt-3" style={{fontSize: "1rem"}}>
                            {key}
                        </div>
                    </div>
                )
            }
            return skills;
        }

        function renderCardSkeletons(card_list) {
            let cards = [];
            for (const [key, value] of card_list.entries()) {
                cards.push(
                    <div key={`${key}-${value}`} id={value} className="card skills-card">
                        <div className="card-content">
                            <div className="container">
                                <h4 className="card-title brown-text pb-4">{value}</h4>
                            </div>
                            <div className="row">
                                {renderSkills(key)}
                            </div>
                        </div>
                    </div>)
            }
            return cards;
        }

        const navbarItems = [];
        const NAVBAR_ITEMS = ['all', 'languages', 'front-end', 'back-end', 'build-tools', 'other-tools'];

        for (const item of NAVBAR_ITEMS) {
            navbarItems.push(
                <li key={item} className="nav-item">
                    <a href={'#' + item} onMouseEnter={this.handleMouseEnter} className="waves-green black-text">{item}
                    </a>
                </li>
            )
        }

        return (
            <div className={this.state.fullHeight}>
                <ComponentHeader heading={"Skills"}/>
                <div className="container skills-navbar">
                    <div className="row justify-content-center">
                        <div>
                            <nav>
                                <div className="white navbar-nav nav-fill">
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