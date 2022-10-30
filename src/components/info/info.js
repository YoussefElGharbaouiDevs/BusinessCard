import React from 'react';
import './info.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGoogle} from "@fortawesome/free-brands-svg-icons"




const LinkedinIcon = <FontAwesomeIcon icon={faLinkedin} />
const MailIcon = <FontAwesomeIcon icon={faGoogle} />


const Info = () => {
    return (
        <div>
            <img src="../../PhotoPro_Elgharbaoui.jpg" alt="..."/>
            <h1>El Gharbaoui Youssef</h1>
            <h3 className="dev">Full-Stack developer</h3>
            <p>YoussefELGHARBAOUI.tech</p>
            <div className = "buttons">
                <a href="mailto: youssefelgharbaoui.pro@gmail.com" >
                    <button className="mail">{MailIcon}  Email</button>
                </a>
                <a href="https://www.linkedin.com/in/youssef-el-gharbaoui-2121a4230/">
                    <button className="linkedin">{LinkedinIcon}  Linkedin</button>
                </a>
            </div>
        </div>
    )
}
export default Info; 