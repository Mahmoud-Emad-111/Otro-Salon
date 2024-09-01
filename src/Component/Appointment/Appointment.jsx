import React from 'react'
import NavBar from '../NavBar/NavBar'
import './appointment.css';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
export default function Appointment() {
    const [t,il8n]=useTranslation();

  return (
    <div className='Appointment'>
      <NavBar/>
      <br />
      <br />
      <h2>{t("Book")}</h2>
      <div className="container">
      <div className="form">
            <form action="">


                <input type="name"  required placeholder='Name'/>
                <input type="number"  required placeholder='Phone'/>
                <input type="date" />
                <select name="" id="">
                 
                <option value="">text</option>
                <option value="">text</option>
                <option value="">text</option>
                <option value="">text</option>
                </select>
                <textarea name="" placeholder='Message' id=""></textarea>
                <button>{t("send")}</button>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
