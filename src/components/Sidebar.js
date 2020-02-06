import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import '../styles/sidebar.css'
import userImage from '../images/user.png';
import trendImage from '../images/trend.png';
import projectImage from '../images/project.png';
import skillsImage from '../images/skills.png';
import educationImage from '../images/education.png';
import certificateImage from '../images/certificate.png';
import contactImage from '../images/email.png';
import resumeImage from '../images/resume.png';
import ScrollSpyNav from "./ScrollSpyNav";
import NavbarCollapseButton from "./NavbarCollapseButton";

const MENU_ITEMS_MAP = new Map([
    ['About', userImage], ['Experience', trendImage],
    ['Projects', projectImage], ['Skills', skillsImage],
    ['Education', educationImage], ['Certification', certificateImage],
    ['Contact', contactImage], ['Resume', resumeImage]
]);

class Sidebar extends React.Component {
    getMenuItems = () => {
        var menuItems = [];
        menuItems.push("Introduction");
        for (const [key,] of MENU_ITEMS_MAP.entries()) {
            menuItems.push(key);
        }
        return menuItems;
    };

    componentDidMount() {
        var elem = document.querySelector(".sidenav-activate");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

    render() {
        const fixedSidebarItems = [];

        for (const [key, value] of MENU_ITEMS_MAP.entries()) {
            fixedSidebarItems.push(<li>
                <a href={'#' + key} className="waves-effect waves-green menu-item black-text">
                    <img src={value} className="images" width="30" height="30" alt={value}/> {key}</a>
            </li>)
        }

        const collapseSidebarItems = [];

        for (const [key, value] of MENU_ITEMS_MAP.entries()) {
            collapseSidebarItems.push(<li>
                <a href={'#' + key} className="waves-effect waves-green toggle-menu-item black-text">
                    <img src={value} className="images" width="30" height="30" alt={value}/> {key}</a>
            </li>)
        }

        return (
            <div>
                <ScrollSpyNav
                    scrollTargetIds={this.getMenuItems()}
                    offset={0}
                    activeNavClass="active"
                    scrollDuration="1000"
                    headerBackground="true">

                    <NavbarCollapseButton/>

                    <nav className="hide-on-small-only">
                        <ul className="sidenav sidenav-fixed section table-of-contents">
                            <li className="logo user-view">
                                    <a href="#Introduction" className="logo-name teal-text"><h1>Ujjaval Desai</h1></a>
                                    <a href="#Introduction" className="logo-name-desc"><span className="brown-text">Full Stack Developer</span></a>
                            </li>
                            {fixedSidebarItems}
                        </ul>
                    </nav>

                    <nav className="hide-on-large-only disable-navbar">
                        <ul id="slide-out" className="sidenav sidenav-activate">
                            {collapseSidebarItems}
                        </ul>
                    </nav>
                </ScrollSpyNav>
            </div>
        );
    }
}

export default Sidebar;