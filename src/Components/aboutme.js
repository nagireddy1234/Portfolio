import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';

class About extends Component{
render(){
  return(
    <div className="aboutme-container">
     <Grid className="name-container" >
       
        <Cell className="name-container-1" col={6}>
        <h2> Nagi reddy </h2>
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <p > Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals </p> 
        </Cell>

        <Cell className="name-container-2" col={6}>

        <h2> Technology Summary </h2>
        <div>
        <p> <span className="skillset">Programming Languages Skills: </span> JavaScript, React Js, Redux, Web-components, SPA,, Node JS, Express, Mongo DB; CSS3, Sass; HTML5; BootStrap; WordPress; Git, GitHub;</p>
        <p><span className="skillset"> Other Skills:</span> Responsive Design, Mobile First UX, ES6, ES7, Jira, Bitbucket, Github, Altassian Bamboo, Babel js, NPM, Webpack, Enzyme, Jest, Gulp.js, Firebase.</p>
        <p><span className="skillset">Systems: </span> Mac OS X </p>
        <p><span className="skillset">Digital Marketing Knowledge:</span> SEO, Google Ads, FaceBook Ads, Twitter Ads, Instagram Ads, Youtube, Blog, Research;</p>
        </div>
        </Cell>
        
    </Grid>
    </div>
  );
}
}
export default About;