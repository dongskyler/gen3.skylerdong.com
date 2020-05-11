import React from 'react';
import logo from './android-chrome-512x512.png';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <p>
          I&apos;m currently building the 3rd generation of my personal website, with React, Sass, Node, Express, MongoDB and TypeScript.
        </p>
        <p>
          I just finished setting up my server (VPS). It runs on CentOS 8 and Nginx.
        </p>
      </header>
      <body>
        <div>
          <a
            className="App-link"
            href="https://gen2.skylerdong.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              Visit the 2nd generation of my website
            </h3>
          </a>
          <p>
            Established in early 2020. Built with HTML, Sass, Bootstrap 4, JQuery, vanilla PHP and MySQL.
          </p>
        </div>
        <div>
          <a
            className="App-link"
            href="https://gen1.skylerdong.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>
              Visit the 1st generation of my website
            </h3>
          </a>
          <p>
            Established in 2015. Built with Google Site templates.
          </p>
        </div>
      </body>
    </div>
  );
}

export default App;


