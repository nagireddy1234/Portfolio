import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Image from "../../images/profile_pic.jpg";
import Typing from "react-typing-animation";
import { BouncyDiv } from "../Animations/animation";

class Landing extends Component {
  render() {
    return (
      <div className="landing-grid-container container">
        <Grid className="landing-grid">
          <BouncyDiv>
            <Cell col={12}>
              <img src={Image} className="avatar-img" alt="avatar"></img>
              <div className="Banner-text">
                <Typing hideCursor>
                  <Typing.Speed ms={75} />
                  <h1>Full stack web developer</h1>
                </Typing>
                <p>
                  JavaScript | TypeScript | React js | React Hooks | Redux |
                  GitHub/Git | Node Js | Mongo DB | Vue | HTML5/CSS3/Bootstrap |
                  Jquery | Figma
                </p>
                <div className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/nagi-reddy-62594aba/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a
                    href="https://github.com/nagireddy1234"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-github-square"></i>
                  </a>
                  <a
                    href="https://www.freecodecamp.org/fcccaeadb8a-c22c-4e63-ab09-9dabf3b81f78"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-free-code-camp"></i>
                  </a>
                  <a
                    href="https://stackoverflow.com/users/9988717/nagi?tab=profile"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fa fa-stack-overflow"></i>
                  </a>

                  <a
                    href="mailto:nagireddy.panditi@gmail.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>
            </Cell>
          </BouncyDiv>
        </Grid>
      </div>
    );
  }
}
export default Landing;
