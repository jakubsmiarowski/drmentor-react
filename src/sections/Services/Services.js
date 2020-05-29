import React from 'react';
import './Services.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding, faUserFriends, faChalkboardTeacher, faTasks } from '@fortawesome/fontawesome-free-solid';


const Services = () => {
    return (
        <div className="grid-4 bg-light">
            <div className="service-info"> 
                <FontAwesomeIcon icon={faHandHolding} className="hands" />               
                <h3>Szybka pomoc</h3>
                <p>
                    Problem z projektem, szefem, podwładnym, zespołem, kryzys w zarządzaniu procesem, komunikacją, relacjami, zagrożenie wymagające szybkiej interwencji. Skontaktuj się teraz
                </p>
            </div>
            <div className="service-info">
                <FontAwesomeIcon icon={faUserFriends} />
                <h3>Mentoring</h3>
                <p>
                    Sprawdź 25 lat moich doświadczeń i wiedzy oraz umiejętność przekazania ich w bardzo praktycznej formie. Umów się na pierwszą darmową sesję
                </p>
            </div>
            <div className="service-info">
                <FontAwesomeIcon icon={faChalkboardTeacher} />
                <h3>Kursy online</h3>
                <p>
                    Moją pasją jest pomoc i dzielenie się wiedzą na możliwie największą skalę. Sprawdź jaki kurs pomoże w Twoich problemach w pracy z ludźmi
                </p>
            </div>
            <div className="service-info">
                <FontAwesomeIcon icon={faTasks} />
                <h3>B2B</h3>
                <ul>
                    <li>Coaching biznesowy.</li>
                    <li>Spotkania indywidualne i online.</li>
                    <li>Projekty doradcze i naprawcze.</li>
                    <li>Doradztwo strategiczne.</li>
                    <li>Doradztwo marketingowe.</li>
                    <li>Doradztwo w zakresie zarządzania i rozwoju ludzi. </li>
                </ul>
            </div>
        </div>
    )
}
export default Services;