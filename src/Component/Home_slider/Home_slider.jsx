import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import home_silder from '../../assets/home-slider.jpg'
import './Home_slider.css';
import https from '../https';

export default function Home_slider() {
  const [Images, setImages] = useState([]);
  useEffect(() => {

    https.get('Slider/Get').then(
        res =>{
          setImages(res.data)
          console.log(res.data);
          
            
        }
    )        

}, []);



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
        {Images.map((image,index)=>{
          return (
                    <div key={index}>
                      <img src={image .image} alt="" />
                    </div>

          )
        })}

    </Slider>
      </div>
    </div>
  )
}
