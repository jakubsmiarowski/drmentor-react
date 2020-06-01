import React from 'react';
import './Header.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/img/dr.png'

const Header = () => {
    return (
        <nav className="header-wrapper">
            <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="header-links">
                <AnchorLink href="#hero"><li className="header-links-item">Start</li></AnchorLink>
                <AnchorLink href="#services"><li className="header-links-item">Oferta</li></AnchorLink>
                <AnchorLink href="#about"><li className="header-links-item">O mnie</li></AnchorLink>
                <AnchorLink href="#clients"><li className="header-links-item">Klienci</li></AnchorLink>
            </ul>
        </nav>
    );
};

export default Header;