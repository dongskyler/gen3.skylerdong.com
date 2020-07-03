/** Import React. */
import React, { Component } from 'react';

/** Import Google Analytics. */
import ReactGA from 'react-ga';

/** Import components. */
import Header from './components/Header';
import Footer from './components/Footer';

import resume from './resumeData';

// import imgArchitectureGen3 from './architecture_gen3.svg';
// import imgArchitectureGen2 from './architecture_gen2.svg';

/** Import stylesheets. */
import './scss/App.scss';

// interface resumeData {
//   resumeData: {
//     basics: object
//   };
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     resumeData: {},
  //   };
  // }

  componentDidMount() {
    console.log(resume);

    /** Get resumeData. */
    // this.getResumeData();

    /** Initialize Google Analytics. */
    ReactGA.initialize('UA-106597051-4', { testMode: true });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    const { basics } = resume;

    return (
      <div className="App">
        <Header data={basics} />
        <Footer data={basics} />
      </div>
    );
  }
}

export default App;
