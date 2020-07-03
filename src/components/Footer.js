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
import {
  fas,
  faCamera,
  faChevronCircleUp,
} from '@fortawesome/free-solid-svg-icons';

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
        <a href={profile.url}>
          <FontAwesomeIcon icon={profile.icon} />
        </a>
      </li>
    ));

    return (
      <footer>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{profileArray}</ul>

            <ul className="copyright">
              <li>
                Copyright &copy; {this.getYear()} {name}.
              </li>
            </ul>
          </div>
          <div id="back-to-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <FontAwesomeIcon icon={['fas', 'chevron-circle-up']} />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
