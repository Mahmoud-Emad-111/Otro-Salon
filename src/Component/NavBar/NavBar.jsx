import React from 'react'
import Logo from '../../assets/logo.webp'

import './NavBar.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
export default function NavBar() {
    const [t,il8n]=useTranslation();
    function ChangLang(){
        il8n.language==='ar' ? il8n.changeLanguage('en') : il8n.changeLanguage('ar');
        const home=document.getElementsByTagName('html')[0];
        
        home.style.direction==='rtl' ?home.style.direction='ltr':home.style.direction='rtl';
        const side_bar=document.querySelector('.side_bar');
        side_bar.classList.toggle('ar')
        side_bar.style.right=100;
    }
    function handel_side_bar() {
        const side_bar=document.querySelector('.side_bar');
        side_bar.classList.toggle('active_bar')
    }

    return (
    <div className='nav_bar'>
        <div className="container content">
            <div className="logo">
                <img src={Logo} alt="" />    
            </div>
            <div className="links">
                <ul>
                    <li className='link_page'><Link to='/'>{t('Home')}</Link></li>
                    <li className='link_page'><Link to='/Appointment'>{t('appointment')}</Link></li>
                    <li className='link_page'><Link to='/About'>{t('About')}</Link></li>
                    <li className='link_page'><Link to='/Survey'>{t('Rating')}</Link></li>
                    <li className='link_page'><Link to='/ContactUS'>{t('Contact US')}</Link></li>
                    <li className='lang' onClick={ChangLang}>{il8n.language==='ar' ? "EN" : "AR" }</li>
                    <li>
                    <FaBars  className='bar' onClick={handel_side_bar}/>

                    </li>

                </ul>

            </div>   
        </div>
        <div className="side_bar">
            <div className="bar_close">
            <IoMdClose  onClick={handel_side_bar}/>

            </div>
            <ul>
                <li className='link_page'><Link to='/'>{t('Home')}</Link></li>
                <li className='link_page'><Link to='/Appointment'>{t('appointment')}</Link></li>
                <li className='link_page'><Link to='/About'>{t('About')}</Link></li>
                <li className='link_page'><Link to='/Survey'>{t('Rating')}</Link></li>
                <li className='link_page'><Link to='/ContactUS'>{t('Contact US')}</Link></li>
                
            </ul>
        </div>        
    </div>
  )
}
