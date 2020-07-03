/** Import React. */
import React, { Component } from 'react';

/** Import FontAwesome icons. */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGithub,
  faLinkedin,
  faInstagram,
  faDocker,
} from '@fortawesome/free-brands-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fas, faCamera, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

library.add(
  fab,
  faGithub,
  faLinkedin,
  faInstagram,
  faDocker,
  far,
  faEnvelope,
  fas,
  faCamera,
  faChevronCircleDown
);

class Header extends Component {
  render() {
    const {
      data: {
        names: { firstName },
      },
    } = this.props;

    const {
      data: { label },
    } = this.props;

    const {
      data: { profiles },
    } = this.props;

    const profileArray = profiles.map((profile) => (
      <li key={profile.network}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={profile.icon} />
        </a>
      </li>
    ));

    return (
      <header className="App-header" id="home">
        {/* <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav> */}

        <div className="banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hi! I'm {firstName}!</h1>
            <h3>
              I'm an <span>{label}</span>.
            </h3>
            <hr />
            <ul className="profile-icons">{profileArray}</ul>
          </div>
        </div>

        <div className="scroll-down">
          <a className="smoothscroll" href="/">
            <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} />
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
