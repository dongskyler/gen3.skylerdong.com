import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
// import { AppBar, Container } from '@material-ui/core';
import ReactGA from 'react-ga';

// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Footer from './components/Footer';

import resumeData from './data/resumeData.json';

class App extends Component {
  componentDidMount() {
    /** Initialize Google Analytics. */
    ReactGA.initialize('UA-106597051-4', { testMode: true });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { basics, education, projects, skills } = resumeData;

    return (
      <div id="App" className="main-content">
        {/* <Navbar /> */}
        <Home basics={basics} />
        <About basics={basics} />
        <Resume education={education} projects={projects} skills={skills} />
        <Footer basics={basics} />
      </div>
    );
  }
}

export default App;
