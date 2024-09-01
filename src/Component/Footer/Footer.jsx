import React from 'react'
import './Footer.css';
import logo from '../../assets/logo.webp';
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const [t,il8n]=useTranslation();
  return (
    <div className='footer'>
        <div className='container'>
            <div className="content_footer">
                <img src={logo} alt="" />
                <h4>{t("Working_hours")}</h4>
            </div>
        </div>
        <p>Copyright © 2024 Marsili </p>
        
    </div>
  )
}
