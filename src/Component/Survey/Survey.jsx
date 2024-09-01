import React, { useState } from 'react'
import './Survey.css';
import NavBar from '../NavBar/NavBar';
import Home_slider from '../Home_slider/Home_slider';
import Footer from '../Footer/Footer';
import {Rating}  from 'react-simple-star-rating';
import { useTranslation } from 'react-i18next';

export default function Survey() {
  const [t,il8n]=useTranslation();

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
      console.log(rate);
        setRating(rate)
    
        // other logic
      }
      // Optinal callback functions
    //   const onPointerEnter = () => console.log('Enter')
    //   const onPointerLeave = () => console.log('Leave')
    //   const onPointerMove = (value, index) => console.log(value, index)
    

    return (

    <div className='rating'>
        <NavBar/>
        <br />
        <Home_slider/>
        <br />
        <div className="container">
        <div className="form">
          <h2>{t("review")}</h2>
            <form action="">
            <Rating
        onClick={handleRating}

        /* Available Props */
      />

                <input type="name"  required placeholder='Name'/>
                <input type="email"  required placeholder='Email'/>
                <textarea name="" placeholder='Message' id=""></textarea>
                <button>{t("send")}</button>
            </form>
        </div>
        <br />
        </div>
        <Footer/>
    </div>
  )
}
