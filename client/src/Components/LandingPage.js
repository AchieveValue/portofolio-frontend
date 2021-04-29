import React, { useState, useEffect } from 'react';
import '../App.css';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import anime from 'animejs';
import LazyLoad from 'react-lazyload';
import { useHistory } from 'react-router-dom';

import NavBar from './Navbar';

import parent from './Animations';

const LandingPage = () => {    
    let fuckYouVercelCauseYouAreStupidSometimes;
    const location = useHistory();

    // Our services handing varibale
    const [opened, setOpened] = useState(0);

    let [caretAnimationHandels] = useState([
        useAnimation(),
        useAnimation(),
        useAnimation(),
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

    // FAQ Section handling and initalisation
    
    const [faqContent, setFaqContent] = useState([ 
        {
            id: 0,
            question: 'What are your areas of focus as a web design and development company?',
            answer: `For us, the user experience is the most important aspect when we do our designs. Keeping this in mind, our agency does its best to create a smooth and flawless web experience for your users. \n \nBesides this, we also develop our designs in a technology that is suitable for the project (often MERN Stack).`,
            active: false,
        },
        {
            id: 1,
            question: 'How much it would cost if I hire you?',
            answer: `Our pricing is directly associated with the project scope, timeline, budget and requirements. However, most of our services are fixed‑price. In this case, we’ll give you a detailed proposal after learning as much as possible about your project. If you have a project, please email us to get a more precise offer.`,
            active: false,
        },
        {
            id: 2,
            question: 'What is the estimated time of response?',
            answer: `We try our best to respond within 24 hours with a detailed plan and a fixed price.`,
            active: false,
        },
        {
            id: 3,
            question: 'What process should I expect from your UX agency?',
            answer: `We like to have a more concentrated process, so your project will go through several phases:\n

            Discovery & Research
            We like to start by better understanding the needs, requirements and purpose of your project. If possible, we'll also interview users in the target group to create the most appropriate solution. In some cases, we will also analyze your company's products so that our solution blends in perfectly.
            \n
            UI/UX Design
            We will start the design stage with the things learned earlier in mind. We aim to create a minimum of 2-3 prototypes. You will have the final decision on which one to use, but we will also ask for opinions from the target group of your project. We also ensure that our website is mobile-friendly, because we know how important that is.
            \n
            Development
            In this stage, your project will be divided into 2 categories: frontend and backend. We develop these two categories separately and in the end, we combine them. We will test everything before we deliver the completed project to you, to make sure that everything goes as it should.`,
            active: false,
        }
    ]);
    const faqCarets = [
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
        useAnimation(),
    ]

    const handleFAQClick = (key) => {
        let localFAQcontent = [...faqContent];
        localFAQcontent[key].active = !localFAQcontent[key].active;
        setFaqContent(localFAQcontent);
    } 

    // Circle animation SVG Paths and control
    const ComplexPath = [
        'M385 200C385 225.063 380.016 248.963 370.985 270.761C361.051 294.739 346.219 316.175 327.738 333.821C313.024 347.871 295.996 359.518 277.284 368.133C253.766 378.961 227.588 385 200 385C172.412 385 146.234 378.961 122.716 368.133C104.004 359.518 86.9763 347.871 72.2619 333.821C53.7808 316.175 38.9495 294.739 29.0152 270.761C19.9841 248.963 15 225.063 15 200C15 174.937 19.9841 151.037 29.0152 129.239C38.9495 105.261 53.7808 83.825 72.2619 66.1789C86.9763 52.1293 104.004 40.482 122.716 31.8667C146.234 21.0388 172.412 15 200 15C227.588 15 253.766 21.0388 277.284 31.8667C295.996 40.482 313.024 52.1293 327.738 66.1789C346.219 83.825 361.051 105.261 370.985 129.239C380.016 151.037 385 174.937 385 200Z',
        'M398 199C398 224.063 380.016 248.963 370.985 270.761C361.051 294.739 357.481 327.437 339 345.083C324.286 359.133 295.996 359.518 277.284 368.133C253.766 378.961 227.588 398 200 398C172.412 398 146.234 378.961 122.716 368.133C104.004 359.518 75.7144 359.133 61 345.083C42.5189 327.437 38.9495 294.739 29.0152 270.761C19.9841 248.963 2 225.063 2 200C2 174.937 19.9841 151.037 29.0152 129.239C38.9495 105.261 45.1019 75.1461 63.583 57.5C78.2974 43.4504 104.004 40.482 122.716 31.8667C146.234 21.0388 172.412 3 200 3C227.588 3 253.766 21.0388 277.284 31.8667C295.996 40.482 327.203 37.9504 341.917 52C360.398 69.6461 361.051 105.261 370.985 129.239C380.016 151.037 398 173.937 398 199Z',
        'M385.002 200C385.002 225.064 401.031 257.202 392 279C382.066 302.978 346.221 316.175 327.74 333.821C313.025 347.871 309.712 376.385 291 385C267.482 395.828 227.59 385 200.001 385C172.413 385 139.019 398.828 115.501 388C96.7893 379.385 86.9778 347.871 72.2634 333.821C53.7823 316.175 15.9344 302.978 6.00006 279C-3.03103 257.202 15.0015 225.064 15.0015 200C15.0015 174.937 -0.0304532 142.298 9.00063 120.5C18.935 96.5217 53.7823 83.8252 72.2634 66.1791C86.9778 52.1295 96.7893 20.1154 115.501 11.5001C139.019 0.672186 172.413 15.0002 200.001 15.0002C227.59 15.0002 262.482 4.17233 286 15.0002C304.712 23.6156 313.025 52.1295 327.74 66.1791C346.221 83.8252 375.067 96.5217 385.002 120.5C394.033 142.298 385.002 174.937 385.002 200Z',
        'M327.5 199.435C327.5 233.38 307.936 258.812 286.13 281.489C263.176 305.359 236.295 312.5 200.565 312.5C164.834 312.5 130.573 312.74 107.619 288.87C85.8125 266.193 83.5 233.38 83.5 199.435C83.5 165.49 85.8125 132.677 107.619 110C130.573 86.1304 164.834 69 200.565 69C236.295 69 263.176 89.6304 286.13 113.5C307.936 136.177 327.5 165.49 327.5 199.435Z',
        'M319 199.435C319 233.38 314.807 265.683 293 288.359C270.046 312.229 236.295 327.5 200.565 327.5C164.834 327.5 137.954 305.359 115 281.489C93.1934 258.812 70 233.38 70 199.435C70 165.49 93.6934 140.558 115.5 117.881C138.454 94.0114 164.834 82 200.565 82C236.295 82 270.046 82.76 293 106.63C314.807 129.306 319 165.49 319 199.435Z',
        'M333.5 199.435C333.5 233.38 307.936 258.813 286.13 281.489C263.176 305.359 236.295 334.5 200.565 334.5C164.834 334.5 126.454 316.859 103.5 292.989C81.6934 270.313 81.4996 233.38 81.4996 199.435C81.4996 165.49 77.8124 124.677 99.619 102C122.573 78.1304 164.834 70.5 200.565 70.5C236.295 70.5 261.546 91.26 284.5 115.13C306.307 137.806 333.5 165.49 333.5 199.435Z',
        'M320 199.435C320 233.38 319.807 270.683 298 293.36C275.046 317.229 236.295 320.5 200.565 320.5C164.834 320.5 135.454 307.859 112.5 283.989C90.6934 261.312 60 233.38 60 199.435C60 165.49 77.8124 124.677 99.619 102C122.573 78.1304 164.834 82 200.565 82C236.295 82 275.046 77.7599 298 101.63C319.807 124.306 320 165.49 320 199.435Z'
    ];

    useEffect(() => {
        anime({
            targets: '.animatedCircle',
            d: [
            { value: ComplexPath[1] },
            { value: ComplexPath[2] },
            { value: ComplexPath[1] },
            //   { value: ComplexPath[2] },
            //   { value: ComplexPath[3] },
            //   { value: ComplexPath[4] },
            //   { value: ComplexPath[5] },
            //   { value: ComplexPath[4] },
            //   { value: ComplexPath[3] },
            //   { value: ComplexPath[2] },
            //   { value: ComplexPath[1] },
            ],
            easing: 'easeInOutQuad',
            duration: 4000,
            loop: true
        });
    })
    
    return (
        <>
            <NavBar dark={false}/>
            <motion.div className="" variants={parent} initial="hidden" animate="show">
                <div className="container px-0 py-5 my-2 mx-0 d-flex align-items-center justify-content-center mx-auto">
                    <div className="row w-100 align-items-center">
                        <div className="col-12 col-lg-6 px-0 text-center text-lg-left">
                            <h1 className="poppins font-weight-bolder display-4" style={{ color: '#222335' }}>Get your next gen website now</h1>
                            <h5 className="poppins font-weight-light" style={{ fontSize: '1.1rem', color: '#18191F'}}>We are here to innovate, modernize and improve. Welcome the AchieveValue team.</h5>
                            <button className="btn px-3 py-3 poppins font-weight-medium text-light mt-4" style={{ background: '#E57016' }} onClick={() => location.push('/services')}><h5 className="mb-0 font-weight-bold">Get started</h5></button>
                        </div>
                        <div className="col-6 flex-column justify-content-center align-items-end d-none d-lg-flex">
                            <div className="d-block margin-auto text-center">
                                <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="400" height="400" fill="white"/>
                                    <path className="animatedCircle" d={ComplexPath[1]} fill="url(#paint0_radial)"/>
                                    <ellipse cx="200" cy="200" rx="167" ry="168" fill="white"/>
                                    <defs>
                                    <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(217.554 197.364) rotate(90) scale(201.254 185.236)">
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
                <LazyLoad height={200}>
                    <div className="container row mx-auto mt-5 pb-5">
                        <div className="col-4 col-lg-5 px-0 d-flex flex-column justify-content-center align-items-center">
                            <h3 className="poppins font-weight-bold text-center mb-3" style={{ color: '#222335' }}>We create stunning digital products and web designs.</h3>
                            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: 'spring', delay: 3, damping: 10, stiffness: 200 }} className="border-left text-light" style={{ width: '3px', height: '100%', background: '#AAAAAA'}}></motion.div>
                        </div>
                        <motion.div className="col-7 col-lg-5 offset-1 offset-lg-2 px-0" style={{ color: '#222335', transition: 0.5 }}>
                            <div className="">
                                <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 1) setOpened(0); else setOpened(1)}}>
                                    <h3 className="poppins font-weight-light mr-4 mb-0">Development</h3>
                                    <motion.i className="fas fa-angle-down" animate={caretAnimationHandels[0]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                </motion.div>
                                <AnimatePresence exitBeforeEnter>
                                    {opened === 1 &&(<motion.h5 key='1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">Our full-stack development team is working closely with the designing team. This smooth flow results in a clean, modern and fast UI, with the latest technologies (React.js, Framer-motion and Anime.js). We'll also do the back-end of the app, which means you will get a finished, unique web app, fit to your needs, with little effort from you</motion.h5>)}
                                </AnimatePresence>
                            </div>
                            <div className="mt-5 ">
                                <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 2) setOpened(0); else setOpened(2)}}>
                                    <h3 className="poppins font-weight-light mr-4 mb-0">Web Design</h3>
                                    <motion.i className="fas fa-angle-down" animate={caretAnimationHandels[1]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                </motion.div>
                                <AnimatePresence exitBeforeEnter>
                                    {opened === 2 &&(<motion.h5 key='2' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">Our obligation is to design the most simple, yet complex application. Our scope is to create a modern web, so we invest a lot in creating our UI/UX designs. We also test it out in the real world before approving it, so you can be sure that what goes in the production is the highest quality. For reference, we work in Figma and Adobe Illustrator.</motion.h5>)}
                                </AnimatePresence>
                            </div>
                            <div className="mt-5 ">
                                <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 3) setOpened(0); else setOpened(3)}}>
                                    <h3 className="poppins font-weight-light mr-4 mb-0">Marketing and SEO</h3>
                                    <motion.i className="fas fa-angle-down" animate={caretAnimationHandels[2]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                </motion.div>
                                <AnimatePresence exitBeforeEnter>
                                    {opened === 3 &&(<motion.h5 key='3' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">We also offer a comprehensive array of professional SEO (Search Engine Optimization) services to get your business the most visibility, using the industry standard SEO techniques. We also know a multitude of marketing strategies that will fit your needs.</motion.h5>)}
                                </AnimatePresence>
                            </div>
                            <div className="mt-5">
                                <motion.div whileHover={{ color: '#E57016', cursor: 'pointer' }} className="d-flex align-items-center" onClick={() => {if(opened === 4) setOpened(0); else setOpened(4)}}>
                                    <h3 className="poppins font-weight-light mr-4 mb-0">Maintenance</h3>
                                    <motion.i className="fas fa-angle-down" animate={caretAnimationHandels[3]} transition={{ duration: 0.5, ease: 'backInOut' }}></motion.i>
                                </motion.div>
                                <AnimatePresence exitBeforeEnter>
                                    {opened === 4 &&(<motion.h5 key='4' initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ x: 110, opacity: 0 }} transition={{ duration: 0.4, delay: 0.5, ease: 'easeInOut' }} className="poppins font-weight-light mt-4 mb-0 w-100">As we said we want you to have a very easy experience with us, which means our team also takes care of the application for years after its release. If you want changes, find bugs or technology changes, you can let us know and it will be fixed in the least amount of time possible.</motion.h5>)}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>
                </LazyLoad>
                    <div className="container-fluid mt-5 text-light d-flex flex-column align-items-center justify-content-center py-5 text-center" style={{ background: '#222335' }}>
                        <h3 className="poppins font-weight-bold">We believe in a smooth, enjoyable <br /> <span className="" style={{ color: '#E57016' }}>web experience</span></h3>
                        <h6 className="poppins font-weight-light w-50 mt-4 d-none d-lg-block">We want to innovate as many websites as possible because we want a more fast, happy, connected and motivated world. And AchieveValue is built to help to achieve this goal.</h6>
                        <h6 className="poppins font-weight-light w-100 mt-4 d-block d-lg-none">We want to innovate as many websites as possible because we want a more fast, happy, connected and motivated world. And AchieveValue is built to help to achieve this goal.</h6>
                    </div>
                    <div className="container-fluid text-light d-flex flex-column align-items-left justify-content-center py-5" style={{ background: '#222335' }}>
                        <div className="container poppins">
                            <h5 className="rightenous" style={{ color: '#E57016' }}>FAQ</h5>
                            {
                                faqContent.map((question, key) => {
                                    if(question.active) {
                                        faqCarets[key].start({
                                            rotateZ: -180,
                                        })
                                    } else {
                                        faqCarets[key].start({
                                            rotateZ: 0
                                        })
                                    }
                                    return (
                                        <div className="" key={'container' + key}>
                                            <motion.h5 whileHover={{ color: '#E57016' }} className={( key === 0 ? "mt-5" : "mt-4" )} style={{ fontWeight: 300, color: 'rgba(255, 255, 255, 1)', cursor: 'pointer' }} onClick={() => {handleFAQClick(key)}}>{question.question}<motion.i className="fas fa-angle-down ml-3" transition={{ duration: 0.3, ease: 'backInOut' }} style={{ fontSize: '0.9em', cursor: 'pointer' }} animate={faqCarets[key]}></motion.i></motion.h5>
                                            <AnimatePresence exitBeforeEnter>{question.active && (<motion.h6 style={{ color: '#818195' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ y: 40, opacity: 0 }} transition={{ duration: 0.3, delay: 0.3, ease: 'easeInOut' }} className="poppins font-weight-light mt-3 w-100 mb-5" key={key}>{question.answer.split('\n').map(text => {return <>{text}<br /></>})}</motion.h6>)}</AnimatePresence>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="container-fluid" style={{ background: '#E57016' }}>
                        <div className="container-fluid py-5" style={{ background: '#E57016' }}>
                            <div className="container text-center text-lg-left text-light">
                                <h5 className="rightenous">Want to know more?</h5>
                                <h1 className="poppins font-weight-bold mt-3">Let's talk.</h1>
                                <h3 className="poppins font-weight-light mt-4"><span className="px-1" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.6)', width: 'auto' }}>hey@achievevalue.tech</span></h3>
                            </div>
                        </div>
                    </div>
            </motion.div>
        </>
    )
}

export default LandingPage;
