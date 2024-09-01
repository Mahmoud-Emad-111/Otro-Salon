import React from 'react'
import { RiScissors2Fill } from 'react-icons/ri'
import './AboutHome.css';
import { PiHairDryerDuotone } from 'react-icons/pi';
import { IoIosFlower } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
export default function AboutHome() {
    const [t,il8n]=useTranslation();

    const itmes=[
        {
            icon:<RiScissors2Fill />,
            head:t('Perfection'),
        },
        {
            icon:<PiHairDryerDuotone />,
            head:t('Uniqueness'),
        },
        {
            icon:<IoIosFlower />,
            head:t('Professionalism'),
        },
        

    ]
  return (
      <div className='container'>
          <div className='AboutHome'>
            {
             itmes.map((item,index)=>{
                return(
                    <div key={index} className="item">
                        <div className='icon'>{item.icon}</div>
                        <h3>{item.head}</h3>
                    </div>
                );
             })   
            }
        </div>
    </div>
  )
}
