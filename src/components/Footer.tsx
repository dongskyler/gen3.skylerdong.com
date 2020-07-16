import React, { Component } from 'react';
import { IconButton } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  // faDocker,
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { far, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { fas, faCamera, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';
import { IfcResumeBasics } from '../interfaces/IfcResumeBasics';

library.add(
  fab,
  // faDocker,
  faGithub,
  faInstagram,
  faLinkedin,
  far,
  faEnvelope,
  fas,
  faCamera,
  faChevronCircleUp
);

class Footer extends Component<IfcResumeBasics> {
  /** Get current year. */
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    const {
      basics: { name, profiles },
    } = this.props;

    const profileArray = profiles.map((profile) => (
      <li key={profile.network}>
        <a href={profile.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={[profile.icon.iconPrefix, profile.icon.iconName]} />
        </a>
      </li>
    ));

    return (
      <footer id="component-footer">
        <div>
          <div id="back-to-top">
            <IconButton>
              <FontAwesomeIcon icon={['fas', 'chevron-circle-up']} />
            </IconButton>
          </div>
          <div>
            <ul className="profile-icons">{profileArray}</ul>
            <div className="copyright">
              Copyright &copy; {this.getYear()} {name}.
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
