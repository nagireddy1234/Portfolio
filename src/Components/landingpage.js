import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class Landing extends Component{
render(){
  return(
    <div style={{width:'100%' , margin:'auto', overflow:'auto',scrolling:'no'}}>
    <Grid className="landing-grid">
        <Cell col={12}>
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <div className="Banner-text">
        <h1>Full Stack Web Developer</h1>
        <hr/>
        <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB </p>
        <div className="social-icons">
        <a href="https://www.linkedin.com/in/nagi-reddy-62594aba/"   rel="noopener noreferrer" target="_blank">
        <i class="fa fa-linkedin-square"></i>
        </a>
        <a href="https://github.com/nagireddy1234"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-github-square"></i>
        </a>
        <a href="https://www.facebook.com/alwayssmile1234"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-facebook-square"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCkCmU8W5bTscdW1NvZW1yvw?view_as=subscriber"  rel="noopener noreferrer" target="_blank">
        <i class="fa fa-youtube-square"></i>
        </a>
        </div>
        </div>
        </Cell>
        </Grid>
    </div>
  );
}
}
export default Landing;