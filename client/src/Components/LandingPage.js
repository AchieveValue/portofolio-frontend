import React, { useState, useEffect } from 'react';
import '../App.css';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import anime from 'animejs';

import NavBar from './Navbar';

import parent from './Animations';

const LandingPage = () => {
    const ComplexPath = [
        'M326.723 199.435C326.723 233.38 313.317 264.193 291.511 286.87C268.557 310.74 236.295 325.594 200.565 325.594C164.834 325.594 132.573 310.74 109.619 286.87C87.8125 264.193 74.4062 233.38 74.4062 199.435C74.4062 165.49 87.8125 134.677 109.619 112C132.573 88.1304 164.834 73.2765 200.565 73.2765C236.295 73.2765 268.557 88.1304 291.511 112C313.317 134.677 326.723 165.49 326.723 199.435Z',
        'M326.723 199.435C326.723 233.38 313.317 264.193 291.511 286.87C268.557 310.74 236.295 325.594 200.565 325.594C164.834 325.594 132.573 310.74 109.619 286.87C87.8125 264.193 74.4062 233.38 74.4062 199.435C74.4062 165.49 87.8125 134.677 109.619 112C132.573 88.1304 164.834 83.5 200.565 83.5C236.295 83.5 268.557 88.1304 291.511 112C313.317 134.677 326.723 165.49 326.723 199.435Z',
        'M318.5 199.435C318.5 233.38 316.307 267.183 294.5 289.859C271.546 313.729 236.295 320.5 200.565 320.5C164.834 320.5 139.443 303.87 116.489 280C94.6825 257.323 69 233.38 69 199.435C69 165.49 93.1934 140.058 115 117.381C137.954 93.5114 164.834 80.5 200.565 80.5C236.295 80.5 271.546 85.1409 294.5 109.011C316.307 131.687 318.5 165.49 318.5 199.435Z',
        'M327.5 199.435C327.5 233.38 307.936 258.812 286.13 281.489C263.176 305.359 236.295 312.5 200.565 312.5C164.834 312.5 130.573 312.74 107.619 288.87C85.8125 266.193 83.5 233.38 83.5 199.435C83.5 165.49 85.8125 132.677 107.619 110C130.573 86.1304 164.834 69 200.565 69C236.295 69 263.176 89.6304 286.13 113.5C307.936 136.177 327.5 165.49 327.5 199.435Z',
        'M319 199.435C319 233.38 314.807 265.683 293 288.359C270.046 312.229 236.295 327.5 200.565 327.5C164.834 327.5 137.954 305.359 115 281.489C93.1934 258.812 70 233.38 70 199.435C70 165.49 93.6934 140.558 115.5 117.881C138.454 94.0114 164.834 82 200.565 82C236.295 82 270.046 82.76 293 106.63C314.807 129.306 319 165.49 319 199.435Z',
        'M333.5 199.435C333.5 233.38 307.936 258.813 286.13 281.489C263.176 305.359 236.295 334.5 200.565 334.5C164.834 334.5 126.454 316.859 103.5 292.989C81.6934 270.313 81.4996 233.38 81.4996 199.435C81.4996 165.49 77.8124 124.677 99.619 102C122.573 78.1304 164.834 70.5 200.565 70.5C236.295 70.5 261.546 91.26 284.5 115.13C306.307 137.806 333.5 165.49 333.5 199.435Z',
        'M320 199.435C320 233.38 319.807 270.683 298 293.36C275.046 317.229 236.295 320.5 200.565 320.5C164.834 320.5 135.454 307.859 112.5 283.989C90.6934 261.312 60 233.38 60 199.435C60 165.49 77.8124 124.677 99.619 102C122.573 78.1304 164.834 82 200.565 82C236.295 82 275.046 77.7599 298 101.63C319.807 124.306 320 165.49 320 199.435Z'
    ];

    const [opened, setOpened] = useState(0);

    useEffect(() => {
        anime({
            targets: '.animatedCircle',
            d: [
              { value: ComplexPath[1] },
              { value: ComplexPath[2] },
              { value: ComplexPath[3] },
              { value: ComplexPath[4] },
              { value: ComplexPath[5] },
              { value: ComplexPath[0] },
            ],
            easing: 'easeInOutQuad',
            duration: 10000,
            loop: true
        });
    })
    
    let [caretAnimationHandels] = useState([
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ])

    useEffect(() => {
        caretAnimationHandels.map((caret, key) => {
            if(key === opened-1) {
                caret.start({
                    rotateZ: -180,
                })
            } else {
                caret.start({
                    rotateZ: 0
                })
            }

            return null;
        })
    }, [opened, caretAnimationHandels])

    return (
        <>
            <NavBar dark={false}/>
            <motion.div className="" variants={parent} initial="hidden" animate="show">
                <div className="container px-0 py-5 my-2 mx-0 d-flex align-items-center justify-content-center mx-auto">
                    <div className="row w-100 align-items-center">
                        <div className="col-12 col-lg-6 px-0 text-center text-lg-left">
                            <h1 className="poppins font-weight-bolder display-4" style={{ color: '#222335' }}>Why not join the race and order your own website?</h1>
                            <h5 className="poppins font-weight-light" style={{ fontSize: '1.1rem', color: '#18191F'}}>The new generation of bisnis is here, what are you waiting for?</h5>
                            <button className="btn px-3 py-3 poppins font-weight-medium text-light mt-4" style={{ background: '#E57016' }}><h5 className="mb-0 font-weight-bold">Get started</h5></button>
                        </div>
                        <div className="col-6 flex-column justify-content-center align-items-end d-none d-lg-flex">
                            <div className="d-block margin-auto text-center">
                                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="200" cy="200" r="200" fill="white"/>
                                    <path className="animatedCircle" d={ComplexPath[0]} fill="url(#paint0_radial)"/>
                                    <circle cx="200.565" cy="199.435" r="111.711" fill="white"/>
                                    <defs>
                                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(202.335 199.403) rotate(90) scale(129.886 130.166)">
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
                <div className="container row mx-auto mt-5 pb-5">
                    <div className="col-4 col-lg-5 px-0 d-flex flex-column justify-content-center align-items-center">
                        <h3 className="poppins font-weight-bold text-center mb-3" style={{ color: '#222335' }}>We create stunning digital products and web designs.</h3>
                        <div className="border-left text-light" style={{ width: '3px', height: '100%', background: '#AAAAAA'}}></div>
                    </div>
                        <motion.div className="col-7 col-lg-5 offset-1 offset-lg-2 px-0" style={{ color: '222335', transition: 0.5 }}>
                                <div className="">
                                    <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 1) setOpened(0); else setOpened(1)}}>
                                        <h3 className="poppins font-weight-light mr-4 mb-0">Development</h3>
                                        <motion.i class="fas fa-angle-down" animate={caretAnimationHandels[0]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                    </motion.div>
                                    <AnimatePresence exitBeforeEnter>
                                        {opened === 1 &&(<motion.h5 key='1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">Our full-stack development team is working closely with the designing team. This smooth flow results in a clean, modern and fast UI, with the latest techologies (React.js, Framer-motion and Anime.js). Besides this we'll also develop the back-end of the app, this means you will get a full, working web app in the end, without making any effort, so you can focus you time on you company. </motion.h5>)}
                                    </AnimatePresence>
                                </div>
                                <div className="mt-5 ">
                                    <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 2) setOpened(0); else setOpened(2)}}>
                                        <h3 className="poppins font-weight-light mr-4 mb-0">UI/UX Design</h3>
                                        <motion.i class="fas fa-angle-down" animate={caretAnimationHandels[1]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                    </motion.div>
                                    <AnimatePresence exitBeforeEnter>
                                        {opened === 2 &&(<motion.h5 key='2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">Our obligation is to design the most simple, yet complex aplication. Our scope is to create a modern web, so we invest alot in creating our UI/UX designs. We also test it out in the real world before approving it, so you can be sure that what goes in the production is the highest quality. For reference we work in Figma and Adobe Ilustrator.</motion.h5>)}
                                    </AnimatePresence>
                                </div>
                                <div className="mt-5 ">
                                    <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 3) setOpened(0); else setOpened(3)}}>
                                        <h3 className="poppins font-weight-light mr-4 mb-0">Marketing and SEO</h3>
                                        <motion.i class="fas fa-angle-down" animate={caretAnimationHandels[2]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                    </motion.div>
                                    <AnimatePresence exitBeforeEnter>
                                        {opened === 3 &&(<motion.h5 key='3' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">TBD Soon</motion.h5>)}
                                    </AnimatePresence>
                                </div>
                
                                <div className="mt-5 smoothResize">
                                    <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 4) setOpened(0); else setOpened(4)}}>
                                        <h3 className="poppins font-weight-light mr-4 mb-0">Maintenance</h3>
                                        <motion.i class="fas fa-angle-down" animate={caretAnimationHandels[2]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                    </motion.div>
                                    <AnimatePresence exitBeforeEnter>
                                        {opened === 4 &&(<motion.h5 key='4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">As we said we want you to have a very easy experience with us, that means our team also takes care of the application for years after it's release. If you want changes, find bugs or the technologie changes, you can let us now and it will be fixed in the least amunt of time possible.</motion.h5>)}
                                    </AnimatePresence>
                                </div>
                        </motion.div>
                </div>
                <div className="container-fluid mt-5" style={{ background: '#222335', height: '40vh' }}>
                    .
                </div>
            </motion.div>
        </>
    )
}

export default LandingPage;
