import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div className="resume-contaner">
            <Grid className="Resume-page container" >
                <Cell col={12} className="Resume-page-grid">
                    <h2 >Professional Experience</h2>
                    <Grid className="Experience-grid">
                        <Cell col={4} className="Experience-grid-1">
                            <h6>03/2018-07/2019</h6>
                        </Cell>
                        <Cell col={8} className="Experience-grid-2">
                            <h4 >UI Developer, Scepter.pl, Warsaw, Poland</h4>
                            <ul> <li> Using HTML, CSS, Bootstrap and jQuery to create user-friendly web pages</li><li>Design mobile-based features using RWD</li> <li>Collaborate with back-end developers and web designers to improve the usability and help back-enddevelopers with coding and troubleshooting</li><li>Create quality mockups and prototypes</li>
                            </ul>
                        </Cell>
                    </Grid>
                    <Grid className="Experience-grid">

                        <Cell col={5} className="Experience-grid-1">
                            <h6>08/2015-12/2015</h6>
                        </Cell>

                        <Cell col={7} className="Experience-grid-2">
                            <h4>Intern, Ericsson Eesti As, Tallinn,Estonia</h4>
                            <ul>
                                <li>
                                    Responsible for a wide variety of advanced verification tasks, including designing self-checking test benches using modern verification techniques; designing verification components such as bus functional models, monitors, and behavioural models
                                    </li>
                            </ul>
                        </Cell>
                    </Grid>


                    <h2>Education</h2>
                    <Grid className="Experience-grid">

                        <Cell col={5} className="Experience-grid-1">
                            <h6>2007-2011</h6>
                        </Cell>

                        <Cell col={7} className="Experience-grid-2">
                            <h4>Acharya Nagarjuna University</h4>
                            <p style={{ textAlign: "justify", width: "85%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </Cell>
                    </Grid>
                    <Grid className="Experience-grid">

                        <Cell col={5} className="Experience-grid-1">
                            <h6>2011-2013</h6>
                        </Cell>

                        <Cell col={7} className="Experience-grid-2">
                            <h4>Tallinn Tech University</h4>
                            <p style={{ textAlign: "justify", width: "85%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                        </Cell>
                    </Grid>

                    <h2 >Skills</h2>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <h6>JavaScript</h6>
                        </Cell>
                        <Cell col={9}>
                            <ProgressBar progress={45} />
                        </Cell>
                    </Grid>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <h6>HTML/CSS</h6>
                        </Cell>
                        <Cell col={9}>
                            <ProgressBar progress={45} />
                        </Cell>
                    </Grid>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <h6>NodeJS</h6>
                        </Cell>
                        <Cell col={9}>
                            <ProgressBar progress={45} />
                        </Cell>
                    </Grid>
                    <Grid className="demo-grid-1">
                        <Cell col={3}>
                            <h6>React</h6>
                        </Cell>
                        <Cell col={9}>
                            <ProgressBar progress={45} />
                        </Cell>
                    </Grid>
                </Cell>
            </Grid>
        </div>
        );
    }
}
export default Resume;