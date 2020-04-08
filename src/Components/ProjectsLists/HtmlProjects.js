import React from "react";
import HtmlProjectDetails from '../Assests/reactprojectdetails.json'
import img from "../../images/Untitled.png";
import { Container, Row, Col } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Zoom from 'react-reveal/Zoom';

const HtmlProjects = () => {
  return (
    <div className="container">
    {HtmlProjectDetails.map(details => {
      return (
        <Zoom duration={500}>
          <Container className="card Project-card" key={details.id} style={{ padding: "2em", marginTop: "2em", backgroundColor: "#9acd32", borderRadius: "15px", fontFamily: "'oxygen', sansSerif" }}>
            <Row>
              <Col lg="6">
                <h5>{details.name}</h5>
                <p className="tools">{details.tools.join(", ")}</p>
                <Button className="mr-3 mb-3" id="project-button" >
                  <a
                    href={details.deploy_link}
                    target="_blank" rel="noopener noreferrer"
                    className="deploy_link"
                    style={{ textDecoration: "none", color: "#222" }}
                  >
                    {details.deploy_link ? "View Project" : null}
                  </a>
                </Button>
                <Button className="mb-3" id="project-button">
                  <a
                    href={details.code_link}
                    target="_blank" rel="noopener noreferrer"
                    className="code_link"
                    style={{ textDecoration: "none", color: "#222" }}
                  >
                    {details.code_link ? "View Code" : null}
                  </a>
                </Button>
                <p className="description">{details.description}</p>
              </Col>
              <Col lg="6">
               <div class="img-hover-zoom"> <a href={details.deploy_link} target="_blank" rel="noopener noreferrer" > <Image src={img} style={{ height: "100%", width: "75%" }} />
                </a> 
               </div>
              </Col>
            </Row>
          </Container>
         </Zoom>
      );
    })}
  </div>

  )
}

export default HtmlProjects;