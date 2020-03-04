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
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title">
                            E-commerce Project
                            </CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action">
                                <a href="https://github.com/nagireddy1234/E-commerce_capstoneProject" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href=" https://nagireddy1234.github.io/E-commerce_capstoneProject/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>
                            <CardMenu className="card-menu">
                            <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                    <div className="card-items">
                        <Card shadow={1} className="card">
                            <CardTitle className="card-title" > ReactJs Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action">
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" >
                        <Card shadow={2} className="card">
                            <CardTitle className="card-title" > ReactJs Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action" >
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items">
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> ReactJs Project #4</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action">
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="d-flex justify-content-around flex-container projects-container" >
                    <div className="card-items" >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> AngularJs Project #1</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action">
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items"  >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> AngularJs Project #2</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border className="card-action">
                                <Button colored>GITHUB</Button>

                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items"  >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title" > AngularJs Project #3</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                             </CardText>
                            <CardActions border className="card-action">
                                <Button colored>GITHUB</Button>
                                <Button colored>LIVE DEMO</Button>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div> </div>

            )
        }
        else if (this.state.activeTab === 2) {
            return (
                <div className=" d-flex justify-content-around flex-container projects-container" >
                    <div className="card-items" >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> Ntvk Project</CardTitle>
                            <CardText>
                                This website is made up of using Bootstrap,jquery,HTML5 and CSS3.
                            </CardText>
                            <CardActions border className="card-action">
                                <a href="https://github.com/nagireddy1234/Ntvk" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href="http://www.ntvk.com.pl/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> merkuriusz Project </CardTitle>
                            <CardText>
                                It is an advertising website. It is made up of using Bootstrap,jquery,HTML5 and CSS3
                            </CardText>
                            <CardActions border className="card-action">
                                <a href="https://github.com/nagireddy1234/Merkuriusz" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href="http://merkuriusz.pl/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title">Councillor Project </CardTitle>
                            <CardText>
                                Its simple portfolio and it is made up of using Bootstrap,jquery and aimation
                            </CardText>
                            <CardActions border className="card-action" >
                                <a href="https://github.com/nagireddy1234/raflkmal" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href=" https://nagireddy1234.github.io/raflkmal/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>

                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                    <div className="card-items" >
                        <Card shadow={0} className="card">
                            <CardTitle className="card-title"> Lawyer Project</CardTitle>
                            <CardText>
                                This is my first website made up of using Bootstrap , jquery and CSS.
                             </CardText>
                            <CardActions border className="card-action">
                                <a href="https://github.com/nagireddy1234/Lawyer" rel="noopener noreferrer" target="_blank"> <Button colored>GITHUB</Button> </a>
                                <a href="https://nagireddy1234.github.io/Lawyer/" rel="noopener noreferrer" target="_blank"> <Button colored>LIVE DEMO </Button> </a>
                            </CardActions>
                            <CardMenu className="card-menu">
                                <IconButton name="share" />
                            </CardMenu>
                        </Card> </div>
                </div>
            )
        }
        else if (this.state.activeTab === 3) {
            return (
                <div className=" d-flex justify-content-around flex-container projects-container"> 
                <h1>This is Mongodb</h1>
                </div>
            )
        }
    }
    render() {
        return (
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>REACT JS</Tab>
                    <Tab>JAVASCRIPT</Tab>
                    <Tab>HTML/CSS/BOOTSTRAP</Tab>
                    <Tab>MERN STACK</Tab>
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