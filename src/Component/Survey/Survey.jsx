import React, { useState } from 'react'
import './Survey.css';
import NavBar from '../NavBar/NavBar';
import Home_slider from '../Home_slider/Home_slider';
import Footer from '../Footer/Footer';
import {Rating}  from 'react-simple-star-rating';
import { useTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import https from '../https';
import toast, { Toaster } from 'react-hot-toast';


export default function Survey() {
  const [t,il8n]=useTranslation();
  const notify = () => toast.success('The Message has been added');
  const notify_error = () => toast.error('Please try agin later');
  const { register, handleSubmit,  watch,formState: { errors },setValue } = useForm();


    const [rating, setRating] = useState(1)
    const handleRating = (rate) => {
        setRating(rate)
        
        // other logic
      }
      setValue('stars',rating)
    // const [formData, setFormData] = useState({
    //   name: '',
    //   specialty: '',
    //   email: '',
    //   phone: '',
    //   address: '',
    //   message: '',
    // });
  

    function sendData(data){

      
      https.post('Survey/Store',data).then(res=>{
        // Cookies.save('token', res.data.data.Token);
        // console.log(res);
        setRating(1)
        setValue('name','')
        setValue('email','')
        setValue('message','')
        // setValue('name','')
        notify()
        // navigate('/');
      }).catch(
        error=>{
          // console.log(error); 
          notify_error()
        }
      )
    
  }

    return (

    <div className='rating'>
        <Toaster />

        <NavBar/>
        <br />
        <Home_slider/>
        <br />
        <div className="container">
        <div className="form">
          <h2>{t("review")}</h2>
            <form onSubmit={handleSubmit(sendData)}>
            <Rating
        onClick={handleRating}
          initialValue={rating}
          

        /* Available Props */
      />

<label htmlFor="name" className="form-label"></label>
                      <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder='Name'
                      {...register('name',{required:'Name is Required'})}/>
                      {errors.name && <p  className="error">{errors.name.message}</p>}

                      <label htmlFor="email" className="form-label"></label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder='Email'
                    required
                    {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
                    {errors.email && <p  className="error">{errors.email.message}</p>}
                    <label htmlFor="message" className="form-label"></label>
                          <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          required
                          placeholder='message'
                          {...register('message',{required:'message is Required'})}
                          />
                <button>{t("send")}</button>
            </form>
        </div>
        <br />
        </div>
        <Footer/>
    </div>
  )
}
