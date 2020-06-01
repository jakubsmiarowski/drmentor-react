import React, {Component} from 'react';
import './About.css';

import Expand from '../../components/Expand/Expand';

class About extends Component {

    constructor() {
        super();
        this.state = {
          name: "React",
          showHideText: false,
        };
        this.hideComponent = this.hideComponent.bind(this);
      }

      hideComponent(name) {
        switch (name) {
          case "showHideText":
            this.setState({ showHideText: !this.state.showHideText });
            break;
          default:
            break;
        }
      }

    render() {
        const { showHideText } = this.state;
        return (
            <div className="content-wrapper bg-dark" id="about">
                <div className="content-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/_Q-nI1FRHnE" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="video"></iframe>
                </div>
                <div className="content-text">
                    <h3>O mnie</h3>
                    <p>
                        Jestem praktykiem z 25 letnim doświadczeniem. Wszystko czego uczę i problemy, które rozwiązuję znam z życia i przeżycia. Nie mądrze się, nie jestem psychologiem. Mam za to umiejętność niesienia szybkiej pomocy. Każdy pacjent, oczekuje szybkiego ustąpienia
                        bólu i skutecznej strategii wyleczenia objawów choroby. Tym się zajmuję. Pomagam szybko w kryzysie/bólu, a razem likwidujemy sytuację problemową tak, jak leczy się chorobę. W biznesie firm i korporacji. <button onClick={() => this.hideComponent("showHideText")} className="expand">Czytaj więcej</button>
                    </p>
                    {showHideText && <Expand />}
                </div>
            </div>
        )
    }
}

export default About;