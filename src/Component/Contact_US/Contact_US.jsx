import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Contact_US.css';
import { useForm } from "react-hook-form";
import https from '../https';
import toast, { Toaster } from 'react-hot-toast';

import Footer from '../Footer/Footer';
import Home_slider from '../Home_slider/Home_slider';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
export default function Contact_US() {
  const notify = () => toast.success('The Message has been added');
  const notify_error = () => toast.error('Please try agin later');
  const navigate = useNavigate();

  const { register, handleSubmit,  formState: { errors },setValue } = useForm();

  const [t,il8n]=useTranslation();

  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: '',
  // });
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const p_Style = {

    color: 'red',
  
  
  };
  function sendData(data){
    
    https.post('Messages/Store',data).then(res=>{
      // Cookies.save('token', res.data.data.Token);
      // console.log(res);
      notify()
      setValue('name','')
      setValue('email','')
      setValue('phone','')
      setValue('message','')
    }).catch(
      error=>{
        // console.log(error); 
        notify_error()

      }
    )
  
}

  return (
    <div className='Contact_Us'>
                          <Toaster />

        <NavBar/>
        <br />
        <Home_slider/>
        <br />
        <br />
        <h2>{t("Contact US")}</h2>
        <br />
        <div className="container">
            <div className='form'>
                <form onSubmit={handleSubmit(sendData)}>
                    <div className="one_input">
                      <div className='input'>

                      <label htmlFor="name" className="form-label">Name:</label>
                      <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      
                      {...register('name',{required:'Name is Required'})}/>
                      {errors.name && <p style={p_Style} className="error">{errors.name.message}</p>}
                      </div>
                      <div className="input">

                      <label htmlFor="email" className="form-label">Email:</label>
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                    {...register('email',{required:'Email is Required',pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"Invalid email address"}})}/>
                    {errors.email && <p style={p_Style} className="error">{errors.email.message}</p>}
                    </div>
                    </div>
                    <br />
                    <div className="input">

                        <label htmlFor="phone" className="form-label">Phone:</label>
                        <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        {...register('phone',{required:'phone is Required'})}/>
                        {errors.phone && <p style={p_Style} className="error">{errors.phone.message}</p>}

                    </div>


                    <br />
                    <br />
                          <div className="input">

                          <label htmlFor="message" className="form-label">message:</label>
                          <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          required
                          {...register('message',{required:'message is Required'})}
                          />
                          </div>

                    <button>{t("send")}</button>
                </form>
            </div>
            <br />
            <br />
        </div>
            <Footer/>
    </div>
  )
}
