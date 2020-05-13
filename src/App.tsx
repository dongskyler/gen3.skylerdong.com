import React, { Component } from 'react';
import logo from './android-chrome-512x512.png';
import './scss/App.scss';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
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
          <h3>
            Render the newly fetched data inside of this.state.data :
          </h3>
          <p className="App-intro">{this.state.data}</p>
        </body>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <br />
    //     <p>
    //       I&apos;m currently building the 3rd generation of my personal website, with React, Sass, Node, Express, MongoDB and TypeScript.
    //     </p>
    //     <p>
    //       I just finished setting up my server (VPS). It runs on CentOS 8 and Nginx.
    //     </p>
    //   </header>
    //   <body>
    //     <div>
    //       <a
    //         className="App-link"
    //         href="https://gen2.skylerdong.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h3>
    //           Visit the 2nd generation of my website
    //         </h3>
    //       </a>
    //       <p>
    //         Established in early 2020. Built with HTML, Sass, Bootstrap 4, JQuery, vanilla PHP and MySQL.
    //       </p>
    //     </div>
    //     <div>
    //       <a
    //         className="App-link"
    //         href="https://gen1.skylerdong.com/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <h3>
    //           Visit the 1st generation of my website
    //         </h3>
    //       </a>
    //       <p>
    //         Established in 2015. Built with Google Site templates.
    //       </p>
    //     </div>
    //   </body>
    // </div>
//   );
// }

// export default App;
