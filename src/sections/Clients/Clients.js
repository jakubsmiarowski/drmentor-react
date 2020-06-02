import React, {Component} from 'react';
import './Clients.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft,faAngleRight } from '@fortawesome/fontawesome-free-solid';

import testimonials from '../../assets/data/testimonials.json';


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <FontAwesomeIcon icon={faAngleRight} 
            className="arrow-right"
            onClick={onClick}
        />
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <FontAwesomeIcon icon={faAngleLeft} 
            className="arrow-left"
            onClick={onClick}
        />
    );
  }

class Clients extends Component {

    render() {
        
        const settings = {
            speed: 500,
            slidesToShow: 3,
            arrows: true,
            dots:false,
            slidesToScroll: 3,
            centerPadding: 0,
            adaptiveHeight: true,
            initialSlide: 3,
            prevArrow: <SamplePrevArrow />,
            nextArrow: <SampleNextArrow />,
            responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
            },{
                breakpoint: 991,
                settings:{
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
          };
        let slickCarousel = testimonials.map(user=>{
            return(
                <div className="testimonial" key={user.id}>
                    <div className="testimonial-item">
                        <div className="testimonial-wrapper">
                            <p>{user.text}</p>
                        </div>
                        <div className="testimonial-author">
                            <div className="testimonial-author-image">
                                <a href={user.link} target="_blank" rel="noopener noreferrer"><img src={user.image} alt="client"></img></a>
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
            <div className="slick" id="clients">
                <div className="slick-container">
                    <div className="section-title-container">
                        <h5 className="section-subtitle">Moje rekomendacje</h5>
                        <h2 className="section-title">Opinie osób, z którymi współpracowałem</h2>
                    </div>
                    <Slider {...settings}>
                        {slickCarousel}
                    </Slider>
                </div>
            </div>
        )
    }
}


export default Clients;