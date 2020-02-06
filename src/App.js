import React from 'react';
import './App.css';
import 'materialize-css/dist/js/materialize.min.js';

import Sidebar from './components/Sidebar'
import Introduction from "./sidebar_components/Introduction";
import About from "./sidebar_components/About";
import Experience from "./sidebar_components/Experience";
import Projects from "./sidebar_components/Projects";
import Skills from "./sidebar_components/Skills";
import Education from "./sidebar_components/Education";
import Certification from "./sidebar_components/Certification"
import Contact from "./sidebar_components/Contact";
import Resume from "./sidebar_components/Resume";

function App() {
    return (
        <div className="App">
            <Sidebar/>
            <Introduction/>
            <About/>
            <Experience/>
            <Projects/>
            <Skills/>
            <Education/>
            <Certification/>
            <Contact/>
            <Resume/>
        </div>
    );
}

export default App;
