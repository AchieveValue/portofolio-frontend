import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { useWindowDimensions } from '../Functions'

import parent from './Animations';

const Footer = () => {
    const { width } = useWindowDimensions();

    const children = {
        hidden: {
            opacity: 0, 
            x: (width < 900 ? 0 : -600) 
        },
        show: {
            x: 0, 
            opacity: 1,
            transition: {
                duration: 0.8, 
                ease: "easeOut"  
            }
        }
    }

    return (
        <motion.div variants={parent} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <LazyLoad height={300}>
                <motion.div className="container" variants={children} initial="hidden" animate="show" style={{ background: '#FFFFFF' }}>
                    <div className="container row d-flex align-items-center justify-content-center justify-content-lg-between w-100 py-5 px-0 m-0" style={{ padding: '9%' }}>
                        <div className="col-12 text-center text-lg-left col-lg-5 mb-3 mb-lg-0 d-flex align-items-center align-items-lg-start flex-column px-0">
                            <h1 className="poppins mb-1" style={{ color: '#222335', fontWeight: 600 }}>Newsletter</h1>
                            <h6 className="poppins w-75" style={{ color: '#12121A', fontWeight: 400 }}>Get our latest insights on how to get the most out of your webiste (est. 5 emails/month).</h6>
                        </div>
                        <div className="col-8 col-lg d-flex align-items-center flex-column">
                            <input type="email" className="w-100 newsletterInput pb-2 text-center text-lg-left" placeholder="Your Email Address"/>
                        </div>
                        <div className="col-12 col-lg-2 d-flex align-items-center flex-column mt-4 mt-lg-0"><button className="btn newsletterButton ml-lg-5 px-4" style={{ cursor: "not-allowed" }} disabled>Soon!</button></div>
                    </div>
                </motion.div>
            </LazyLoad>
            
            <div className="container-fluid" style={{ background: '#1E2021' }}>
                <div className="container d-flex align-items-center justify-content-between w-100 py-5 px-0 text-light poppins flex-column flex-md-row" style={{ padding: '9%' }}>
                    <div className="container d-flex align-items-start justify-content-center flex-column">
                        <h4 className="rightenous mb-4">AchieveValue</h4>
                        <h6 className="font-weight-light mb-3">Company</h6>
                        <h6 className="font-weight-light mb-3">Home</h6>
                        <h6 className="font-weight-light mb-3">Services</h6>
                        <h6 className="font-weight-light mb-3">Privacy Policy</h6>
                        <h6 className="font-weight-light mb-3">Our Regulations</h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-center flex-column text-center w-50 mt-4 mt-md-0">
                        <h6 className="mb-0 poppings font-weight-light">stay informed</h6>
                        <h4 className="rightenous">Follow us here</h4>
                        <div className="d-flex align-items-center justify-content-around w-100" style={{ fontSize: '3em'}}>
                            <a href="https://twitter.com/AchieveValue" style={{ color: 'white' }}><i className="fab fa-twitter"></i></a>
                            <a href="https://www.facebook.com/Achieve-Value-102954528590025" style={{ color: 'white' }}><i className="fab fa-facebook"></i></a>
                            <a href="https://www.instagram.com/achieve_value/" style={{ color: 'white' }}><i className="fab fa-instagram-square"></i></a>
                            <a href="https://discord.gg/4G9Tj7Ym" style={{ color: 'white' }}><i className="fab fa-discord"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Footer;