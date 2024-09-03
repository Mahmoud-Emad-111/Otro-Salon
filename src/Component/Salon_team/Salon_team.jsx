import React, { useEffect, useState } from 'react'
import Avtar from '../../assets/avtar.png';
import './salon_team.css';
import { FaStar } from 'react-icons/fa';
import https from '../https';

export default function Salon_team() {
  const [Team, setTeam] = useState([]);
  useEffect(() => {

    https.get('Team/Get').then(
        res =>{
          setTeam(res.data)
            
        }
    )        

}, []);
  // const team=[
  //   'marwa',
  //   'asma',
  //   'narges',
  //   'zaineb',
  //   'merna',
  //   'eman',
  //   'rahma',
  //   'Michelle',

  // ]
    return (
    <div className='salon_team container'>
      {
        Team.map((item,index)=>{
            return (
                <div key={index} className="item_team">
                    <img src={Avtar} alt="" />
                    <h3>{item.name}</h3>
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
