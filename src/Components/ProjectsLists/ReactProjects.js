import React from "react";
import ProjectDetails from '../Assests/projectdetails.json'
import img from "../../images/Untitled.png";
import {Container,Row,Col} from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ScrollAnimation from 'react-animate-on-scroll';


const ReactProjects = () => { 
  const pStyles = {
    backgroundColor:"transparent",
    color:"#222 !important",
    borderRadius:"25px",
    border:"1px solid #222", 
    fontWeight:"800",
  }
  return (
   
    <div className="container">
    {ProjectDetails.map(details => {
      return (
        <ScrollAnimation animateIn='zoomIn' duration={0.5} initiallyVisible={true} >
        <Container className="card Project-card" key={details.id} style={{padding:"2em", marginTop:"2em", backgroundColor:"#9acd32", borderRadius:"15px", fontFamily:"'oxygen', sansSerif"}}>
          <Row>
          <Col lg="6">
          <h5>{details.name}</h5>
          <p className="tools">{details.tools.join(", ")}</p>
          <Button  className="mr-3 mb-3"
          style={pStyles}
          >
              <a
                href={details.deploy_link}
                target="_blank" rel="noopener noreferrer" 
                className="deploy_link" 
                style={{textDecoration:"none",color:"#222"}}
              >
               {details.deploy_link? "View Project" : null} 
              </a>
          </Button>
          <Button className="mb-3"
           style={{backgroundColor:"transparent", color:"#222 !important", borderRadius:"25px",border:"1px solid #222", fontWeight:"800", outline:"0 !important"}}
          >
              <a
                href={details.code_link}
                target="_blank" rel="noopener noreferrer" 
                className="code_link"
                style={{textDecoration:"none",color:"#222"}}
              >
                {details.code_link ? "View Code" : null}
              </a>
          </Button>
          <p className="description">{details.description}</p>
        </Col>
        <Col lg="6">
         <a href={details.deploy_link}  target="_blank" rel="noopener noreferrer" > <Image rounded src={img} style={{height:"100%", width:"75%"}} />
        </a>
         </Col>
          </Row>
            
        </Container>
        </ScrollAnimation>
      );
    })} 
  </div>
 
  )
}

export default ReactProjects;