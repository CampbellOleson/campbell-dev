import React from "react";
import rcIndexImg from "../../assets/rc_index.png";
import acAristImg from "../../assets/ac_artist.png";
import fhSplashImg from "../../assets/fh_splash.png";
import mixr from "../../assets/mixr.png";
// import rcSplashImg from "../../assets/rc_splash.png";
// import fhFriendsImg from "../../assets/fh_friends.png";
// import acUploadImg from "../../assets/ac_upload.png";

const RipCamp = () => (
  <section id="ripcamp" className="project-container">
    <div className="project-content-inner">
      <div>
        <a href="https://ripcamp.herokuapp.com" className="header">
          RipCamp
        </a>
        <p className="project-subheader">Find the best surf</p>
      </div>
      <section className="project-content-container">
        <div className="project-text-content">
          <p>
            RipCamp is a map-based interface for finding and locating the best
            surf, created with ExpressJS, MongoDB, and React / Redux.
          </p>
          <ul className="features-list">
            <li>Map-based interface integrates Google Maps API</li>
            <li>
              Boundaries-based query system to fetch surf spots from database
            </li>
            <li>AWS photo hosting allowing for greater scalability</li>
            <li>Visually fluid and seamless UX/UI</li>
          </ul>
        </div>
      </section>
    </div>
    <div className="project-image-wrapper">
      <img src={rcIndexImg} alt="Home page" id="rc1" className="img-dems" />
    </div>
    {/* <div className="image-gallery">
      <img className="gallery-img" src={rcSplashImg} alt="Splash page" />
      <img className="gallery-img" src={rcSplashImg} alt="Splash page" />
      <img className="gallery-img" src={rcSplashImg} alt="Splash page" />
    </div> */}
  </section>
);

const Fishhook = () => (
  <section id="fishhook" className="project-container">
    <div>
      <div>
        <a href="https://fish-hook.herokuapp.com/#/" className="header">
          Fishhook
        </a>
        <p className="project-subheader">
          Social media for fishing enthusiasts
        </p>
      </div>
      <section className="project-content-container">
        <div className="project-text-content">
          <p>
            Fishhook is a social media app where fishing enthusiasts can connect
            with eachother online. Fishhook is built with Ruby on Rails and
            PostgreSQL on the backend, and React / Redux on the front end.
          </p>
          <ul className="features-list">
            <li>
              "Friendships" backend association system that leverages Rails ORM
              to create friend requests and friendships between users.
            </li>
            <li>Feed component allowing users to upload photo/text content</li>
            <li>
              Feed-filtering system leveraging friendships associations to
              display content that is relevant to the current user.
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div className="project-image-wrapper">
      <img src={fhSplashImg} alt="splash page" id="fh1" className="img-dems" />
    </div>
  </section>
);

const AmpCamp = () => (
  <section id="ampcamp" className="project-container">
    <div>
      <div>
        <a href="https://ampcamp.herokuapp.com/#/" className="header">
          AmpCamp
        </a>
        <p className="project-subheader">
          Heavy-metal themed music-sharing platform
        </p>
      </div>
      <section className="project-content-container">
        <div className="project-text-content">
          <p>
            AmpCamp is a music platform where users can discover new music and
            upload their own albums, created with ExpressJS, MongoDB, Apollo
            GraphQL, and React.
          </p>
          <ul className="features-list">
            <li>
              Searchbar and dynamic dropdown lets users to search for albums /
              artists and displays links to suggested items.
            </li>
            <li>
              Leverages AWS for photo and audio file storage, allowing for
              scalability.
            </li>
            <li>
              Dynamic UX/UI allowing users to listen to songs as they navigate
              the app.
            </li>
          </ul>
        </div>
      </section>
    </div>
    <div className="project-image-wrapper">
      <img src={acAristImg} alt="splash page" id="fh1" className="img-dems" />
    </div>
  </section>
);

const MIXR = () => (
  <section id="MIXR" className="project-container">
    <div>
      <div>
        <a href="https://ampcamp.herokuapp.com/#/" className="header">
          MIXR
        </a>
        <p className="project-subheader">
          An Audio EQ / Looper, created with regular JavaScript.
        </p>
      </div>
      <section className="project-content-container">
        <div className="project-text-content">
          <ul className="features-list">
            <li>
              Records audio and stores files in the "audio bank" for later use.
            </li>
            <li>
              Base64 encodes audio files to strings to keep them in local
              storage. Decodes the files for playback.
            </li>
            <li>
              "Track stacking" allows users to record multiple tracks and play
              them back in unison.
            </li>
            <li>Dynamic playback and volume control on tracks.</li>
          </ul>
        </div>
      </section>
    </div>
    <div className="project-image-wrapper">
      <img src={mixr} alt="MIXR main" id="fh1" className="img-dems" />
    </div>
  </section>
);

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="mount-background">
        {/* <div className="header">
          <strong>Projects</strong>
        </div> */}
        {RipCamp()}
        {Fishhook()}
        {AmpCamp()}
        {MIXR()}
      </div>
    );
  }
}

export default Projects;
