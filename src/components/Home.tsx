import React, { Component } from 'react';
// import IconButton from '@material-ui/core/IconButton';
// import imgArchitectureGen2 from '../data/architecture_gen2.svg';
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
import imgArchitectureGen3 from '../data/architecture_gen3.svg';
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

class Home extends Component<IfcResumeBasics> {
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
      <div className="home">
        <header className="header">
          <div className="masthead">
            <div>
              <h1>Hi! I'm {firstName}!</h1>
              <h3>
                I'm an <span>{label}</span>.
              </h3>
              <ul className="profile-icons">{profileArray}</ul>
            </div>
          </div>
          {/* <div className="scroll-down">
            <IconButton>
              <FontAwesomeIcon icon={['fas', 'chevron-circle-down']} />
            </IconButton>
          </div> */}
        </header>
        <div className="main-content">
          <div className="architecture-diagram">
            <div>
              <img src={imgArchitectureGen3} alt="3rd-gen architecture diagram" />
            </div>
          </div>
          <div className="site-under-construction">
            <div>
              <p>
                I'm currently building this website, the 3rd generation of my personal
                websites.
              </p>
            </div>
          </div>
          <div className="previous-websites">
            <div>
              <div>
                Visit previous generations:
                <ul>
                  <li>
                    <a
                      href="https://gen1.skylerdong.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://gen1.skylerdong.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://gen2.skylerdong.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://gen2.skylerdong.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
