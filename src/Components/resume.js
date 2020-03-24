import React, { Component } from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

class Resume extends Component {
    render() {
        return (
            <div className="resume-page container">
                <Timeline lineColor={'#9acd32'} className="Timeline">
                    <TimelineItem
                        key="001"
                        dateText="12/2019 – Present"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: '#222',
                            padding: '1em',
                            borderRadius: '1em',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="timeLineItem">
                            <h3 >Self learned React Developer</h3>
                        </div>
                        <ul className="timelinneItem-content">
                            <li>I involved from conception to completion with projects that are technologically sound and aesthetically impressive. </li>
                            <li>I have learned and understood the user interactions</li>
                            <li>Designined a modern highly responsive web-based user interface</li>
                            <li>Built reusable components and front-end libraries for future use</li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="03/2018 – 07/2019"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: "#222",
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="timeLineItem">
                            <h3>UI Developer, Scepter.pl</h3>
                            <h5>Warsaw, Poland</h5>
                        </div>
                        <ul className="timelinneItem-content">
                            <li>
                                Using HTML5, CSS3, Bootstrap4 and jQuery to create user-friendly web pages
                       </li>
                            <li>
                                Design mobile-based features using RWD.
                       </li>
                            <li>
                                Collaborate with back-end developers and web designers to improve the usability and help back-end developers with coding and troubleshooting
                       </li>
                            <li>
                                Get feedback from, and build solutions for, users and customers
                       </li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        key="003"
                        dateText="08/2016 – 08/2017"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: '#222',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',

                        }}
                    >
                        <div className="timeLineItem">
                            <h3>Msc in Systems Engineering</h3>
                            <h5>VestFold University College, Vestfold, Norway</h5>
                        </div>
                        <ul className="timelinneItem-content">
                            <li> I applied methodology for systems engineering using the fundamental concepts from disciplines such as probability, economics, and cognitive science.</li>
                            <li>Apply systems engineering tools (e.g., requirements development and management, robust design, Design Structure Matrix) to realistic problems</li>
                            <li>Recognize the value and limitations of modeling and simulation</li>
                            <li> I have studied one year </li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        key="004"
                        dateText="09/2013 – 06/2016"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: "#222",
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="timeLineItem">
                            <h3>Msc in Communicative Electronics </h3>
                            <h5>TalTech University, Tallinn, Estonia</h5>
                        </div>
                        <ul className="timelinneItem-content">
                            <li>
                                The course is Project-based practice with industry
                       </li>
                            <li>
                                studied advanced nano material and semi conductors.
                       </li>
                            <li>
                                I have done thesis on based energy effeciency in WSNs Network
                       </li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        key="005"
                        dateText="08/2016 – 08/2017"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: '#222',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="timeLineItem">
                            <h3>Design Engineer, Solitaire Softech</h3>
                            <h5>Banglore, India</h5>
                        </div>
                        <ul className="timelinneItem-content">
                            <li>Design using special hardware description languages [HDL] like Verilog and VHDL</li>
                            <li>Mainly responsible for design implementation.</li>
                        </ul>
                    </TimelineItem>
                    <TimelineItem
                        key="006"
                        dateText="08/2007 – 06/2011"
                        style={{ color: '#9acd32' }}
                        dateInnerStyle={{ background: '#9acd32', color: '#222' }}
                        bodyContainerStyle={{
                            background: '#9acd32',
                            color: '#222',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <div className="timeLineItem">
                            <h3>B.Tech in Electronics and Communication</h3>
                            <h5>Bapatla, India</h5>
                        </div>
                        <ul className="timelinneItem-content">
                            <li>Percentage: 74.8%</li>
                            <li>Acharya Nagarjuna University, Guntur, India</li>
                            <li>Completed a four-year bachelor degree with distinction</li>
                        </ul>
                    </TimelineItem>
                </Timeline>
            </div>
        );
    }
}
export default Resume;