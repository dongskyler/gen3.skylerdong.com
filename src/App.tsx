/** Import React. */
import React, { Component } from 'react';

/** Import React router. */
// import { Router, Route, Switch } from 'react-router';

/** Import Google Analytics. */
import ReactGA from 'react-ga';

/** Import components. */
import Header from './components/Header';
import Footer from './components/Footer';

import resume from './resumeData.json';

// import imgArchitectureGen3 from './architecture_gen3.svg';
// import imgArchitectureGen2 from './architecture_gen2.svg';

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
        <Header basics={basics} />
        <Footer basics={basics} />
      </div>
    );
  }
}

export default App;
