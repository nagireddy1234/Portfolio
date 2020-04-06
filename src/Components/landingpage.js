import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from '../images/profile_pic.jpg';

import { BouncyDiv } from './Animations/animation';
class Landing extends Component {
  render() {

    return (
      <div className="landing-grid-container container">
        <Grid className="landing-grid">
        <BouncyDiv> <Cell col={12}>  
            <img src={Image} className="avatar-img" alt="avatar" ></img>

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
                <a href="https://codepen.io/nagireddy1234" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-codepen"></i>
                </a>
                <a href="mailto:nagireddy.panditi@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope"></i>
                </a>
              </div>
            </div>
          </Cell> </BouncyDiv>
        </Grid>
      </div>
    );
  }
}
export default Landing;