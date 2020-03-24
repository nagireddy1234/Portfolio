import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { BouncyDiv, BouncyDivRight } from './Animations/animation';

class About extends Component {
  render() {
    return (
      <div className="aboutme-container container">
        <div className="main-name-container">
          <Grid className="name-container " >
            <Cell className="name-container-1" col={6}>
              <BouncyDiv> <h2> Nagi reddy </h2>
                <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
                <p > Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals </p>  </BouncyDiv>
            </Cell>

            <Cell className="name-container-2" col={6}>

              <BouncyDivRight> <h2> Technology Summary </h2>
                <div className="name-container-2-content">
                  <p> <span className="skillset">Programming Languages Skills: </span> JavaScript, React Js, Redux, Web-components, SPA, Node JS, Express, Mongo DB; CSS3, Sass; HTML5; BootStrap4; WordPress.</p>
                  <p><span className="skillset"> Other Skills:</span> Responsive Design, Mobile First UX, ES6, ES7, Jira, Bitbucket, Github, Babel js, NPM, Webpack </p>
                  <p><span className="skillset">Digital Marketing Knowledge:</span> SEO, Google Ads, FaceBook Ads, Twitter Ads, Instagram Ads, Blogs.</p>
                  <p><span className="skillset">IDE Applications:</span> Visual Studio Code, Notepad++, Code composer studio, IAR embedded system, Eclipse, Visual Studio MATLAB, Microwind 3.1, LT Spice, Cadence.</p>
                  <p><span className="skillset">Graphical Skills:</span> Adobe Photoshop</p>
                  <p><span className="skillset">Systems: </span> Windows, Mac OS X. </p>
                  <p><span className="skillset">Computer skills:</span> Microsoft PowerPoint, Excel and Word etc</p>
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
