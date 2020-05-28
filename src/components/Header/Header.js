import React from 'react';
import './Header.css';
import logo from '../../assets/img/dr.png'

const Header = () => {
    return (
        <nav className="header-wrapper">
            <ul className="header-links">
                <a href="#"><li className="header-links-item">Start</li></a>
                <a href="#"><li className="header-links-item">Oferta</li></a>
            </ul>
            <img src={logo} className="logo" alt="logo" />
            <ul className="header-links">
                <a href="#"><li className="header-links-item">O mnie</li></a>
                <a href="#"><li className="header-links-item">Klienci</li></a>
            </ul>
        </nav>
    );
};

export default Header;