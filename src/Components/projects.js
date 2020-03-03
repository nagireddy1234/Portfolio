import React, { Component } from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }
    togglecategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className=" d-flex justify-content-around flex-container projects-container" >
                    <div className="card-items">
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://appsbuilders.org/wp-content/uploads/2019/08/1566113415_maxresdefault-1140x641.jpg) center / cover' }}>E-commerce Project</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <a href="https://github.com/nagireddy1234/E-commerce_capstoneProject" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href=" https://nagireddy1234.github.io/E-commerce_capstoneProject/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={1} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}> ReactJs Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={2} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}> ReactJs Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK.png) center / cover' }}> ReactJs Project #4</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="flex-container" >
                    <div className="card-items" style={{ margin: "2em 2em" }} >
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover' }}> AngularJs Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }} >
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover' }}> AngularJs Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }} >
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png) #555 center / cover' }}> AngularJs Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                             </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>
                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div> </div>

            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className="flex-container" >
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover' }}> VueJs Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover' }}> VueJs Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover' }}> VueJs Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" style={{ margin: "2em 2em" }}>
                        <Card shadow={0} style={{ width: '330px', margin: 'auto' }}>
                            <CardTitle style={{ color: '#fff', height: '250px', background: 'url(https://cdn-images-1.medium.com/max/2600/1*nfvapd86apvGH-hNBYkYuw.png) center / cover' }}> VueJs Project #4</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
      </CardText>
                            <CardActions border style={{ textAlign: "center" }}>
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div> <h1>This is Mongodb</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>REACT JS</Tab>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>MERN STACK</Tab>
                    <Tab>HTML/CSS/BOOTSTRAP</Tab>
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