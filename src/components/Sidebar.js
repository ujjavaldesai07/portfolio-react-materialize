import React from "react";
import '../styles/sidebar.css'
import userImage from '../images/navbar/user.png';
import trendImage from '../images/navbar/trend.png';
import projectImage from '../images/navbar/project.png';
import skillsImage from '../images/navbar/skills.png';
import educationImage from '../images/navbar/education.png';
import certificateImage from '../images/navbar/certificate.png';
import contactImage from '../images/navbar/email.png';
import ScrollSpyNav from "./ScrollSpyNav";
import NavbarCollapseButton from "./NavbarCollapseButton";
import Resume from "../sidebar_components/Resume";

const MENU_LIST = [
    ['About', userImage, "teal-text"], ['Experience', trendImage, "indigo-text"],
    ['Projects', projectImage, "purple-text"], ['Skills', skillsImage, "orange-text"],
    ['Education', educationImage, "cyan-text"], ['Certification', certificateImage, "red-text"],
    ['Contact', contactImage, "yellow-text"]
];

class Sidebar extends React.Component {
    getMenuItems = () => {
        var menuItems = [];
        menuItems.push("Introduction");
        for (const item of MENU_LIST) {
            menuItems.push(item[0]);
        }
        return menuItems;
    };

    render() {
        const fixedSidebarItems = [];

        for (const item of MENU_LIST) {
            fixedSidebarItems.push(<li key={item[0]}>
                <a href={'#' + item[0]} className={item[2] + " waves-effect waves-green menu-item"}>
                    <img src={item[1]} width="30" height="30" alt="icon"/><span>{item[0]}</span></a>
            </li>)
        }

        const collapseSidebarItems = [];

        for (const item of MENU_LIST) {
            collapseSidebarItems.push(<li key={item[0]}>
                <a href={'#' + item[0]} className="waves-effect waves-green toggle-menu-item black-text">
                    <img src={item[1]} width="30" height="30" alt="icon"/><span>{item[0]}</span></a>
            </li>)
        }

        return (
            <div>
                <ScrollSpyNav
                    scrollTargetIds={this.getMenuItems()}
                    offset={0}
                    activeNavClass="active"
                    scrollDuration={1000}
                    headerBackground="true">

                    <NavbarCollapseButton/>

                    <nav className="hide-on-small-only">
                        <ul className="sidenav sidenav-fixed section table-of-contents">
                            <li className="logo user-view">
                                <a href="#Introduction" className="logo-name teal-text"><h1>Ujjaval Desai</h1></a>
                                <a href="#Introduction" className="logo-name-desc brown-text">Full Stack Engineer</a>
                            </li>
                            {fixedSidebarItems}
                        {/*<Resume menu_class={"menu-item"}/>*/}
                        </ul>
                    </nav>

                    <nav className="hide-on-large-only disable-navbar">
                        <ul id="slide-out" className="sidenav sidenav-activate">
                            {collapseSidebarItems}
                            {/*<Resume menu_class={"toggle-menu-item"}/>*/}
                        </ul>
                    </nav>
                </ScrollSpyNav>
            </div>
        );
    }
}

export default Sidebar;
