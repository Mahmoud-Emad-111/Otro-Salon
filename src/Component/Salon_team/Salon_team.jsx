import React from 'react'
import Avtar from '../../assets/avtar.png';
import './salon_team.css';
import { FaStar } from 'react-icons/fa';
export default function Salon_team() {
  const team=[
    'marwa',
    'asma',
    'narges',
    'zaineb',
    'merna',
    'eman',
    'rahma',
    'Michelle',

  ]
    return (
    <div className='salon_team container'>
      {
        team.map((item,index)=>{
            return (
                <div key={index} className="item_team">
                    <img src={Avtar} alt="" />
                    <h3>{item}</h3>
                    <div className="rate">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                    </div>
                </div>
            )
        })
      }
    </div>
  )
}
