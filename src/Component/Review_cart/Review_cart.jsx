import React, { useEffect, useState } from 'react'
import './Review_cart.css';
import { FaStar } from 'react-icons/fa';
import https from '../https';
import {Rating}  from 'react-simple-star-rating';

export default function Review_cart() {
  const [Surveys, setSurveys] = useState([]);
  useEffect(() => {

    https.get('Survey/Get').then(
        res =>{
          setSurveys(res.data)
            
        }
    )        

}, []);
  return (
    <div className='Review_cart'>
      {
        Surveys.map((item,index)=>{
          return(
            <div className="item_review" key={index}>
            <h3>{item.name}</h3>
            <p>{item.message}</p>
            {
                <Rating size={25}   iconsCount={item.stars}/>
            }

        </div>

          )
        })
      }
    </div>
  )
}
