import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <div id="experience" className="mount-background">
        <div className="header">
          <strong>Experience</strong>
        </div>
        <div className="experience-box-wrapper">
          <div className="experience-box">
            <div className="experience-info-header">
              <span>Cyrpus Federal Credit Union</span>
              <p>Jul 2018 - Oct 2018</p>
              <div className="experience-bubble b-cyp" />
            </div>
            <header>
              <strong>Financial Services Representative</strong>
            </header>
            <ul className="experience-list">
              <li>Used banking software to do transactions for members.</li>
              <li>Used CRM software to look up member information.</li>
              <li>
                Helped members determine which services best suit their
                financial needs.
              </li>
            </ul>
          </div>
          <div className="experience-box">
            <div className="experience-info-header">
              <span>Canopy Tax Inc.</span>
              <p>Oct 2018 - Feb 2018</p>
              <div className="experience-bubble b-can" />
            </div>
            <header>
              <strong>Tax Intern</strong>
            </header>
            <ul className="experience-list">
              <li>
                Interpreted tax-form instructions and translated them into
                software logic (reference language based on Microsoft Excel
                functions) that automatically populated fields on tax forms.
              </li>
              <li>
                Troubleshooted and corrected taxpayer E-file errors by reading
                over XML files and tracking down bugs in reference logic.
              </li>
              <li>
                Conducted extensive manual quality assurance of tax prep
                software by running a variety of tax scenarios through software
                and testing against expected outputs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Experience;
