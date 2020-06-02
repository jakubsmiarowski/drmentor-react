import React from 'react';
import './Hero.css';
import teacher from '../../assets/img/teacher.svg'
import Typed from 'react-typed';
import { withNamespaces } from 'react-i18next';
import words from './words';


const Hero = ({t}) => {
    return (
        <div className="hero" id="hero">
            <img src={teacher} alt="teacher" className="teacher" />
            <Typed 
                strings={words}
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