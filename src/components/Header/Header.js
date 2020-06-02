import React, {useState} from 'react';
import './Header.css';
import i18n from '../i18n/i18n';
import { withNamespaces } from 'react-i18next';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import logo from '../../assets/img/dr.png'

const Header = ({t}) => {

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active);
    }
    return (
        <nav className="header-wrapper" id="start">
            <div className="header-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="header-links">
                <AnchorLink href="#services"><li className="header-links-item">{t('Oferta')}</li></AnchorLink>
                <AnchorLink href="#about"><li className="header-links-item">{t('O mnie')}</li></AnchorLink>
                <AnchorLink href="#clients"><li className="header-links-item">{t('Klienci')}</li></AnchorLink>
                <AnchorLink href="#contact"><li className="header-links-item">{t('Kontakt')}</li></AnchorLink>
            </ul>
            <div className="header-translations">
                <div className="header-translation-button">
                    <button 
                        style={{ borderBottom: active ? "none" : "2px solid #ecf0f1" }}
                        onClick={() => {
                            changeLanguage('pl')
                            toggle()
                        }}>pl</button>
                </div>
                <div className="header-translation-button">
                    <button 
                        style={{ borderBottom: active ? "2px solid #ecf0f1" : "none" }}
                        onClick={() => {
                            changeLanguage('en')
                            toggle()
                        }}>en</button>
                </div>
            </div>
        </nav>
    );
};

export default withNamespaces()(Header);