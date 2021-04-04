import React, { Component, lazy, Suspense } from 'react';
import './App.css';
const Banner = lazy(() => import(/* webpackPreload: true */ '../components/Banner/Banner'));
import banner from '../assets/banner.png';
const Home = lazy(() => import(/* webpackPreload: true */ '../Home/Home'));
const Footer = lazy(() => import(/* webpackPreload: true */ '../Footer/Footer'));
import { MdNotificationsActive, MdNotifications } from "react-icons/md";


const renderLoader = () => <button className="button is-primary is-loading" title="loading" type="button">Loading</button>;
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
        <h1 className="titleWebsite">Kael website</h1>
          { 
            <MdNotificationsActive onClick={this.handleDisplayNotifications} className="notificationIcon" title="notification"/>
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
        <header className="header">
        <Suspense fallback={renderLoader()}>
          <Banner src={banner}></Banner>
        </Suspense>
          
          
        </header>
        <main>
        <Suspense fallback={renderLoader()}>
          <Home/>
        </Suspense>
        </main>
        <Suspense fallback={renderLoader()}>
          <Footer/>
        </Suspense>
      </div>
    );
  }
}
