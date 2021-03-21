import React, { Component, useEffect, useState } from 'react';
import './Home.css';
import imgKael from '../assets/img_kael.png';
import { useForm, ValidationError } from '@formspree/react';
import { FaGithub, FaLinkedin, FaTwitter, FaExternalLinkAlt } from "react-icons/fa";


function ContactForm() {
  const [state, handleSubmit] = useForm("mbjqrlod");
  if (state.succeeded) {
    return <article class="message is-info">
    <div class="message-header">
      <p>Info</p>
    </div>
    <div class="message-body">
      Message sent
    </div>
  </article>;
  }
  return (
    <form onSubmit={handleSubmit} className="contactForm" >
      <label htmlFor="email">
        Your Email Address
      </label>
      <input className="input is-link"
        id="email"
        type="email"
        name="email"
        placeholder="example@hotmail.com"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="message">
        Message
      </label>
      <textarea className="textarea is-info"
        id="message"
        name="message"
        placeholder="a little message"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <div className="g-recaptcha" data-sitekey="6LdBG4kaAAAAAHzf-hUuK1yZ7UZvu-CoYtabC17N"></div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const onScroll = () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll)
  }, []);
  return (<progress className="progress is-small stickyBar" value={scrollTop} max="100"></progress>);
}


export default class Home extends Component {

  render() {
    return (
      <>
        <header className="breadCrumbs">
          <h2>./Home</h2>
        </header>
        <ScrollIndicator />
        <section className="AboutMe">
          <h2>About Me</h2>
          <img src={imgKael} className="imgKael" />
          <div className="socialMedia">
            <a target="_blank" href="https://www.linkedin.com/in/kaelwebdev/">
              <FaLinkedin title="LinkedIn" className="socialMedia__icon" /></a>
            <a target="_blank" href="https://github.com/kaelwebdev">
              <FaGithub title="Github" className="socialMedia__icon" /></a>
            <a target="_blank" href="https://twitter.com/kaelwebdev">
              <FaTwitter title="Twitter" className="socialMedia__icon" /></a>
          </div>
          <p>
            Hi! My name is Carlos Daniel Cortez, but you can call me Kael. I am Mulimedia Engineer, 
            Software Engineer, and Full Stack Web Developer.
          </p>
          <p>
            I am passionate about everything related to web development. And I like the frontend and 
            the backend alike.
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
        <section className="Portfolio section is-medium">
          <h1>Portfolio </h1>
          <p>I present you some of my projects.</p>
          <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
              <thead>
                <tr>
                  <th><abbr title="Position">Idx</abbr></th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Screenshot/video</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th><abbr title="Position">Idx</abbr></th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Screenshot/video</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>
                    <a target="_blank" href="https://github.com/kaelwebdev/Oharasis" title="Oharasis">
                      Oharasis
                    </a>
                  </td>
                  <td>Web platform for displaying and monitoring student competences and skills.</td>
                  <td className="has-text-centered"><a target="_blank"
                    href="https://drive.google.com/file/d/1rSq6nrCUELe-vkVTu7MbEuZaNs648pJI/view"
                    title="sample"><FaExternalLinkAlt /></a>
                  </td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>
                    <a target="_blank" href="https://github.com/JamesPagani/MyCoachApp"
                    title="My Coach App">
                    My Coach App</a>
                  </td>
                  <td>Web platform for physical trainers and their clients. Manage or watch your
                     routines.</td>
                  <td className="has-text-centered">
                    <a target="_blank" href="https://drive.google.com/uc?export=view&id=12R-xLXRUq0O
                    6ghuoycoEsuSMYSMQdtxR" alt="screenshot App" width="300" title="sample">
                      <FaExternalLinkAlt /></a></td>
                </tr>
                <tr>
                  <th>3</th>
                  <td><a target="_blank" href="https://github.com/kaelwebdev/AirBnB_clone" 
                    title="My Coach App">AirBnB clone - Console</a>
                  </td>
                  <td>Replica of the famous AirBnb application. It consists of 5 phases. 
                    In this first phase, a system was created to manage the application through 
                    the command terminal.</td>
                  <td className="has-text-centered"></td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Secure Chat</td>
                  <td>Encrypted chat for internal company use.</td>
                  <td className="has-text-centered"></td>
                </tr>
                <tr>
                  <th>5</th>
                  <td><a target="_blank" href="https://github.com/JamesPagani/3D-web-object-grapher"
                    title="My Coach App">3D Object Grapher</a></td>
                  <td>Small projects that i did a long time ago using graphics computing.</td>
                  <td className="has-text-centered"><a target="_blank" 
                  href="https://drive.google.com/uc?export=view&id=1gtMAX4jFLV6n8jt-6F65SYHVSq15YqF_" 
                  title="sample"><FaExternalLinkAlt /></a></td>
                </tr>
                <tr>
                  <th>6</th>
                  <td><a target="_blank" href="https://github.com/kaelwebdev/MediaPlayer" 
                    title="My Coach App">Media player</a></td>
                  <td>My own media player using javascript</td>
                  <td className="has-text-centered"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="myCurriculumVitae section is-medium">
          <h2>My CV (Curriculum Vitae)</h2>
          <a target="_blank"
            href="https://www.figma.com/proto/8D9aFE2LFb9D2V1QqGgqcL/CV?node-id=1:3&scaling=min-zoom">
            See my resume </a>
          <a target="_blank"
            href="https://drive.google.com/file/d/1VT0jILkG0_TLkjeWHV8HIwCcf4ikDoPl/view?usp=sharing">
            Download my resume </a>
          <p> Do not forget to check the update date of the document.</p>
        </section>
        <section className="Contact section is-medium">
          <h2>Contact</h2>
          <p>
            For security reasons i do not show my email and phone number. But if you check my CV 
            there you can find that data.
            </p>
          <p className="mb-6">
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

