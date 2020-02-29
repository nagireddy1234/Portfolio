import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div className="Resume-page">
                <Grid className="Resume-page-grid">
                    <Cell col={4} className="Resume-page-grid-1">
                        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
                        <h2> Nagi reddy </h2>
                        <h3>Front-end Developer</h3>
                        <hr />
                        <p>Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals</p>
                        <hr />
                        <h4>Address</h4>
                        <p>Sauna-1, Tallinn-10140 Estonia</p>
                        <h4>Phone</h4>
                        <p>ph:(372) 53950665 </p>
                        <h4>Email</h4>
                        <p className="mail-style"><a href="mailto:nagireddy.panditi@gmail.com?Subject=Hello" target="_top"> nagireddy.panditi@gmail.com</a></p>
                        <h4>Web</h4>
                        <p className="mail-style"> <a href="https://nagireddy1234.github.io/myPortfolio/" rel="noopener noreferrer" target="_blank">
                        Portfolio-page
                        </a> </p>
                        
                        
                    </Cell>

                    <Cell col={8} className="Resume-page-grid-2">
                        <h2 >Professional Experience</h2>
                        <Grid className="Experience-grid">

                            <Cell col={4} className="Experience-grid-1">
                                <h6>03/2018-07/2019</h6>
                            </Cell>

                            <Cell col={8} className="Experience-grid-2">
                                <h3 >UI Developer, Scepter.pl, Warsaw, Poland</h3>
                                <ul> <li> Using HTML, CSS, Bootstrap and jQuery to create user-friendly web pages</li><li>Design mobile-based features using RWD</li> <li>Collaborate with back-end developers and web designers to improve the usability and help back-enddevelopers with coding and troubleshooting</li><li>Create quality mockups and prototypes</li>
                                </ul>
                                
                            </Cell>
                        </Grid>
                        <Grid className="Experience-grid">

                            <Cell col={4} className="Experience-grid-1">
                                <h6>08/2015-12/2015</h6>
                            </Cell>

                            <Cell col={8} className="Experience-grid-2">
                                <h3>Intern, Ericsson Eesti As, Tallinn,Estonia</h3>
                                <ul>
                                    <li>
                                    Responsible for a wide variety of advanced verification tasks, including designing self-checking test benches using modern verification techniques; designing verification components such as bus functional models, monitors, and behavioural models
                                    </li>
                                </ul>
                            </Cell>
                        </Grid>
                        <hr />

                        <h2>Education</h2>
                        <Grid className="Experience-grid">

                            <Cell col={4} className="Experience-grid-1">
                                <h6>2007-2011</h6>
                            </Cell>

                            <Cell col={8} className="Experience-grid-2">
                                <h3>Acharya Nagarjuna University</h3>
                                <p style={{ textAlign: "justify", width: "85%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </Cell>
                        </Grid>
                        <Grid className="Experience-grid">

                            <Cell col={4} className="Experience-grid-1">
                                <h6>2011-2013</h6>
                            </Cell>

                            <Cell col={8} className="Experience-grid-2">
                                <h3>Tallinn Tech University</h3>
                                <p style={{ textAlign: "justify", width: "85%" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                            </Cell>
                        </Grid>
                        <hr />
                        <h1 style={{ paddingLeft: "0.5em" }}>Skills</h1>
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