import React, {Component} from 'react';
import './Hero.css';
import teacher from '../../assets/img/teacher.svg'
import Typed from 'react-typed';

class Hero extends Component {
    render() {
        return (
            <div className="hero" id="hero">
                <img src={teacher} alt="teacher" className="teacher" />
                <Typed 
                    strings={[
                        'Diagnoza i szybka pomoc',
                        'Doradztwo B2B i B2C',
                        'Grupowo, indywidualnie, f2f i online',
                        'Doctor - Mentor ludzi korporacji']}
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
};

export default Hero;