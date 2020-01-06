import React from "react";

class Education extends React.Component {
  render() {
    return (
      <div id="education" className="mount-background">
        <div className="header">
          <strong>Education</strong>
        </div>
        <div className="experience-box-wrapper">
          <div className="experience-box">
            <div className="edu-info-header">
              <div className="experience-bubble d-sob" />
            </div>
            <div>
              <p>Aug 2018 - Apr 2019</p>
              <header className="eduh1">
                <strong>David Eccles School of Business</strong>
              </header>
            </div>
            <ul className="experience-list">
              <li>Studied pre-business</li>
              <li>
                Left in good academic standing to pursue software development
              </li>
            </ul>
          </div>
          <div className="experience-box">
            <div className="edu-info-header">
              <p>May 2019 - Oct 2019</p>
              <header className="eduh1">
                <strong>App Academy</strong>
              </header>
              <div className="experience-bubble aa" />
            </div>
            <ul className="experience-list">
              <li>
                1000+ hour software engineering course with 3% acceptance rate
              </li>
              <li>
                Studied objected oriented design in Ruby and modern web
                development with Rails, Javascript, React, Redux, SQL, GraphQL,
                MERN, test-driven design, algorithms, and design patterns.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
