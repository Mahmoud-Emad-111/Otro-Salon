import React from 'react'
import NavBar from '../NavBar/NavBar'
import AboutHome from '../AboutHome/AboutHome'
import Salon_team from '../Salon_team/Salon_team'
import './About.css';
import Review_cart from '../Review_cart/Review_cart';
import Footer from '../Footer/Footer';
import Slider from "react-slick";
import home_silder from '../../assets/home-slider.jpg'
import Home_slider from '../Home_slider/Home_slider';
import VideosLinks from '../VideosLinks/VideosLinks';


export default function About() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        autoplay:true,
        slidesToScroll: 1,
    };

  return (
    <div className='About'>
      <NavBar/>
    <br />
    <Home_slider/>

      <AboutHome/>
      <h2>Our Team</h2>
      <br />
      <br />
      <Salon_team/>
    <br />
    <h2>Customer opinions</h2>
    <div className="container">
        <Review_cart/>
      <br />
      <br />
      <br />
      <VideosLinks/>
      <br />
    </div>
    <Footer/>
    </div>
  )
}
