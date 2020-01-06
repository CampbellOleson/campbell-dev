import React from "react";
import AboutMe from "./attributes/AboutMe";
import Experience from "./attributes/Experience";
import Projects from "./attributes/Projects";
import Skills from "./attributes/Skills";
import Education from "./attributes/Education";
import Contact from "./attributes/Contact";
import Resume from "../assets/skills/Resume.pdf";

class Topper extends React.Component {
  constructor(props) {
    super(props);
    this.renderable = this.renderable.bind(this);
    this.assignRender = this.assignRender.bind(this);
    this.contactBubbles = this.contactBubbles.bind(this);
    this.state = {
      active: 1
    };
  }

  assignRender(e, n) {
    const buttons = document.getElementsByClassName("top-nav-button");
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove("top-nav-active");
    }
    e.target.classList.add("top-nav-active");
    this.setState({
      active: n
    });
  }

  renderable() {
    switch (this.state.active) {
      case 1: {
        return <AboutMe />;
      }
      case 2: {
        return <Experience />;
      }
      case 3: {
        return <Projects />;
      }
      case 4: {
        return <Skills />;
      }
      case 5: {
        return <Education />;
      }
      case 6: {
        return <Contact />;
      }
      default: {
        return <AboutMe />;
      }
    }
  }

  contactBubbles() {
    return (
      <div className="contact-topper-container">
        <a href={Resume}>
          <div id="resume" className="contact-topper">
            <p>
              <strong>SEE RESUME</strong>
            </p>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/campbell-oleson-5a41a2166/">
          <div id="linkedin-bubble" className="contact-topper" />
        </a>
        <a href="https://github.com/CampbellOleson">
          <div id="git-bubble" className="contact-topper" />
        </a>
        <a href="https://angel.co/campbell-oleson">
          <div id="angel-bubble" className="contact-topper" />
        </a>
        <a href="mailto: campbellsoleson@gmail.com">
          <div id="gmail-bubble" className="contact-topper" />
        </a>
      </div>
    );
  }

  render() {
    return (
      <div id="main">
        <div id="topper">
          <div className="banner-photo" />
          <div className="floatbox">
            <span>Campbell Oleson</span>
            <p>Full-stack software engineer</p>
          </div>
          <div className="profile-photo" />
          {this.contactBubbles()}
          <div className="top-nav">
            <div
              className="top-nav-button top-nav-active"
              onClick={e => this.assignRender(e, 1)}
            >
              About me
            </div>
            <div
              className="top-nav-button"
              onClick={e => this.assignRender(e, 2)}
            >
              Experience
            </div>
            <div
              className="top-nav-button"
              onClick={e => this.assignRender(e, 3)}
            >
              Projects
            </div>
            <div
              className="top-nav-button"
              onClick={e => this.assignRender(e, 4)}
            >
              Skills
            </div>
            <div
              className="top-nav-button"
              onClick={e => this.assignRender(e, 5)}
            >
              Education
            </div>
            <div
              className="top-nav-button"
              onClick={e => this.assignRender(e, 6)}
            >
              Contact
            </div>
          </div>
        </div>
        <div id="mount">{this.renderable()}</div>
      </div>
    );
  }
}

export default Topper;
