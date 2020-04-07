import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from './ProjectsLists/ReactProjects';

const Projects = () => {
    
    return (
        <div className="project-container container">
            <div className="main-project-container" style={{backgroundColor:"#fff"}}>
                <Tabs defaultActiveKey="reactJs" className="justify-content-center" variant="pills">
                    <Tab eventKey="reactJs" title="React JS">
                        <ReactProjects />
                    </Tab>
                    <Tab eventKey="html" title="HTML">
                        <h1>HTML</h1>
                    </Tab>
                    <Tab eventKey="javaScript" title="JavaScript" >
                    <h1>JavaScript</h1>
                    </Tab>
                    <Tab eventKey="mongodb" title="MongoDb" >
                    <h1>Mongo Db</h1>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Projects;

