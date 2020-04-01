import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Navbar from './Components/Navbar';
import {Link} from 'react-router-dom';

class App extends Component {
     togglechange = ()=> {
        var x = document.getElementById("reddy");
        x.classList.remove("is-visible")
    }
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
        <Drawer title={<Link className="drawer-link" to="/">Nagi Reddy</Link>} id="reddy">
            <Navigation>
                <Link to="/aboutme" onClick={this.togglechange} >About Me</Link>
                <Link to="/projects" onClick={this.togglechange}>Projects</Link>
                <Link to="/resume"  onClick={this.togglechange} >CV</Link>
                <Link to="/contact" onClick={this.togglechange} >Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Navbar/>
        </Content>
    </Layout>
</div>   
    );
  }
}
export default App;
