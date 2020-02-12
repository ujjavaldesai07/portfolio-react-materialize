import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';

class NavbarCollapseButton extends React.Component {
    render() {
        return (
            <div className="navbar-fixed">
                <nav className="hide-on-large-only z-depth-1">
                    <a href="#" data-target="slide-out" className="sidenav-trigger"
                    ><i className="material-icons md-dark md-36 teal-text">menu</i
                    ></a>

                    <div className="name-title">
                        <a href="#" className="teal-text">Ujjaval Desai
                            <span className="brown-text">Software Developer</span>
                        </a>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavbarCollapseButton;