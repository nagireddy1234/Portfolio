import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from '../ProjectsLists/ReactProjects';
import HtmlProjects from '../ProjectsLists/HtmlProjects';
import JavaScriptProjects from '../ProjectsLists/JavaScriptProjects';
import PhpProjects from '../ProjectsLists/PhpProjects'
import NodeProjects from '../ProjectsLists/NodeProjects'

const Projects = () => {
    return (
        <div>
        <div className="project-container container">
            <div className="main-project-container" style={{backgroundColor:"#fff"}}>
                <Tabs defaultActiveKey="reactJs" className="justify-content-center" variant="pills">
                    <Tab eventKey="reactJs" title="React JS">
                        <ReactProjects />
                    </Tab>
                    <Tab eventKey="html" title="HTML/CSS/BOOTSTRAP">
                        <HtmlProjects />
                    </Tab>
                    <Tab eventKey="javaScript" title="JavaScript/Jquery" >
                    <JavaScriptProjects />
                    </Tab>
                    <Tab eventKey="php" title="PHP/MySQL" >
                    <PhpProjects />
                    </Tab>
                    <Tab eventKey="node" title="NodeJs/MongoDb" >
                    <NodeProjects />
                    </Tab>
                </Tabs>
            </div>
        </div>
        </div>
    );
}

export default Projects;

