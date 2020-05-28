import React, {useRef, useEffect, Component} from 'react';
import './About.css';

class About extends Component {
    render() {



        return (
            <div className="content-wrapper bg-dark">
                <div className="content-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_Q-nI1FRHnE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="video"></iframe>
                </div>
                <div className="content-text">
                    <h3>O mnie</h3>
                    <p>
                        Jestem praktykiem z 25 letnim doświadczeniem. Wszystko czego uczę i problemy, które rozwiązuję znam z życia i przeżycia. Nie mądrze się, nie jestem psychologiem. Mam za to umiejętność niesienia szybkiej pomocy. Każdy pacjent, oczekuje szybkiego ustąpienia
                        bólu i skutecznej strategii wyleczenia objawów choroby. Tym się zajmuję. Pomagam szybko w kryzysie/bólu, a razem likwidujemy sytuację problemową tak, jak leczy się chorobę. W biznesie firm i korporacji. <a class="expand" id="expand"><strong>Czytaj więcej</strong></a>
                    </p>
                    <div class="expandable">
                        <p>Zaczynałem w 1995 roku jako Przedstawiciel Handlowy. Przeszedłem wszystkie etapy i stanowiska korporacyjne do Dyrektora Generalnego włącznie. Pracowałem w wielkich korporacjach i średnich firmach polskich i międzynarodowych. Zarządzałem
                            zespołami kilku- i kilkuset osobowymi. Działami sprzedaży, marketingu, dystrybucją, finansami, całym procesem biznesowym. Moje zespoły odnosiły wielkie sukcesy. Mnie nie ominęły porażki i doświadczenia związane głównie z błędami
                            w zarządzaniu ludźmi. Te uczą najwięcej i wzmacniają najbardziej. </p>
                        <p>Kocham pracę z ludźmi. Moją pasją jest nauczanie, przekazywanie wiedzy i doświadczenia. Wykształciłem i wypromowałem wielu Managerów, którzy dziś są Dyrektorami, CEO, CFO, przedsiębiorcami i właścicielami własnych biznesów, managerami
                            wyższych szczebli.</p>
                        <p><strong>Są problemy, o których nie powiesz szefowi, kolegom, ani HR. Od takich spraw jest zaufany, gwarantujący anonimowość mentor. Tak jak lekarz jest Ci potrzebny, gdy choroba jest poważna.</strong> Znam odpowiedzi na wiele,
                            wiele pytań😊 Zaufało mi setki osób, więc śmiało ruszam ze swoją misją w Polskę, a potem w świat!
                        </p>
                        <p class="arturito">Artur Śmiarowski, DoctorMentor</p>
                        <p>PS. Jest post scriptum. Z wykształcenia jestem lekarzem weterynarii, choć nigdy nie praktykowałem. Mam MBA z Akademii Leona Koźmińskiego i setki kursów w głowie. DoctorMentor jest faktycznie dyplomowanym lekarzem 😉</p>
                        <p>Więcej informacji znajdziesz na LinkedIn 💪</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;