import React from 'react';
import './Services.css';

import { withNamespaces } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHolding, faUserFriends, faChalkboardTeacher, faTasks } from '@fortawesome/fontawesome-free-solid';


const Services = ({t}) => {
    return (
            <div className="grid-4 bg-light" id="services">               
                <div className="service-info"> 
                    <FontAwesomeIcon icon={faHandHolding} className="hands" />               
                        <h3>{t('Szybka pomoc')}</h3>
                    <p>
                        {t('Problem z projektem, szefem, podwładnym, zespołem, kryzys w zarządzaniu procesem, komunikacją, relacjami, zagrożenie wymagające szybkiej interwencji. Skontaktuj się teraz')}
                    </p>
                </div>
                <div className="service-info">
                    <FontAwesomeIcon icon={faUserFriends} />
                    <h3>{t('Mentoring')}</h3>
                    <p>
                        {t('Sprawdź 25 lat moich doświadczeń i wiedzy oraz umiejętność przekazania ich w bardzo praktycznej formie. Umów się na pierwszą darmową sesję')}
                    </p>
                </div>
                <div className="service-info">
                    <FontAwesomeIcon icon={faChalkboardTeacher} />
                    <h3>{t('Kursy online')}</h3>
                    <p>
                        {t('Moją pasją jest pomoc i dzielenie się wiedzą na możliwie największą skalę. Sprawdź jaki kurs pomoże w Twoich problemach w pracy z ludźmi')}
                    </p>
                </div>
                <div className="service-info">
                    <FontAwesomeIcon icon={faTasks} />
                    <h3>B2B</h3>
                    <ul>
                        <li>{t('Coaching biznesowy.')}</li>
                        <li>{t('Spotkania indywidualne i online.')}</li>
                        <li>{t('Projekty doradcze i naprawcze.')}</li>
                        <li>{t('Doradztwo strategiczne.')}</li>
                        <li>{t('Doradztwo marketingowe.')}</li>
                        <li>{t('Doradztwo w zakresie zarządzania i rozwoju ludzi.')}</li>
                    </ul>
                </div>
            </div>
    )
}
export default withNamespaces()(Services);