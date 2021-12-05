import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Navbar from "./Components/Pages/Navbar";
import { Link } from "react-router-dom";
import ParticlesContainer from "./Components/Reusable/ParticlesContainer";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  togglechange = () => {
    let closeDrawer = document.querySelector(".mdl-layout__drawer");
    let closeDrawerButton = document.querySelector(
      ".mdl-layout__drawer-button"
    );
    let closeObfuscator = document.querySelector(".mdl-layout__obfuscator");
    closeDrawer.classList.remove("is-visible");
    closeObfuscator.classList.remove("is-visible");
    closeDrawer.removeAttribute("aria-hidden");
    closeDrawer.setAttribute("aria-hidden", false);
    closeDrawerButton.setAttribute("aria-hidden", true);
  };
  addActiveClass = () => {
    var links = document.getElementsByClassName("mdl-navigation__link");
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
      });
    }
  };
  render() {
    return (
      <BrowserRouter>
        <div
          className="demo-big-content"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <ParticlesContainer />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Layout>
              <Header
                className="header-color"
                title={
                  <Link className="header-link" to="/">
                    {" "}
                    Nagi Reddy
                  </Link>
                }
                scroll
              >
                <Navigation>
                  <Link to="/about" onClick={this.addActiveClass}>
                    About
                  </Link>
                  <Link to="/projects" onClick={this.addActiveClass}>
                    Projects
                  </Link>
                  <Link to="/cv" onClick={this.addActiveClass}>
                    CV
                  </Link>
                  <Link to="/contact" onClick={this.addActiveClass}>
                    Contact
                  </Link>
                </Navigation>
              </Header>
              <Drawer
                title={
                  <Link className="drawer-link" to="/">
                    Nagi Reddy
                  </Link>
                }
              >
                <Navigation>
                  <Link to="/about" onClick={this.togglechange}>
                    About
                  </Link>
                  <Link to="/projects" onClick={this.togglechange}>
                    Projects
                  </Link>
                  <Link to="/cv" onClick={this.togglechange}>
                    CV
                  </Link>
                  <Link to="/contact" onClick={this.togglechange}>
                    Contact
                  </Link>
                </Navigation>
              </Drawer>
              <Content>
                <div className="page-content" />
                <Navbar />
              </Content>
            </Layout>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
