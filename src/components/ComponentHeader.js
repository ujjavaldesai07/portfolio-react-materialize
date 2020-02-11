import React from 'react';
import 'materialize-css/dist/js/materialize.min.js';
import '../styles/componentHeader.css';

const ComponentHeader = (props) => {
    return (
        <div id={props.heading}>
            <h3 className="styleHeader white-text teal">{props.heading}</h3>
        </div>
    )
};

export default ComponentHeader;