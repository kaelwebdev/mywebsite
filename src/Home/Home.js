import React, { Component } from 'react';
import './Home.css';
import imgKael from '../assets/img_kael.png';
import { useForm, ValidationError } from '@formspree/react';


function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqrlod");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="contactForm">
      <label htmlFor="email">
        Your Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder="a little message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

export default class Home extends Component {
  render() {
    return (
      <>
        <header className="breadCrumbs">
            <h2>./Home</h2>
          </header>
          <section className="AboutMe">
            <h2>About Me</h2>
            <img src={imgKael} className="imgKael" alt="image of myself" />
            <div className="socialMedia">
              <a href="https://www.linkedin.com/in/kaelwebdev/"><img className="socialMedia_icon" alt="linkedIn" src="" /></a>
              <a href="https://github.com/kaelwebdev"><img className="socialMedia_icon" alt="Github" src="" /></a>
              <a href="https://twitter.com/kaelwebdev"><img className="socialMedia_icon" alt="Twitter" src="" /></a>
            </div>
            <p>
              Hi! My name is Carlos Daniel Cortez, but you can call me Kael. I am Mulimedia Engineer, Software Engineer, and Full Stack Web Developer.
            </p>
            <p>
              I am passionate about everything related to web development. And I like the frontend and the backend alike.
            </p>
            <div className="tags">
              <span className="tag is-light">React</span>
              <span className="tag is-light">Angular</span>
              <span className="tag is-light">NodeJS</span>
              <span className="tag is-light">Javascript</span>
              <span className="tag is-light">CSS</span>
              <span className="tag is-light">HTML</span>
              <span className="tag is-light">Typescript</span>
              <span className="tag is-light">DJango</span>
              <span className="tag is-light">Python</span>
              <span className="tag is-light">MongoDB</span>
              <span className="tag is-light">Firebase</span>
              <span className="tag is-light">Shell</span>
              <span className="tag is-light">C</span>
              <span className="tag is-light">C#</span>
              <span className="tag is-light">SQL</span>
              <span className="tag is-light">Express</span>
              <span className="tag is-light">Flask</span>
              <span className="tag is-light">Redis</span>
              <span className="tag is-light">Boostrap</span>
              <span className="tag is-light">Bulma</span>
              <span className="tag is-light">Figma</span>
              <span className="tag is-light">Unity</span>
              <span className="tag is-light">Matlab</span>
              <span className="tag is-light">Wordpress</span>
              <span className="tag is-light">Adobe</span>
              <span className="tag is-light">3DMax</span>
              <span className="tag is-light">PHP</span>
              <span >and more...</span>
            </div>
          </section>
          <section className="Portfolio">
            <h1>Portfolio </h1>
            <p>I present you some of my projects. You can change the display mode (table/cards)</p>
            <div className="Portafiloio_tableMode"></div>
            <div className="Portafiloio_cardMode"></div>
          </section>
          <section className="myCurriculumVitae">
            <h2>My CV (Curriculum Vitae)</h2>
            <a href="www.google.com">see my resume</a>
            <a href="www.google.com">Download my resume</a>
            <p> Do not forget to check the update date of the document</p>
          </section>
          <section className="Contact">
            <h2>Contact</h2>
            <p>
              For security reasons i do not show my email and phone number. But if you check my CV there you can find that data.
            </p>
            <p>
              You can also send me an email directly using this form:
            </p>
            <div className="contentForm">
              <ContactForm />
            </div>
          </section>
      </>
    )
  }
}

