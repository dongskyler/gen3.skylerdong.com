/** Import React. */
import React, { Component } from 'react';

/** Import interfaces. */

/** Import Material Design. */
import IconButton from '@material-ui/core/IconButton';

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
import { IfcResumeBasics } from '../interfaces/IfcResumeBasics';

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

class Header extends Component<IfcResumeBasics> {
  render() {
    const {
      basics: {
        names: { firstName },
        label,
        profiles,
      },
    } = this.props;

    const profileArray = profiles.map((profile) => (
      <li key={profile.network}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={[profile.icon.iconPrefix, profile.icon.iconName]} />
        </a>
      </li>
    ));

    return (
      <header className="header" id="home">
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

        <div className="masthead">
          <div>
            <h1>Hi! I'm {firstName}!</h1>
            <h3>
              I'm an <span>{label}</span>.
            </h3>
            <ul className="profile-icons">{profileArray}</ul>
          </div>
        </div>

        <div className="scroll-down">
          <IconButton>
            <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} />
          </IconButton>
        </div>
      </header>
    );
  }
}

export default Header;
