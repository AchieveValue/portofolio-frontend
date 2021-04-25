import React, { useState, useRef } from 'react';
import '../App.css';
import  { motion } from 'framer-motion';

import NavBar from './Navbar';

import parent from './Animations';

const Contact = () => {
    
    const input = useRef();
    const [errors, setErrors] = useState("");
    const [step, setStep] = useState(0);
    const [steps, setSteps] = useState([
        {
            placeholder: 'Email',
        },
        {
            placeholder: 'Name'
        },
        {
            placeholder: 'Message'
        }
    ]);

    const handleNextStep = () => {
        let details = [...steps];
        console.log(input.current.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g));
        if (details[step].placeholder === 'Email') {
            if(input.current.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) === null){
                setErrors(details[step].placeholder + ' the email is invalid!');
                return true;
            }
        } else {
            if(input.current.value.length < 5) {
                setErrors(details[step].placeholder + ' must be longer than 5 characters!');
                return true;
            }
        }

        setErrors();
        details[step].data = input.current.value;
        input.current.value = (details[step + 1].data ? details[step + 1].data  : '');
        setStep(last => ++last);
        console.log(details);
        setSteps(details);
    }
    
    const handleBackStep = () => {
        setStep(last => --last);
        input.current.value = steps[step-1].data;
    }

    const handleKeyDown = (key) => {
        if(key === 13) {
            return true;
        }
        return;    
    }
    
    const handleSend = () => {
        let details = [...steps];
        if(input.current.value.length < 15 || input.current.value.length > 255){
            setErrors(details[step].placeholder + ' must be longer than 15 characters!');
            return true;
        }
        setErrors();

        details[step].data = input.current.value;
        console.log(details);
    }

    return(
        <div style={{height: '100vh', witdh:'100vw', background: '#E57016'}}>
            <NavBar dark={false}/>
            <motion.div className="" variants={parent} initial="hidden" animate="show">
                <div className='container-fluid px-0' style={{marginTop:'7%'}}>
                    <div className='container h-25 pt-5 px-0 mb-3'>
                        <h1 className="rightenous font-weight-bold text-white">Let’s talk <br /> Enter your project details</h1>
                    </div>
                    <div className="w-100 container px-3 rounded-lg py-3 text-light poppins font-weight-bold d-flex justify-content-between align-items-center" style={{ background: '#C35B0B', fontSize: '1.4em', color: 'white' }}>
                        {(step > 0 ? <i className="fas fa-arrow-left" style={{ fontSize: '2em' }} onClick={() => { handleBackStep(); }}></i> : '')}
                        <input ref={input} type="text" className="w-75 contact" style={{ background: 'none', border: 'none', outline: 'none', color: 'white' }} placeholder={steps[step].placeholder}/>
                        {(step < steps.length-1 ? <i className="fas fa-arrow-right" style={{ fontSize: '2em' }} onClick={() => { handleNextStep() }}></i> :  <i className="fas fa-check" style={{ fontSize: '2em' }} onClick={()=>{handleSend()}}></i>)}
                    </div>
                    <div className="container px-0 mt-2 center" >{(errors ? <h4 clsasName="poppins font-weight-light m-0 px-3 py-1 rounded-lg" style={{ color: '#840000' }}>{errors}</h4> : '')}</div>
                </div>
            </motion.div>
        </div>  
    )
}
export default Contact;