import React, { Component } from 'react';
import './App.css';
import imgKael from '../assets/img_kael.png';
import Footer from '../Footer/Footer';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="App">
        <nav>
          <img className="notificationButton" alt="Notification Button" src="" />
          <ul>
            <li>
              This website looks simple because it is under construction, i have hardly had time to work on this page.
            </li>
          </ul>
        </nav>
        <header className="titleWebsite">
          <h1>Kael website</h1>
        </header>
        <main>
          <header className="breadCrumbs">
            <h2>/Home</h2>
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
              For security reasons I do not show my email and phone number. But if you check my CV there you can find that data.
            </p>
            <p>
              You can also send me an email directly using this form:
            </p>
            <form></form>
          </section>
        </main>
        <Footer/>
      </div>
    );
  }
}
