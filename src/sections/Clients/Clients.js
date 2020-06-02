import React from 'react';
import './Clients.css';
import { withNamespaces } from 'react-i18next';
import Carousel from '../../components/Carousel/Carousel';


const Clients = ({t}) => {
    return (
        <div className="slick" id="clients">
            <div className="slick-container">
                <div className="section-title-container">
                    <h5 className="section-subtitle">{t('Moje rekomendacje')}</h5>
                    <h2 className="section-title">{t('Opinie osób, z którymi współpracowałem')}</h2>
                </div>
                <Carousel />
            </div>
       </div>
    )
}


export default withNamespaces()(Clients);