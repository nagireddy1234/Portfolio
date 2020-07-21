import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import {BouncyDivRight } from '../Animations/animation';
import MyDetails from '../Reusable/NameDetails'

class About extends Component {
  render() {
    return (
      <div className="aboutme-container container">
        <div className="main-name-container">
          <Grid className="name-container " >
            <MyDetails />
            <Cell className="name__container" col={6}>
              <BouncyDivRight> <h2> Technology Summary </h2>
                <div className="name__container-content">
                  <p><span className="skillset">Programming Languages Skills: </span> JavaScript, React Js, Redux, PHP, Mysql, Web-components, SPA, jQuery, CSS3, Sass, HTML5, BootStrap4, WordPress and knowledge of TypeScript, Node JS, Python, Express and Mongo DB</p>
                  <p><span className="skillset">Other Skills: </span>Responsive Design, Mobile First UX, ES6, ES7, Material UI, Semantic UI, Bitbucket, Github, Babel js, NPM and Webpack </p>
                  <p><span className="skillset">Digital Marketing Knowledge:</span> SEO,Google Ads, FaceBook Ads,Twitter Ads,Instagram Ads,Blogs.</p>
                  <p><span className="skillset">IDE Applications:</span>Visual Studio Code, Notepad++, Code composer studio, IAR embedded system, Eclipse,Visual Studio and MATLAB </p>
                  <p><span className="skillset">Graphical Skills:</span>Adobe Photoshop</p>
                  <p><span className="skillset">Systems:</span>Windows and Mac OS X</p>
                  <p><span className="skillset">Computer skills:</span>Microsoft PowerPoint, Excel and Word etc</p>
                </div>
              </BouncyDivRight>
            </Cell>

          </Grid>
        </div>
      </div>
    );
  }
}
export default About;
