import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import { MdNotificationsActive, MdNotifications } from "react-icons/md";

const listNotifications = [
  {id: 1, html: undefined, type: "default", value: "This website looks simple because it is under construction, i have hardly had time to work on this page."},
];

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listNotifications,
      displayNotification: false
    }
    this.handleDisplayNotifications = this.handleDisplayNotifications.bind(this);
    
  }

   handleDisplayNotifications() {
    this.setState({displayNotification: !this.state.displayNotification});
   }

  render() {

    return (
      <div className="App">
        <nav>
          { 
            <MdNotificationsActive onClick={this.handleDisplayNotifications} className="notificationIcon"/>
          }
          { this.state.displayNotification &&
            <ul className="notificationList">
              <li>
                <div className="notification is-info is-light">
                  <button className="delete" onClick={this.handleDisplayNotifications}></button>
                  {this.state.listNotifications[0].value}
                </div>
              </li>
            </ul>
          }
          
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
