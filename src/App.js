import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import Introduction from "./sidebar_components/Introduction";
import About from "./sidebar_components/About";
import Experience from "./sidebar_components/Experience";
import Projects from "./sidebar_components/Projects";
import Skills from "./sidebar_components/Skills";
import Education from "./sidebar_components/Education";
import Certification from "./sidebar_components/Certification";
import Contact from "./sidebar_components/Contact";

function App() {
    console.log(`${process.env.REACT_APP_RESUME_URL}`)
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
        </div>
    );
}

export default App;
