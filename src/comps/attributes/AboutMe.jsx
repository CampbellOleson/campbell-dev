import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div id="about-me" className="mount-background">
        <span className="header">
          <strong>About Me</strong>
        </span>
        <section>
          I’m a business-student-turned-software
          developer residing in Salt Lake City, Utah. I’ve spent the last nine
          months building full-stack web applications and sharpening my skills
          as a software engineer.
        </section>
        <section>
          I discovered my passion for software in business school, where I
          designed some app prototypes for an entrepreneurship project. I’ve
          always loved building things, from Lego contraptions to software
          programs, and I derive immense satisfaction from seeing the fruits of
          my labors.
        </section>
        <section>
          I am a process-oriented thinker, and I like to understand how things
          work. When I’m coding, I always go the extra mile to learn how things
          operate under the hood. I have an aptitude for mentally modeling how a
          piece of code will behave before I implement it, and I take pride in
          writing programs as elegantly as I can.
        </section>
        <section>
          When I’m not coding I spend my time playing guitar, reading books,
          practicing martial arts, listening to lectures on science and
          philosophy, and exploring the rocky-mountain wilderness.
        </section>
        <section>
          I’m looking forward to a fruitful career on the forefront of
          technological advancement, and I’m passionate about the opportunity to
          positively impact humanity through my code-based contributions.
        </section>
      </div>
    );
  }
}

export default AboutMe;
