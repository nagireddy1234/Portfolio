import React,{Component} from 'react';
import {Grid,Cell} from 'react-mdl';
import{List,ListItem,ListItemContent} from 'react-mdl';

class About extends Component{
render(){
  return(
    <div className="contact-container container">
      <div className="main-name-container">
     <Grid className="name-container" >
       
        <Cell className="name-container-1" col={6}>
        <h2> Nagi reddy </h2>
        <img src="https://yt3.ggpht.com/a-/AN66SAwBRJx2eUUyZvfkx8N4fK9M3Xn9vm-5Ow2Phg=s900-mo-c-c0xffffffff-rj-k-no" className="avatar-img" alt="avatar" ></img>
        <p >Results-oriented Front-end Developer dedicated to creating and optimizing interactive, user-friendly, and feature-rich websites. Leverage analytical skills and strong attention to detail in order to deliver original and efficient web solutions, provide technical knowledge and expertise, build new websites from start to finish, and successfully manage a team of other software professionals </p> 
        </Cell>

        <Cell className="name-container-2" col={6}>

        <h2 className="contact-details">Contact Datails </h2>
  
        <List>
  <ListItem>
    <ListItemContent className="ListItemContent"> <a href="tel:+372-53950665" target="_blank"> <i className="fa fa-phone-square" ></i>(372) 53950665 </a> </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent className="ListItemContent" ><a href="mailto:nagireddy.panditi@gmail.com"  rel="noopener noreferrer" target="_blank" > <i className="fa fa-envelope" id="special-item"></i>Nagireddy.panditi@gmail.com</a></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent className="ListItemContent"><a href="https://wa.me/4740563717" target="_blank"> <i className="fa fa-whatsapp"></i>(47) 40563717 </a></ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent className="ListItemContent"><a href="https://www.facebook.com/alwayssmile1234"  rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-square"></i> Naga Reddy</a>
      </ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent className="ListItemContent"> <a href="skype:nagireddy123451?call"> <i className="fa fa-skype" ></i>Nagireddy123451</a></ListItemContent>
  </ListItem>
      </List>
        </Cell>
        
    </Grid>
    </div>
    </div>
  );
}
}
export default About;