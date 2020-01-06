import React from "react";

class Skills extends React.Component {
  render() {
    return (
      <div id="skills" className="mount-background">
        <div className="header">
          <strong>Skills</strong>
        </div>
        <div className="skills-container">
          <div className="skills-container-sub">
            <div id="img-rails" className="skill-bubble" />
            <div id="img-node" className="skill-bubble" />
            <div id="img-react" className="skill-bubble" />
            <div id="img-redux" className="skill-bubble" />
            <div id="img-apollo" className="skill-bubble" />
            <div id="img-aws" className="skill-bubble" />
          </div>
          <div className="skills-container-sub">
            <div id="img-js" className="skill-bubble" />
            <div id="img-ruby" className="skill-bubble" />
            <div id="img-docker" className="skill-bubble" />
            <div id="img-git" className="skill-bubble" />
            <div id="img-webpack" className="skill-bubble" />
            <div id="img-post" className="skill-bubble" />
            <div id="img-mongo" className="skill-bubble" />
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
