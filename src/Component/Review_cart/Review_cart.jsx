import React from 'react'
import './Review_cart.css';
import { FaStar } from 'react-icons/fa';
export default function Review_cart() {
  return (
    <div className='Review_cart'>
        <div className="item_review">
            <h3>Mahmoud</h3>
            <p>This podcast is amazing! The storytelling and production quality are top-notch. I can't wait for the next episode!</p>
            <FaStar />
            <FaStar />
            <FaStar />

        </div>
        <div className="item_review">
            <h3>Mahmoud</h3>
            <p>This podcast is amazing! The storytelling and production quality are top-notch. I can't wait for the next episode!</p>
            <FaStar />
            <FaStar />
            <FaStar />

        </div>
        <div className="item_review">
            <h3>Mahmoud</h3>
            <p>This podcast is amazing! The storytelling and production quality are top-notch. I can't wait for the next episode!</p>
            <FaStar />
            <FaStar />
            <FaStar />

        </div>
    </div>
  )
}
