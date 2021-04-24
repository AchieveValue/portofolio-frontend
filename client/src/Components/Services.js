import React from 'react';
import '../App.css';
import  { motion } from 'framer-motion';

import NavBar from './Navbar';

import parent from './Animations';

const Services = () => {
    return(
        <>
            <NavBar dark={false}/>
            <motion.div className="" variants={parent} initial="hidden" animate="show">
                <div className='container d-flex px-0'>
                    <div className='d-flex justify-content-center align-items-center w-100 row flex-column mt-5 mx-0'>
                        <h1 className='poppins text-center'><span style={{color:'#e57016'}}>Our services</span> have <br />friendly packages</h1>
                        <p>Pick the plan that works best for your company</p>
                    </div>
                </div>
                <div className='d-flex w-100 mx-auto flex-column flex-lg-row row justify-content-center align-items-center px-0 mt-5 mx-0 mb-5'>
                    {/* card 1 */}
                    <div className='col-10 offset-1 col-md-5 col-lg-4 col-xl-2 offset-md-0 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-5 mb-5' style={{ background: '#222335', borderRadius: '40px', height:'' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/rvXtFVN/wind-2.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Front-end development</h5></div>
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.5)' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Web Design</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Design implementation on the web</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Testing</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Deployment</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain linking</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>    
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>Not set yet</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Learn More</h5></button>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='col-10 col-md-5 col-lg-4 col-xl-2 offset-md-0 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-xl-5 mb-5' style={{ background: '#222335', borderRadius: '40px' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/52mK79v/wind-3.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Full website development</h5></div>
                
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.5)' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Web Design</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Design implementation on the web</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Server Development</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Database Integration</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and custom functionalities</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain linking</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Deployment</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>Not set yet</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Learn More</h5></button>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='col-10 col-md-5 col-lg-4 col-xl-2 offset-lg-0 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-xl-5 mb-5' style={{ background: '#222335', borderRadius: '40px' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/wyrJhb9/wind-1.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Back-end development</h5></div>
                
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid rgba(255, 255, 255, 0.5)' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Server Development</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Database Integration</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and custom functionalities</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>Not set yet</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Learn More</h5></button>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5 text-white' style={{background: '#222335'}}>
                    <div className='container d-flex flex-column align-items-center justify-content-center py-5'>
                            <div className='col-10 d-flex align-items-center justify-content-center justify-content-lg-between flex-column-reverse flex-lg-row mt-5 mt-lg-0'>
                                <div className='w-auto'>
                                    <img src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' style={{maxWidth: '300px'}}/>
                                </div>
                                <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-4 mb-lg-0'>
                                    <h2 className='rightenous' style={{color:'#e57016'}}>Development</h2>
                                    <h5 className='poppins font-weight-light'>Front-End (Reactjs, Framer-Motion, Animejs)</h5>
                                    <h5 className='poppins font-weight-light'>Back-End (Nodejs, Express, MongoDB)</h5>
                                    <h5 className='poppins  font-weight-light'>Unit Testing (Mocha, Chai)</h5>
                                    <h5 className='poppins  font-weight-light'>Blockchain (Solidity, Rust, Hardhat)</h5>
                                </div>
                            </div>
                            <div className='col-10 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row mt-5 mt-lg-0'>
                                <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-4 mb-lg-0'>
                                    <h2 className='rightenous' style={{color:'#e57016'}}>Design</h2>
                                    <h5 className='poppins font-weight-light'>Research</h5>
                                    <h5 className='poppins font-weight-light'>UI Design</h5>
                                    <h5 className='poppins font-weight-light'>UX Design</h5>
                                    <h5 className='poppins font-weight-light'>UI/UX audit</h5>

                                </div>
                                <div className='w-auto'>
                                    <img src='https://images.pexels.com/photos/6612381/pexels-photo-6612381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' style={{maxWidth: '300px'}}/>
                                </div>
                            </div>
                            <div className='col-10 d-flex align-items-center justify-content-center justify-content-lg-between flex-column-reverse flex-lg-row mt-5 mt-lg-0'>
                                <div className='w-auto'>
                                    <img src='https://images.pexels.com/photos/6611919/pexels-photo-6611919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' style={{maxWidth: '300px'}}/>
                                </div>
                                <div className='d-flex flex-column align-items-center align-items-lg-start justify-content-center mb-4 mb-lg-0'>
                                    <h2 className='rightenous' style={{color:'#e57016'}}>Marketing and <br /> maintenance</h2>
                                    <h5 className='poppins font-weight-light'>Marketing</h5> 
                                    <h5 className='poppins font-weight-light'>SEO</h5>
                                    <h5 className='poppins font-weight-light'>Bug fixing</h5>
                                </div>
                            </div>
                        </div>
                    </div>
            </motion.div>
                
        </>
    )
}
export default Services;