import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl';
import { BouncyDivRight } from './Animations/animation';
import MyDetails from './Reusable/NameDetails';
class About extends Component {

  render() {
    return (
      <div className="contact-container container">
        <div className="main-name-container">
          <Grid className="name-container" >
            <MyDetails />
            <Cell className="name__container" col={6}>
              <BouncyDivRight> <h2 className="contact-details">Contact Datails </h2>
                <List>
                  <ListItem>
                    <ListItemContent className="ListItemContent"> <a href="tel:+372-53950665" target="_blank" rel="noopener noreferrer"> <i className="fa fa-phone-square" ></i>(372) 53950665 </a> </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="ListItemContent" ><a href="mailto:nagireddy.panditi@gmail.com" rel="noopener noreferrer" target="_blank"  > <i className="fa fa-envelope" id="special-item"></i>Nagireddy.panditi@gmail.com</a></ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="ListItemContent"><a href="https://wa.me/4740563717" target="_blank" rel="noopener noreferrer"> <i className="fa fa-whatsapp"></i>(47) 40563717 </a></ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="ListItemContent"><a href="https://www.facebook.com/alwayssmile1234" rel="noopener noreferrer" target="_blank"> <i className="fa fa-facebook-square"></i> Naga Reddy</a>
                    </ListItemContent>
                  </ListItem>
                  <ListItem>
                    <ListItemContent className="ListItemContent"> <a href="skype:nagireddy123451?call"> <i className="fa fa-skype" ></i>Nagireddy123451</a></ListItemContent>
                  </ListItem>
                </List> 
              </BouncyDivRight>
            </Cell>
          </Grid>    
        </div>
      </div>
    );
  }
}
export default About;