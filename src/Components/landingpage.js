import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

import { BouncyDiv } from './Animations/animation';
class Landing extends Component {

  render() {

    return (
      <div className="landing-grid-container">
        <Grid className="landing-grid">
          <Cell col={12}>  <BouncyDiv>
            <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>

            <div className="Banner-text">
              <h1>Front end Web Developer</h1>

              <p>JavaScript | Jquery | React Hooks | Redux |  GitHub/Git | Node Js | Mongo DB | HTML5/CSS3/Bootstrap | Adobe Photoshop</p>
              <div className="social-icons">
                <a href="https://www.linkedin.com/in/nagi-reddy-62594aba/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square"></i>
                </a>
                <a href="https://github.com/nagireddy1234" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square"></i>
                </a>
                <a href="mailto:nagireddy.panditi@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
                <a href="https://www.facebook.com/alwayssmile1234" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-facebook-square"></i>
                </a>
              </div>
            </div> </BouncyDiv>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;