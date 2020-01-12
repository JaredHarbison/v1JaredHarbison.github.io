import React from 'react';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer() {
  return(
    <div class="footer">
      <h1>get in touch via
        <a href="https://www.linkedin.com/in/jaredharbison" target="_blank">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="fontawesome"/>
        </a>
        <a href="https://www.github.com/jaredharbison" target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} className="fontawesome"/>
        </a>
        <a href="https://www.dev.to/jaredharbison" target="_blank">
            <FontAwesomeIcon icon={['fab', 'dev']} className="fontawesome"/>
        </a>
        <a href="mailto:jared.harbison@gmail.com" target="_blank">
            <FontAwesomeIcon icon={['fa', 'envelope']} className="fontawesome"/>
        </a>
      </h1>
    </div>
  )
}

export default Footer;