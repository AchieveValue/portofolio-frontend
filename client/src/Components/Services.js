import React from 'react';
import '../App.css';

import NavBar from './Navbar';

import parent from './Animations';

const Services = () => {
    return(
        <>
            <NavBar dark={false}/>
            <div class="" variants={parent} initial="hidden" animate="show">
                <div className='container d-flex px-0'>
                    <div className='d-flex justify-content-center align-items-center w-100 row flex-column mt-5 mx-0'>
                        <h1 className='poppins text-center'><span style={{color:'#e57016'}}>Our services</span> have <br />friendly packages</h1>
                        <p>Pick the plan that works best for your company</p>
                    </div>
                </div>
                <div className='d-flex w-100 mx-auto row justify-content-center align-items-center px-0 mt-5 mx-0 mb-5'>
                    {/* card 1 */}
                    <div className='col-2 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-5 mb-5' style={{ background: '#222335', borderRadius: '40px', height:'' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/rvXtFVN/wind-2.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Front-end development</h5></div>
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid white' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Web design</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Navigation</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and contact</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and contact</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain Set up</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>$300</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Choose</h5></button>
                        </div>
                    </div>
                    {/* card 2 */}
                    <div className='col-2 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-5 mb-5' style={{ background: '#222335', borderRadius: '40px' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/rvXtFVN/wind-2.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Full website development</h5></div>
                
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid white' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Web design</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Data base</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Navigation</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and contact</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain Set up</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>$500</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Choose</h5></button>
                        </div>
                    </div>
                    {/* card 3 */}
                    <div className='col-2 px-0 d-flex flex-column text-light pt-1 shadow-lg mr-5 mb-5' style={{ background: '#222335', borderRadius: '40px' }}>
                        <div className='d-flex align-items-center mb-3 w-75'><img src='https://i.ibb.co/rvXtFVN/wind-2.png' alt="" className='m-3' /><h5 className='rightenous text-center'>Back-end development</h5></div>
                
                        <div className='mx-3 pb-5' style={{ borderBottom: '2px solid white' }}>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Data base</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Newsletter and contact</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain Set up</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain Set up</h6></div>
                                <div className='mb-2 px-3 mt-2'><h6 className='poppins font-weight-light'><i className='fas fa-check-circle mr-4' style={{ color: '#32ba7c' }}></i>Domain Set up</h6></div>
                            </div>
                        <div className='d-flex flex-column w-100 align-items-center justify-content-center'>
                            <h4 className='mt-4 mb-4 poppins font-weight-bold'>$200</h4>
                            <button className='btn text-light poppins font-weight-regular w-100 py-2' style={{ background: '#E57016', borderRadius: '5px 5px 40px 40px' }}><h5 className='mb-0'>Choose</h5></button>
                        </div>
                    </div>
                </div>
                <div className='container-fluid mt-5 text-white' style={{background: '#222335'}}>
                    <div className='container d-flex flex-column align-items-center justify-content-center'>
                            <div className='col-10 d-flex align-items-center justify-content-between'>
                                <div className='mt-5 w-auto mr-5'>
                                    <img src='https://images.pexels.com/photos/1181673/pexels-photo-1181673.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' style={{maxWidth: '400px'}}/>
                                </div>
                                <div className='mt-5 d-flex flex-column align-items-start justify-content-center'>
                                    <h1 className='rightenous' style={{color:'#e57016'}}>Development</h1>
                                    <h4 className='poppins'>React</h4>
                                    <h4 className='poppins'>Node</h4>
                                    <h4 className='poppins'>HTML/JS/CSS</h4>
                                </div>
                            </div>
                            <div className='col-10 d-flex align-items-center justify-content-between'>
                                <div className='mt-5 d-flex flex-column align-items-start justify-content-center'>
                                    <h1 className='rightenous' style={{color:'#e57016'}}>Strategy</h1>
                                    <h4 className='poppins'>Research</h4>
                                    <h4 className='poppins'>UI/UX audit</h4>
                                    <h4 className='poppins'>Stakeholder workshop</h4>
                                    <h4 className='poppins'>Product strategy</h4>
                                </div>
                                <div className='mt-5 w-auto'>
                                    <img src='https://images.pexels.com/photos/6612381/pexels-photo-6612381.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='' style={{maxHeight: '400px'}}/>
                                </div>
                            </div>
                            <div className='col-10 d-flex align-items-center justify-content-between'>
                                <div className='mt-5 w-auto'>
                                    <img src='https://images.pexels.com/photos/6611919/pexels-photo-6611919.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='' style={{maxHeight: '400px'}}/>
                                </div>
                                <div className='mt-5 d-flex flex-column align-items-start justify-content-center'>
                                    <h1 className='rightenous' style={{color:'#e57016'}}>Content</h1>
                                    <h4 className='poppins'>Animation</h4>
                                    <h4 className='poppins'>Animation</h4>
                                    <h4 className='poppins'>beng beng beng</h4>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                
        </>
    )
}
export default Services;