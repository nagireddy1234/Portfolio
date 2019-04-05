import React,{Component} from 'react';
import {Tabs,Tab,Card,CardTitle,CardText,CardActions,Button,CardMenu,IconButton} from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    togglecategories(){
      if(this.state.activeTab===0){
        return (
          <div className="flex-container" > 
          <div className="card-items" style={{margin:"2em 2em"}}>
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div> 
<div className="card-items" style={{margin:"2em 2em"}}> 
<Card shadow={1} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div> 
<div className="card-items" style={{margin:"2em 2em"}}>
<Card shadow={2} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div> 
<div className="card-items" style={{margin:"2em 2em"}}>  
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #4</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> 
 </div>
 <div className="card-items" style={{margin:"2em 2em"}}>  
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #5</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> 
 </div>
 <div className="card-items" style={{margin:"2em 2em"}}>  
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover'}}> ReactJs Project #6</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> 
 </div>
          </div>
        )
      } else if(this.state.activeTab===1){
        return (
          <div className="flex-container" > 
          <div className="card-items" style={{margin:"2em 2em"}} > 
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover'}}> AngularJs Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div>
<div className="card-items" style={{margin:"2em 2em"}} >
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover'}}> AngularJs Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div>
<div className="card-items" style={{margin:"2em 2em"}} >
<Card shadow={0} style={{width: '330px', margin: 'auto'}}>
    <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover'}}> AngularJs Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border style={{textAlign:"center"}}>
        <Button colored>GITHUB</Button>
        <Button colored>CODE OPEN</Button>
        <Button colored>LIVE DEMO</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card> </div> </div>

        )
      }
        else if(this.state.activeTab===2){
          return (
            <div className="flex-container" > 
            <div className="card-items" style={{margin:"2em 2em"}}>
  <Card shadow={0} style={{width: '330px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover'}}> VueJs Project #1</CardTitle>
      <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border style={{textAlign:"center"}}>
          <Button colored>GITHUB</Button>
          <Button colored>CODE OPEN</Button>
          <Button colored>LIVE DEMO</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card> </div> 
  <div className="card-items" style={{margin:"2em 2em"}}>
  <Card shadow={0} style={{width: '330px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover'}}> VueJs Project #2</CardTitle>
      <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border style={{textAlign:"center"}}>
          <Button colored>GITHUB</Button>
          <Button colored>CODE OPEN</Button>
          <Button colored>LIVE DEMO</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card> </div> 
  <div className="card-items" style={{margin:"2em 2em"}}>
  <Card shadow={0} style={{width: '330px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover'}}> VueJs Project #3</CardTitle>
      <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border style={{textAlign:"center"}}>
          <Button colored>GITHUB</Button>
          <Button colored>CODE OPEN</Button>
          <Button colored>LIVE DEMO</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card> </div> 
  <div className="card-items" style={{margin:"2em 2em"}}>
  <Card shadow={0} style={{width: '330px', margin: 'auto'}}>
      <CardTitle style={{color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover'}}> VueJs Project #4</CardTitle>
      <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
      <CardActions border style={{textAlign:"center"}}>
          <Button colored>GITHUB</Button>
          <Button colored>CODE OPEN</Button>
          <Button colored>LIVE DEMO</Button>
      </CardActions>
      <CardMenu style={{color: '#fff'}}>
          <IconButton name="share" />
      </CardMenu>
  </Card> </div> 
  </div>
          )
      }
        else if(this.state.activeTab===3){
        return (
          <div> <h1>This is Mongodb</h1></div>
        )
    }
    }
    render() {
        return (
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>REACT</Tab>
                    <Tab>ANGULAR</Tab>
                    <Tab>VUEJS</Tab>
                    <Tab>MONGODB</Tab>
                </Tabs>
                <section>
                    <div className="project-grid"> 
                    {this.togglecategories()}
                    </div>
                </section>
            </div>    
        );
    }
}
export default Projects;