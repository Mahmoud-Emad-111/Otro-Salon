import React from 'react'
import NavBar from '../NavBar/NavBar'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import home_silder from '../../assets/home-slider.jpg'
import './Home.css';
import AboutHome from '../AboutHome/AboutHome';
import logo from '../../assets/logo.webp';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.webp';
import brand3 from '../../assets/brand3.jpg';
import brand4 from '../../assets/brand4.png';
import { useTranslation } from 'react-i18next';
import Salon_team from '../Salon_team/Salon_team';
import { Link } from 'react-router-dom';
import VideosLinks from '../VideosLinks/VideosLinks';
import Footer from '../Footer/Footer';
import Home_slider from '../Home_slider/Home_slider';
export default function Home() {
    const [t,il8n]=useTranslation();

    var settings_Slider_brand = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 100,
        cssEase: "linear"
        
    };
    const items_view_services_section=[
        {
            head:t("item_head_view_services_home_1"),
            p:t("item_P_view_services_home_1")
        },
        {
            head:t("item_head_view_services_home_2"),
            p:t("item_P_view_services_home_2")
        },
        {
            head:t("item_head_view_services_home_3"),
            p:t("item_P_view_services_home_3")
        },
        {
            head:t("item_head_view_services_home_4"),
            p:t("item_P_view_services_home_4")
        },
    ]
    return (
    <div className='Home'>
      <NavBar/>
        <Home_slider/>
      {/* #####################About Home########################### */}
      <AboutHome/>
      {/* ##################### Our Brand ########################### */}




      <div className='slider_brand container'>
        <div>
            <h2>Our brands</h2>

        </div>
     <div className="slider-container">
 <Slider {...settings_Slider_brand}>
        <div className='items_brand'>
            <img src={brand1} alt="" />
            <img src={brand3} alt="" />
            <img src={brand2} alt="" />
            <img src={brand4} alt="" />

        </div>
        <div className='items_brand'>
        <img src={brand1} alt="" />
            <img src={brand3} alt="" />
            <img src={brand2} alt="" />
            <img src={brand4} alt="" />

        </div>        
      </Slider>
  
    </div>

      </div>
    {/* ##########################Section Container ########################### */}


    <div className="banner">
        <img src={logo} alt="" />
        <h1>{t('headBanner')}</h1>
        <p>{t('TextBanner')}</p>
        <button>{t("Book")}</button>
    </div>

    {/* ########################## Team Salon ########################### */}
    {/* <div className="grey">
    </div> */}
        {/* <Salon_team/> */}
        <div className='view'>
            <div className="container">
                
            
                <div className="view_services ">
                    {
                        items_view_services_section.map((item,index)=>{
                            return(
                                <div key={index} className='item_view_services'>
                                    <h3>{item.head}</h3>
                                    <p>{item.p}</p>
                                </div>

                            )
                        })
                    }
                </div>
        </div>
            <Link to='/'>{t("view_services")}</Link>
        </div>
            <div className='container HomeVideosLinks'>
                    <h2>{t("head_follow")}</h2>
                    <VideosLinks/>
                    <a className='btn_follow' href="https://www.instagram.com/otro.beauty/">{t("follow")}</a>
            </div>

            <Footer/>
    </div>
  )
}
