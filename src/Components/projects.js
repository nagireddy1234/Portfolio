import React, { Component } from "react";
import { Container, Row, Col,Tabs,Tab } from 'react-bootstrap';

export default class Projects extends React.Component {
    state = {

    }

    render() {
        return (
            <div className="project-container container">
            <div className="main-name-container">
                <Container>
                    <Row>
                        <Col style={{display:"flex", justifyContent:"center"}}>

                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" variant="pills">
                                <Tab eventKey="home" title="React Js">
                                    home
                                </Tab>
                                <Tab eventKey="profile" title="HTML">
                                    profile
                                </Tab>
                                <Tab eventKey="contact" title="MongoDB" >
                                    contact
                                </Tab>
                            </Tabs>

                        </Col>
                    </Row>
                </Container>
            </div>
            </div>
        );
    }
}
