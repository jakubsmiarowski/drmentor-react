import React, {Component} from 'react';
import './Expand.css';

class Expand extends Component {
    constructor() {
        super();
        this.state = {
          name: "React"
        };
      }
    render() {
        return(
            <div className="expandable">
                <p>Zaczynałem w 1995 roku jako Przedstawiciel Handlowy. Przeszedłem wszystkie etapy i stanowiska korporacyjne do Dyrektora Generalnego włącznie. Pracowałem w wielkich korporacjach i średnich firmach polskich i międzynarodowych. Zarządzałem zespołami kilku- i kilkuset osobowymi. Działami sprzedaży, marketingu, dystrybucją, finansami, całym procesem biznesowym. Moje zespoły odnosiły wielkie sukcesy. Mnie nie ominęły porażki i doświadczenia związane głównie z błędami w zarządzaniu ludźmi. Te uczą najwięcej i wzmacniają najbardziej. </p>
                <p>Kocham pracę z ludźmi. Moją pasją jest nauczanie, przekazywanie wiedzy i doświadczenia. Wykształciłem i wypromowałem wielu Managerów, którzy dziś są Dyrektorami, CEO, CFO, przedsiębiorcami i właścicielami własnych biznesów, managerami wyższych szczebli.</p>
                <p><strong>Są problemy, o których nie powiesz szefowi, kolegom, ani HR. Od takich spraw jest zaufany, gwarantujący anonimowość mentor. Tak jak lekarz jest Ci potrzebny, gdy choroba jest poważna.</strong> Znam odpowiedzi na wiele, wiele pytań😊 Zaufało mi setki osób, więc śmiało ruszam ze swoją misją w Polskę, a potem w świat!
                </p>
                <p className="arturito">Artur Śmiarowski, DoctorMentor</p>
                <p>PS. Jest post scriptum. Z wykształcenia jestem lekarzem weterynarii, choć nigdy nie praktykowałem. Mam MBA z Akademii Leona Koźmińskiego i setki kursów w głowie. DoctorMentor jest faktycznie dyplomowanym lekarzem 😉</p>
                <p>Więcej informacji znajdziesz na LinkedIn 💪</p>
            </div>
        )
    }
}

export default Expand;