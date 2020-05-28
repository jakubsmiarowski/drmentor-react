import React from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faInstagram, faYoutube } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
    return (
        <div class="socials bg-dark">
            <div class="contact-info">
                <p>Napisz do<br></br><a href="mailto:artur@doctormentor.pl">artur@doctormentor.pl</a><br></br> lub zadzwoń na <a href="tel:+48796310454">+48 796 310 454</a></p>
                <ul>
                    <li> <a href="https://www.facebook.com/artur.smiarowski.9" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
                    </li>
                    <li><a href="https://www.linkedin.com/in/artur-%C5%9Bmiarowski-39430818/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </li>
                    <li> <a href="" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a>
                    </li>
                    <li> <a href="" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
                    </li>
                    <li> <a href="" target="_blank"><FontAwesomeIcon icon={faYoutube} /></a>
                    </li>
                </ul>
            </div>
            <p class="drmentor">Dr. Mentor &copy; 2020</p>
        </div>
    );
};

export default Footer;