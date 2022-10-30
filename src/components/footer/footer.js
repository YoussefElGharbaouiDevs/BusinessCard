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
                    <a href="https://twitter.com/YoELGHARBAOUI">{TwIcon}</a>
                    <a href="https://web.facebook.com/profile.php?id=100008730344438">{FbIcon}</a>
                    <a href="https://www.instagram.com/ussef_gh/">{IgIcon}</a>
                    <a href="https://github.com/YoussefElGharbaouiDevs">{GtIcon}</a>
                </footer>
            </div>
    )
    
}

export default Footer;