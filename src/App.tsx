import React, { Component } from 'react';
// import { Router, Route, Switch } from 'react-router';
// import { AppBar, Container } from '@material-ui/core';
import ReactGA from 'react-ga';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import resume from './data/resumeData.json';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     resumeData: null,
  //   };
  // }

  componentDidMount() {
    /** Initialize Google Analytics. */
    ReactGA.initialize('UA-106597051-4', { testMode: true });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { basics } = resume;

    return (
      <div id="App">
        <Navbar />
        <Home basics={basics} />
        <Footer basics={basics} />
      </div>
    );
  }
}

export default App;
