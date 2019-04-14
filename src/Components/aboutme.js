import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import{List,ListItem,ListItemContent} from 'react-mdl';

class About extends Component{
render(){
  return(
    <div className="aboutme-container">
     <Grid className="name-container" style={{}}>
       
        <Cell className="name-container-1" col={6}>
        <h2> Nagi reddy </h2>
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p> 
        </Cell>

        <Cell className="name-container-2" col={6}>

        <h2>Contact Me </h2>
        <hr/>

        <List>
  <ListItem>
    <ListItemContent style={{fontSize:"24px", fontFamily:"Anton", padding:'0px 0px 0.8em 2em'}}> <i class="fa fa-phone-square"  style={{fontSize:"36px"}} ></i>(48) 579162125 </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:"24px", fontFamily:"Anton", padding:'0px 0px 0.8em 2em'}}> <i class="fa fa-fax" style={{fontSize:"36px"}}> </i>(47) 40563717</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:"24px", fontFamily:"Anton", padding:'0px 0px 0.8em 2em'}}> <i className="fa fa-envelope" style={{fontSize:"36px"}}></i>Nagireddy.panditi@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize:"24px", fontFamily:"Anton", padding:'0px 0px 0.8em 2em'}}> <i class="fa fa-skype" style={{fontSize:"36px"}}></i>Nagireddy123451</ListItemContent>
  </ListItem>
      </List>
        

        </Cell>
        
    </Grid>
    </div>
  );
}
}
export default About;