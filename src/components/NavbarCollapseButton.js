import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import M from "materialize-css/dist/js/materialize.min";

class NavbarCollapseButton extends React.Component {
    componentDidMount() {
        const elem = document.querySelector(".sidenav-activate");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250,
            draggable: true
        });
    }

    render() {
        return (
            <div className="navbar-fixed">
                <nav className="hide-on-large-only z-depth-1">

                    <div data-target="slide-out" className="sidenav-trigger"
                    ><i className="material-icons md-dark md-36 teal-text">menu</i
                    ></div>

                    <div className="name-title">
                        <a href="#Introduction" className="teal-text">Ujjaval Desai
                            <span className="brown-text">Senior Full Stack Engineer</span>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavbarCollapseButton;