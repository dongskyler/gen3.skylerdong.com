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
import { fas, faCamera, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

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
  faChevronCircleUp
);

class Footer extends Component {
  /** Get current year. */
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    const {
      data: { name },
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
      <footer id="footer">
        <div>
          <div>
            <ul className="profile-icons">{profileArray}</ul>
            <div className="copyright">
              Copyright &copy; {this.getYear()} {name}.
            </div>
          </div>
          <div id="back-to-top">
            <a className="smooth-scroll" title="Back to Top" href="#home">
              <FontAwesomeIcon icon={['fas', 'chevron-circle-up']} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
