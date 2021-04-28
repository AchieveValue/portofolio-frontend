import React, { useState, useRef, useEffect } from 'react';
import '../App.css';
import  { motion, useAnimation } from 'framer-motion';
import axios from 'axios';
import NavBar from './Navbar';

import parent from './Animations';

const Contact = () => {
    const buttons = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ];
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        buttons.map((button, key) => {
            if(key === selected) {
                button.start({
                    border: '2.5px solid rgb(229, 112, 53)',
                    background: 'rgb(229, 112, 53)', 
                    color: 'rgb(255, 255, 255)',
                    transition: {
                        duration: 0.2
                    }
                })
            } else {
                button.start({
                    border: '2.5px solid rgb(0,0,0)',
                    background: 'rgb(0,0,0)', 
                    color: 'rgb(255,255,255)',
                    transition: {
                        duration: 0.2
                    }
                })
            }
        })
    }, [selected])

    const email = useRef('');
    const firstName = useRef('');
    const lastName = useRef('');
    const message = useRef('');
    const [data, setData] = useState({})
    const [errors, setErrors] = useState([]);

    const checkData = () => {
        if(email.current.value.length < 3)
            setErrors(...errors, 'The email must be longer than 3 characters')
        if(email.current.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g))
            setErrors(...errors, 'The email is invalid')
        if(firstName.current.value.length > 200)
            setErrors(...errors, 'The email must not be longer than 200 characters')
        if(lastName.current.value.length > 200)
            setErrors(...errors, 'The email must not be longer than 200 characters')
        if(message.current.value.length < 5)
            setErrors(...errors, 'The email must not be longer than 5 characters')
        if(errors.length > 0){
            return;
        }
        setData(email.current.value, firstName.current.value, lastName.current.value, message.current.value)
        axios.post('/', data)
    }
    return(
        <div>
            <NavBar dark={false}/>
            <motion.div variants={parent} initial='hidden' animate='show'>
               <div className='container-fluid d-flex justify-content-center m-0 p-0 mt-4 mt-lg-0'>
                   <div className='flex-column col-4 d-none d-lg-flex' style={{marginRight:'10vw'}}>
                        <h1 className='poppins font-weight-bold'>We are happy that you are interested in our products</h1>
                        <h6 className='poppins font-weight-light py-1'>Want to learn more about our services? Submit our form and our sales represantive will contact you soon</h6>
                        <img src='https://images.pexels.com/photos/3184429/pexels-photo-3184429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='people' className='mt-4'/>
                   </div>
                    <div className='d-flex flex-column col-12 col-lg-4 px-3 py-0 mb-5 bg-white rounded'>
                        <div className="px-0">
                            <div className="bg-danger d-flex flex-column align-items-start justify-content-center px-5 py-2 rounded-lg mb-4">
                                <h6 className="text-light poppins mt-2">You have some errors</h6>
                                <p className="text-light poppins font-weight-light mb-2">-Email is invalid</p>
                            </div>
                        </div>
                        <div className='d-flex mt-0 mx-5'>
                            <div className='d-flex flex-column'>
                                <p className='mb-2 font-weight-bold'>First Name</p>
                                <input type='text' className='form-control' placeholder='eg. Michael' ref={firstName}/>
                            </div>
                            <div className='d-flex flex-column ml-5'>
                                <p className='mb-2 font-weight-bold'>Last Name</p>
                                <input type='text' className='form-control' placeholder='eg. Boris' ref={lastName}/>
                            </div>
                        </div>
                        <div className='d-flex flex-column px-5 mt-3'>
                            <p className='mb-2 font-weight-bold'>Email</p>
                            <input type='text' className='form-control' placeholder='eg. michael25@gmail.com' ref={email}/>
                        </div>
                        <div className='d-flex flex-column px-5 mt-3'>
                            <p className='mb-2 font-weight-bold'>Representative</p>
                            <select className='form-control'>
                                <option>Individual</option>
                                <option>Company</option>
                            </select>
                        </div>
                            <div>
                                <label htmlFor='' className='px-5 mt-3 font-weight-bold'>Subject</label>
                                <div className='d-flex px-5 justify-content-between'>
                                    <motion.button animate={buttons[0]} className='pr-3 mr-3 btn' onClick={() => {setSelected(0)}} style={{ boxShadow: 'none', borderRadius:'6px' }}>Front-End</motion.button>
                                    <motion.button animate={buttons[1]} className='pr-3 mr-3 btn' onClick={() => {setSelected(1)}} style={{ boxShadow: 'none', borderRadius:'6px' }}>Back-End</motion.button>
                                    <motion.button animate={buttons[2]} className='pr-3 btn' onClick={() => {setSelected(2)}} style={{ boxShadow: 'none', borderRadius:'6px' }}>Full Stack</motion.button>
                                </div>
                            </div>
                        <div className='d-flex flex-column px-5 mt-3'>
                            <p className='mb-2 font-weight-bold'>Message</p>
                            <textarea className='form-control' maxlength='255' rows='5' style={{resize:'none', overflow:'auto'}} ref={message}/>
                        </div>
                        <button className='align-self-center w-50 mt-3 btn w-75 poppins font-weight-bold text-light mt-4' style={{ background: '#e57035' }} onClick={() => checkData()}>Submit</button>
                    </div> 
               </div>
            </motion.div>
        </div>  
    )
}
export default Contact;