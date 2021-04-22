import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import anime from 'animejs';

import NavBar from './Navbar';

import parent from './Animations';

const LandingPage = () => {
    const path = [
       'M337 200.5C337 275.604 274.618 336.5 199.5 336.5C124.389 336.5 63.5 275.611 63.5 200.5C63.5 125.399 124.88 66 200 66C275.123 66 337 125.401 337 200.5Z',
       'M337 200.5C337 275.604 274.618 336.5 199.5 336.5C124.389 336.5 63.5 275.611 63.5 200.5C63.5 162.938 78.852 125.429 103.605 97.3103C128.357 69.1932 162.479 50.5 200 50.5C237.522 50.5 271.768 69.1935 296.646 97.3112C321.524 125.43 337 162.94 337 200.5Z'
    ];

    return (
        <>
            <NavBar dark={false}/>
            <div className="container px-0 py-5 my-2 mx-0 d-flex align-items-center justify-content-center mx-auto">
                <div className="row w-100 align-items-center">
                    <div className="col-6 px-0">
                        <h1 className="poppins font-weight-bolder display-4">Why not join the race and order your own website?</h1>
                        <h5 className="poppins font-weight-light" style={{ fontSize: '1.1rem'}}>The new generation of bisnis is here, what are you waiting for?</h5>
                        <button className="btn px-3 py-2 poppins font-weight-medium text-light mt-4" style={{ background: '#E57016' }}>Get started</button>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center"> 
                        <div className="d-block margin-auto text-center">
                            <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="400" height="400" fill="white"/>
                                <path className="animatedCircle" d={path[0]} fill="url(#paint0_radial)" stroke="white"/>
                                <circle cx="199.5" cy="200.5" r="114.5" fill="white"/>
                                <defs>
                                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(201.415 200.465) rotate(90) scale(140.533 140.836)">
                                <stop stop-color="#E57016" stop-opacity="0.9"/>
                                <stop offset="0.0001" stop-color="#E57016" stop-opacity="0.9"/>
                                <stop offset="0.916667" stop-color="#E57016" stop-opacity="0.6"/>
                                <stop offset="0.963542" stop-color="#E57016" stop-opacity="0.9"/>
                                </radialGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage;