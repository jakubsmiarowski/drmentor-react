import React from 'react';
import './Hero.css';
import teacher from '../../assets/img/teacher.svg'
import Typed from 'react-typed';
import { withNamespaces } from 'react-i18next';


const Hero = ({t}) => {
    return (
        <div className="hero" id="hero">
            <img src={teacher} alt="teacher" className="teacher" />
            <Typed 
                strings={[
                    t("Diagnoza i szybka pomoc"),
                    t("Doradztwo B2B i B2C"),
                    t("Grupowo, indywidualnie, f2f i online"),
                    t("Doctor - Mentor ludzi korporacji")]}
                smartBackspace={true}
                typeSpeed= {100}
                backSpeed= {20}
                backDelay= {1000}
                loop= {true}
                showCursor={false}
                >
            </Typed>
        </div>
    )
}

export default withNamespaces()(Hero);