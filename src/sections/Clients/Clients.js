import React, {Component} from 'react';
import './Clients.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import testimonials from '../../assets/data/testimonials.json';


class Clients extends Component {
    render() {
        const settings = {
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            dots:false,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: 0
          };
        let slickCarousel = testimonials.map(user=>{
            return(
                <div className="testimonial">
                    <div className="testimonial-item">
                        <div className="testimonial-wrapper">
                            <p>{user.text}</p>
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-author-image">
                                <a href={user.link} target="_blank"><img src={user.image} alt="client"></img></a>
                            </div>
                            <div className="testimonial-author-info">
                                <h5>{user.name}</h5>
                                <h6>{user.title}</h6>
                            </div>
                        </div>                        
                    </div>
                </div>
            )
            
        });
        return (
            <div className="slick">
                <div className="slick-container">
                    <Slider {...settings}>
                        {slickCarousel}
                    </Slider>
                </div>
            </div>
        )
    }
}


export default Clients