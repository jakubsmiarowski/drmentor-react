import React from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/fontawesome-free-brands';

const Footer = () => {
    return (
        <div className="socials bg-dark">
            <div className="socials-container">
                <div className="socials-contact-info-left">
                <p>Napisz do <a href="mailto:artur@doctormentor.pl">artur@doctormentor.pl</a> lub zadzwoń na <a href="tel:+48796310454">+48 796 310 454</a></p>
                </div>
                <div className="socials-contact-info-right">
                    <div className="copyright-wrapper">
                        <p>Dr. Mentor &copy; 2020 || </p>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/artur.smiarowski.9" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/artur-%C5%9Bmiarowski-39430818/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                            <li>
                                <a href="" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;