import React from "react";
import ProjectDetails from '../Assests/projectdetails.json'
import img from "../../images/Untitled.png";
import {Container,Row,Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image'

const ReactProjects = () => {
  return (
    <div className="container">
    {ProjectDetails.map(details => {
      return (
        <Container className="card" key={details.id} style={{padding:"2em", margin:"2em 2em", backgroundColor:"#9acd32", borderRadius:"15px"}}>
          <Row>
          <Col lg="6">
          <h5>{details.name}</h5>
          <p className="tools">{details.tools.join(", ")}</p>
          <ul>
            <li style={{listStyleType:"none"}}>
              <a
                href={details.deploy_link}
                target="_blank" rel="noopener noreferrer" 
                className="deploy_link"
              >
               {details.deploy_link? "View Project" : null} 
              </a>
            </li>
            <li style={{listStyleType:"none"}}>
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
        </Col>
        <Col lg="6">
         <a href={details.deploy_link}  target="_blank" rel="noopener noreferrer" > <Image rounded src={img} style={{height:"100%", width:"75%"}} />
        </a>
         </Col>
          </Row>  
        </Container>
       
      );
    })} 
  </div>
  )
}

export default ReactProjects;