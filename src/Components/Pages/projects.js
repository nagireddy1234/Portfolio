import React, {useState} from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ReactProjects from '../ProjectsLists/ReactProjects';
import HtmlProjects from '../ProjectsLists/HtmlProjects';
import Pagination from "react-js-pagination";

const Projects = () => {

    const [activePage, setActivePage] = useState(2)
    
    return (
        <div>
        <div className="project-container container">
            <div className="main-project-container" style={{backgroundColor:"#fff"}}>
                <Tabs defaultActiveKey="all" className="justify-content-center" variant="pills">
                    <Tab eventKey="all" title="All">
                        <ReactProjects />
                        <HtmlProjects />
                    </Tab>
                    <Tab eventKey="reactJs" title="React JS">
                        <ReactProjects />
                    </Tab>
                    <Tab eventKey="html" title="HTML/CSS/BOOTSTRAP">
                        <HtmlProjects />
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
        <Pagination
          activePage={activePage}
          itemsCountPerPage={5}
          totalItemsCount={100}
          pageRangeDisplayed={4}
          onChange={(activePage)=>{setActivePage(activePage)}}
        />
        </div>
    );
}

export default Projects;

