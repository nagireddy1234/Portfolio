import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';


class About extends Component{
render(){
  return(
    <div>
     <Grid className="name-container" style={{}}>
       
        <Cell className="name-container-1" col={6}>
        <h1> Nagi reddy </h1>
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <p style={{padding:"0px 10%"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> 
        </Cell>

        <Cell className="name-container-2" col={6}>
        <h1>Contact Me </h1>
        <hr/>

        </Cell>
        
    </Grid>
    </div>
  );
}
}
export default About;