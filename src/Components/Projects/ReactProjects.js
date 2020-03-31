import React from "react";
import ProjectDetails from '../Assests/projectdetails.json'

const ReactProjects = () => {
  return (
    <div className="container">
    {ProjectDetails.map(details => {
      return (
        <div className="card" key={details.id} style={{padding:"2em", margin:"2em auto", backgroundColor:"#9acd32"}}>
          <h5>{details.name}</h5>
          <p className="tools">{details.tools.join(", ")}</p>
          <ul>
            <li>
              <a
                href={details.deploy_link}
                target="_blank" rel="noopener noreferrer" 
                className="deploy_link"
              >
                View Project
              </a>
            </li>
            <li>
              <a
                href={details.code_link}
                target="_blank" rel="noopener noreferrer" 
                className="code_link"
              >
                {details.code_link ? "View Code" : null}
              </a>
            </li>
          </ul>
          <p className="description">{details.description}</p>
        </div>
      );
    })}
  </div>
  )
}

export default ReactProjects;