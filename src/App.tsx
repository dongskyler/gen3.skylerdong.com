import React, { Component } from 'react';
import ReactGA from 'react-ga';
import imgArchitectureGen3 from './architecture_gen3.svg';
import imgArchitectureGen2 from './architecture_gen2.svg';
import './scss/App.scss';

ReactGA.initialize('UA-106597051-4');

class App extends Component {
  componentDidMount() {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Skyler Dong</div>
        </header>
        <div className="main-content">
          <p>
            I&apos;m currently building the 3rd generation of my personal
            website, built with React, Node, Express, GraphQL, Amazon S3 bucket
            and MongoDB.
          </p>
          <div>
            <img
              src={imgArchitectureGen3}
              className="img-full"
              alt="architecture gen3"
            />
          </div>
          <div>
            Visit previous generations of my websites:
            <ul>
              <li>
                <a
                  className="App-link"
                  href="https://gen2.skylerdong.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Visit the 2nd generation of my website</p>
                </a>
                <p>
                  Established in early 2020. Built with HTML, Sass, Bootstrap 4,
                  JQuery, vanilla PHP and MySQL.
                </p>
                <div>
                  <img
                    src={imgArchitectureGen2}
                    className="img-full"
                    alt="architecture gen2"
                  />
                </div>
              </li>
              <li>
                <a
                  className="App-link"
                  href="https://gen1.skylerdong.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>Visit the 1st generation of my website</p>
                </a>
                <p>Established in 2015. Built with Google Site templates.</p>
              </li>
            </ul>
          </div>
          {/* <h3>Render the newly fetched data inside of this.state.data :</h3> */}
          {/* <p className="App-intro">{this.state.data}</p> */}
        </div>
      </div>
    );
  }
}

export default App;
