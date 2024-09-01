import React from 'react'
import NavBar from '../NavBar/NavBar'
import './Contact_US.css';
import Footer from '../Footer/Footer';
import Home_slider from '../Home_slider/Home_slider';
import { useTranslation } from 'react-i18next';
export default function Contact_US() {
  const [t,il8n]=useTranslation();

  return (
    <div className='Contact_Us'>
        <NavBar/>
        <br />
        <Home_slider/>
        <br />
        <br />
        <h2>{t("Contact US")}</h2>
        <br />
        <div className="container">
            <div className="form">
                <form action="">
                    <div className="one_input">
                    <input type="text" required placeholder='Name'/>
                    <input type="email" required placeholder='Email'/>
                    </div>
                    <br />
                    <input type="number"  className='number' placeholder='Phone'/>
                    <br />
                    <br />

                    <textarea name="" id="" placeholder='Message'></textarea>
                    <button>{t("send")}</button>
                </form>
            </div>
            <br />
            <br />
        </div>
            <Footer/>
    </div>
  )
}
