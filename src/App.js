import React, { Component } from 'react';
import './App.css';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Navbar from './Components/Navbar';
import {Link} from 'react-router-dom';

class App extends Component {
    addActiveClass = () => {
        var x =document.getElementsByClassName('mdl-navigation__link');
        for (var i = 0; i < x.length; i++) {
            x[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
              current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
            });
  }
    }
  render()
   {
    return (
<div className="demo-big-content">
    <Layout>
        <Header className= 'header-color' title={<Link className="header-link" to="/"> Nagi Reddy</Link>} scroll>
            <Navigation>
                <Link to="/aboutme" onClick={this.addActiveClass}>About Me</Link>
                <Link to="/projects" onClick={this.addActiveClass}>Projects</Link>
                <Link to="/resume" onClick={this.addActiveClass}>CV</Link>
                <Link to="/contact" onClick={this.addActiveClass}>Contact</Link>
            </Navigation>
        </Header> 
        <Drawer title={<Link className="drawer-link" to="/">Nagi Reddy</Link>} id="reddy">
            <Navigation>
                <Link to="/aboutme" >About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/resume" >CV</Link>
                <Link to="/contact" >Contact</Link>
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
