import React from 'react'
import Slider from "react-slick";
import home_silder from '../../assets/home-slider.jpg'
import './Home_slider.css';
export default function Home_slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
    };

    return (
    <div className='Home_slider'>
            <div className='main-slider'>
      <Slider {...settings}>
      <>
        <img src={home_silder} alt="" />
      </>
      <>
      <img src={home_silder} alt="" />
      </>
    </Slider>
      </div>
    </div>
  )
}
