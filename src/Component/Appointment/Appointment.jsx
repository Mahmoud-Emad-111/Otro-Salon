import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './appointment.css';
import { useTranslation } from 'react-i18next';
import Footer from '../Footer/Footer';
import https from '../https';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Appointment() {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const notify_error = () => toast.error('Please try agin later');
  const navigate = useNavigate();

  const [Services, setSevices] = useState([]);
    
  useEffect(() => {

    https.get('Services/Get').then(
        res =>{
          setSevices(res.data)
            
        }
    )        

}, []);
  const [t,il8n]=useTranslation();

  function sendData(data){
    
    https.post('Appointment/Store',data).then(res=>{
      // Cookies.save('token', res.data.data.Token);
      // console.log(res);
      // setTimeout(navigate('/'),5000)
      navigate('/')
    }).catch(
      error=>{
        notify_error()

      }
    )
  
}
  return (
    <div className='Appointment'>
                                <Toaster />

      <NavBar/>
      <br />
      <br />
      <h2>{t("Book")}</h2>
      <div className="container">
      <div className="form">
            <form onSubmit={handleSubmit(sendData)}>


            <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      required
                      placeholder='Name'
                      {...register('name',{required:'Name is Required'})}/>

                      <input
                        type="number"
                        className="form-control"
                        id="phone"
                        name="phone"
                        required
                        placeholder='Phone'
                        {...register('phone',{required:'phone is Required'})}/>



                <input type="date"  name='date'{...register('date')}/>
                <select  name='service' selected={0} id="" {...register('service',{required:'Date is Required'})}>
                 {
                  Services.map((item,index)=>{
                    return (
                      <option key={index} value={item.title}>{item.title}</option>

                    )
                  })
                 }

                </select>
                <textarea
                          className="form-control"
                          id="message"
                          name="message"
                          placeholder='Message'
                          
                          {...register('message',)}
                          />            
                    <button>{t("send")}</button>
            </form>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
