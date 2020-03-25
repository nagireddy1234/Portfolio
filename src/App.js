import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout>
        <Header className= 'header-color' title={<Link className="header-link" to="/"> Nagi Reddy</Link>} scroll>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">CV</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header> 
        <Drawer title={<Link className="drawer-link" to="/">Nagi Reddy</Link>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume">CV</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>   
    );
  }
}

export default App;
