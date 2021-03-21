import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';


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
          <Home/>
        </main>
        <Footer/>
      </div>
    );
  }
}
