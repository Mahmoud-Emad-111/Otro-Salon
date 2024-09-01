import React from 'react'
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import './VideosLinks.css';
export default function VideosLinks() {
  
    return (
    <div className='VideosLinks'>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/reel/CfFHfOCKJvY/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image1} alt="" />
            </a>
        </div>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/reel/C2sSMq5q_hx/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image2} alt="" />
            </a>
        </div>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/reel/CfFHfOCKJvY/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image3} alt="" />
            </a>
        </div>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/p/CfHK87qKAgW/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image4} alt="" />
            </a>
        </div>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/reel/CfFHfOCKJvY/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image5} alt="" />
            </a>
        </div>
        <div className='cart_image'>
            <a target="_blank" href="https://www.instagram.com/reel/CfFHfOCKJvY/?igsh=MzRlODBiNWFlZA%3D%3D">
            <img src={image1} alt="" />
            </a>
        </div>
    </div>
  )
}
