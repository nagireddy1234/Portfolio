import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from '../ProjectsLists/ReactProjects';
import HtmlProjects from '../ProjectsLists/HtmlProjects';
import JavaScriptProjects from '../ProjectsLists/JavaScriptProjects';


const Projects = () => {
    return (
        <div>
        <div className="project-container container">
            <div className="main-project-container" style={{backgroundColor:"#fff"}}>
                <Tabs defaultActiveKey="all" className="justify-content-center" variant="pills">
                    <Tab eventKey="all" title="All">
                        <ReactProjects />
                        <HtmlProjects />
                        <JavaScriptProjects />
                    </Tab>
                    <Tab eventKey="reactJs" title="React JS">
                        <ReactProjects />
                    </Tab>
                    <Tab eventKey="html" title="HTML/CSS/BOOTSTRAP">
                        <HtmlProjects />
                    </Tab>
                    <Tab eventKey="javaScript" title="JavaScript/Jquery" >
                    <JavaScriptProjects />
                    </Tab>
                    <Tab eventKey="mongodb" title="NodeJs/MongoDb" >
                    <h1>NodeJs/Mongo Db</h1>
                    </Tab>
                    <Tab eventKey="capstone" title="Capstone Projects" >
                    <h1>Capstone Projects</h1>
                    </Tab>
                </Tabs>
            </div>
        </div>
        </div>
    );
}

export default Projects;

