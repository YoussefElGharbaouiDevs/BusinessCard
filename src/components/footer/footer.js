/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"

const FbIcon = <FontAwesomeIcon icon={faFacebook} />
const IgIcon = <FontAwesomeIcon icon={faInstagram} />
const TwIcon = <FontAwesomeIcon icon={faTwitter} />
const GtIcon = <FontAwesomeIcon icon={faGithub} />


const Footer = () => {
    return(
        <div className="footer">
                <footer>
                    <a>{TwIcon}</a>
                    <a>{FbIcon}</a>
                    <a>{IgIcon}</a>
                    <a>{GtIcon}</a>
                </footer>
            </div>
    )
    
}

export default Footer;