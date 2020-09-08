import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fas, faCamera, faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import { IfcResumeBasics } from '../interfaces/IfcResumeBasics';

library.add(
  fab,
  faGithub,
  faLinkedin,
  faInstagram,
  far,
  faEnvelope,
  fas,
  faCamera,
  faChevronCircleDown
);

class Home extends Component<IfcResumeBasics> {
  render() {
    const {
      basics: {
        names: { firstName },
        label,
        profiles,
      },
    } = this.props;

    const profileList = profiles.map((profile, i) => (
      <li key={i}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={[profile.icon.iconPrefix, profile.icon.iconName]} />
        </a>
      </li>
    ));

    return (
      <div className="home">
        <header className="header">
          <div className="masthead">
            <div>
              <h1>Hi! I'm {firstName}!</h1>
              <h3>{label}</h3>
              <ul className="profile-icons">{profileList}</ul>
            </div>
          </div>
        </header>
        <div className="main-content" />
      </div>
    );
  }
}

export default Home;
