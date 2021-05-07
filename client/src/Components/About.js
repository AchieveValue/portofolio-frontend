import React, { useState, useEffect } from 'react';
import '../App.css';
import { motion, useAnimation } from 'framer-motion';
import LazyLoad from 'react-lazyload';
import { useWindowDimensions } from '../Functions'

import NavBar from './Navbar';

import parent from './Animations';

const About = () => {
    const { width } = useWindowDimensions();
    const [ourTeamContent] = useState([
        {
            animate: useAnimation(),
            id: 0,
            nume: 'Bunea Andrei',
            pozitie: 'Founder & Full Stack Developer',
            descriere: `Hi, my name is Andrei and I am the founder of the AchieveValue team, but also a full-stack web developer. In the last 4 years, I have had the opportunity to understand the needs of this field. Therefore I started this team. The better enterprise focuses on the web-based realm than ever before, thus resulting in a very high demand for quality websites. We are here to sort out this and provide the fastest, contemporary and appealing digital products.`
        },
        {
            animate: useAnimation(),
            id: 1,
            nume: 'Jomaa Abbas',
            pozitie: 'Co-Founder & Full Stack Developer',
            descriere: `Hey there! I am Abbas. I’m currently one of Achieve Value’s co-founders and web developers. I’ve been in the field for the past three years, and I joined the team because I genuinely believe teenagers and young adults represent today’s society’s best division, as more and more next-visionary, risk-taking and passionate developers are able to build up and revivify businesses, in the online era.! `
        },
        {
            animate: useAnimation(),
            id: 2,
            nume: 'Kevin Porter',
            pozitie: 'Back-end Developer',
            descriere: `Hello! I’m Kevin. I’m currently 18 years old, and I primarily write code for AV (AchieveValue’s) back-end. I joined the team so I could gain experience in a variety of fields, such as the back-end, front-end, UI design, and gain proficiency in working with other like-minded people. I’m never afraid to start a new project or to learn a new skill, and I’ll always put my best foot forward so I can be the best at any task I do.`
        },
        {
            animate: useAnimation(),
            id: 3,
            nume: 'Bîra Paola',
            pozitie: 'Project Manager & Social Media Expert',
            descriere: `My name is Paola Bîra, I’m 18 years old and I am the project manager and social media expert of the team. I have the responsibility of planning and organizing the projects and making our service more accessible through social media. I am here to make this the dream team and to assure that our clients will get the best experience.`
        },
        {
            animate: useAnimation(),
            id: 4,
            nume: 'Denisa Bodea',
            pozitie: 'Graphic & UI Designer',
            descriere: `Hello! My name is Denisa, I’m 17 years old and I am the graphic designer of the team. I love to put my creativity into our projects, illustrate them and see the result of my work. I joined this team in order to develop skills in this field and evolve along with the team. I am ready to use my knowledge to create proper designs and learn new things to implement.`
        },
    ]);
    const [selectedTeamate, setSelectedTeamate] = useState(ourTeamContent[0]);

    const progressBar = useAnimation();
    const [selectedCheckPoint, setSelectedCheckPoint] = useState(1);
    const checkpoints = [
        {
            title: 'The beginings',
            content: 'This was a big year, when all it started.: We had a lot of fun but still learning a lot in: the field of programming.',
            month: 'November',
            year: '2016'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'January',
            year: '2017'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'March',
            year: '2017'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'June',
            year: '2017'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'July',
            year: '2017'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'February',
            year: '2018'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'November',
            year: '2018'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'March',
            year: '2019'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'December',
            year: '2019'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'November',
            year: '2020'
        },
        {
            title: 'The beginings',
            content: 'The moment it all started',
            month: 'March',
            year: '2021'
        },
        {
            title: 'The present',
            content: 'We started developing this webiste:adadadadadadadadadadadadadad:',
            month: 'April',
            year: '2021'
        },
    ];
    useEffect(() => {
        progressBar.start({
            width: (width > 900 ? (selectedCheckPoint * 8.33333333 + "%") : "0%"),
            transition: {
                duration: 1.5,
                delay: 0.02,
                ease: 'backInOut',
                type: 'spring'
            }
        })
    })

    useEffect(() => {
        [...ourTeamContent].map(el => {
            if(el.id === selectedTeamate.id) {
                el.animate.start({
                    boxShadow: '0 0 0px 10px #E57016'
                })
            } else {
                el.animate.start({
                    boxShadow: '0 0 0px 0px #E57016',
                })
            }

            return true;
        })
    }, [selectedTeamate, ourTeamContent]);

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

    const children2 = {
        hidden: {
            opacity: 0, 
            x: (width < 900 ? 0 : 600) 
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
        <>
        <NavBar dark={true}/>
        <motion.div variants={parent} initial="hidden" animate="show">

            <motion.div className="container-fluid p-0 m-0 d-flex align-items-center d-flex flex-column-reverse justify-content-start px-5 px-lg-0" style={{ width: '100%', height: '70vh', backgroundImage: `url('https://wallpaperbat.com/img/446956-developer-wallpaper-picture.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container" style={{ marginBottom: '6%'}}>
                    <h1 style={{ color: '#E57016'}} className="poppins font-weight-bold">This is <span className="text-light">Achieve</span>Value</h1>
                    <h5 className="poppins text-light font-weight-light w-75">We are a startup company that aims to develop and deliver modern, rapid and engaging web-based applications.</h5>
                </div>
            </motion.div>

            <LazyLoad height={200}>
                <motion.div className="container" variants={children2} style={{ background: '#FFFFFF' }}>
                    <div className="container d-flex align-items-center justify-content-between w-100" style={{ padding: '9%' }}>
                        <div className="d-flex align-items-center align-items-lg-start justify-content-lg-between align-items-center justify-content-center flex-column flex-lg-row">
                            <div className="pr-lg-5 mr-lg-5 mb-5 mb-lg-0">
                                <h2 className="poppins font-weight-bold mb-1" style={{ color: '#222335' }}>How we are</h2>
                                <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>different?</h2>
                            </div>
                            <h5 className="poppins text-dark font-weight-light">Our goal is to learn and apply innovative designs and techniques to create enterprise-quality websites. We achieve to model beautiful websites, fully customized for your needs. Our values are to work proficiently and swiftly to get the most out of your value.</h5>
                        </div>
                    </div>
                </motion.div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="container-fluid p-0" style={{ background: '#222335' }}>
                    <motion.div className="container-fluid w-100 d-flex justify-content-center align-items-center flex-column pb-lg-4 pt-lg-5" style={{ backgroundColor: '#222335', paddingTop: '8%', paddingBottom: '25%' }} variants={children}>
                        <div className="w-100 mb-5 text-center">
                            <h2 className="poppins font-weight-bold mb-1 text-light">Meet</h2>
                            <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>Our team</h2>
                        </div>
                        <div className="container w-100 row align-items-center justify-content-center d-none d-md-flex" style={{ height: '18vh' }}>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[0])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[0].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 0 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} initial={{ boxShadow: '0 0 0px 10px #E57016' }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[1])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[1].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQHQAp2ZHQ0k8Q/profile-displayphoto-shrink_200_200/0/1618498524576?e=1623888000&v=beta&t=C7swUFbL_b8UFSR_khVTXobGJCao9NVHZ0jcQ8cXeno')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 1 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[2])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[2].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQEe_Jmcm_5q3A/profile-displayphoto-shrink_200_200/0/1620361118913?e=1625702400&v=beta&t=N6JzASfVeVm4vi85hZKe8R1Bc9HhnUFlcdX3yuK_Nao')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 2 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[3])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[3].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://i.ibb.co/rf5MT6X/paola-min-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 3 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-3 col-lg-2 d-flex d-lg-block justify-content-center" onClick={() => {setSelectedTeamate(ourTeamContent[4])}}>
                                <motion.div className="rounded-circle bg-light" animate={ourTeamContent[4].animate} style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://i.ibb.co/4ZG61Dp/poza-01-min.png')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 4 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                        </div>

                        <div className="container w-100 row d-flex align-items-center justify-content-center d-md-none" style={{ height: '18vh' }}>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[0])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[0].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 0 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} initial={{ boxShadow: '0 0 0px 10px #E57016' }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[1])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[1].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQHQAp2ZHQ0k8Q/profile-displayphoto-shrink_200_200/0/1618498524576?e=1623888000&v=beta&t=C7swUFbL_b8UFSR_khVTXobGJCao9NVHZ0jcQ8cXeno')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 1 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4" onClick={() => {setSelectedTeamate(ourTeamContent[2])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[2].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQEe_Jmcm_5q3A/profile-displayphoto-shrink_200_200/0/1620361118913?e=1625702400&v=beta&t=N6JzASfVeVm4vi85hZKe8R1Bc9HhnUFlcdX3yuK_Nao')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 2 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4 pt-4" onClick={() => {setSelectedTeamate(ourTeamContent[3])}}>
                                <motion.div className="rounded-circle" animate={ourTeamContent[3].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://i.ibb.co/rf5MT6X/paola-min-1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 3 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016')}} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                            <div className="col-4 pt-4" onClick={() => {setSelectedTeamate(ourTeamContent[4])}}>
                                <motion.div className="rounded-circle bg-light" animate={ourTeamContent[4].animate} style={{ width: '25vw', height: '25vw', backgroundImage: `url('https://i.ibb.co/4ZG61Dp/poza-01-min.png')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: (selectedTeamate.id === 4 ? '0 0 0px 10px #E57016' : '0 0 0px 0px #E57016') }} whileHover={{ boxShadow: '0 0 0px 10px #E57016'}}></motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </LazyLoad>

            <LazyLoad height={200}>
                <div className="container-fluid py-2 d-flex justify-content-center pb-lg-5" style={{ background: '#222335'}}>
                    <motion.div className="container row d-flex justify-content-center justify-content-lg-end px-5 pb-5 pb-lg-0" variants={children2}>
                        <motion.div transition={{ duration: 0.4 }} className="col-12 col-lg-9 bg-light pt-5 pb-4 bg-light mr-0 mr-lg-4" style={{ borderRadius: '30px', paddingLeft: '8%', paddingRight: '8%'}}>
                            <h3 className="rightenous mb-1" style={{ color: '#E57016' }}>{selectedTeamate.nume}</h3>
                            <h6 className="poppins font-weight-regular mb-4">{selectedTeamate.pozitie}</h6>
                            <p>{selectedTeamate.descriere}</p>
                        </motion.div>
                    </motion.div>
                </div>
            </LazyLoad>{console.log(checkpoints[selectedCheckPoint-1].content.split(':'))}

            <div className="container-fluid py-5 d-none d-lg-block" style={{ background: '#15141A' }}>
                <div className="container py-5 w-100 p-0">
                    <h2 className="rightenous text-light mb-2 mt-5 text-center">Our <span style={{ color: '#E57016' }}>story</span></h2>
                    <p className="poppins font-weight-lighter w-25 text-light mb-5 text-center mx-auto d-none d-lg-block">It all started a long time ago and we can say it loud that we enjoyed every single day of it. Below you can find a bit from it, more to come later:</p>
                    <p className="poppins font-weight-lighter w-75 text-light mb-5 text-center mx-auto d-block d-lg-none">It all started a long time ago and we can say it loud that we enjoyed every single day of it. Below you can find a bit from it, more to come later:</p>
                    
                    <div className="row mb-3 w-100 px-0 mx-0">
                        <div className={`col-12 col-lg-1 text-center text-lg-left offset-0 offset-lg-${selectedCheckPoint - 1} px-0 d-flex flex-column justify-content-center`}>
                            <h4 className="rightenous text-light" style={{ whiteSpace: 'noWrap'}}>{checkpoints[selectedCheckPoint-1].title}</h4>
                            <h6 className="poppins text-light w-100 d-none d-lg-block" style={{ fontWeight: 200, whiteSpace: 'noWrap' }}>{checkpoints[selectedCheckPoint-1].content.split(':').map(el => { return <>{el}<br /></> })}</h6>
                            <h6 className="poppins text-light w-100 d-block d-lg-none" style={{ fontWeight: 200 }}>{checkpoints[selectedCheckPoint-1].content}</h6>
                            <svg width="1" height="38" viewBox="0 0 1 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="align-self-center">
                                <line x1="0.5" y1="38" x2="0.500002" y2="-2.18557e-08" stroke="white"/>
                            </svg>
                        </div>
                    </div>

                    <div className="w-100 row py-2 px-0 row mx-0" style={{ background: 'white', borderRadius: '50px', position: 'relative', overflow: 'hidden' }}>
                        {
                            checkpoints.map((checkpoint, key) => {
                                return <div className="col-1 d-flex justify-content-center px-0" key={key} style={{ zIndex: 1 }} onClick={() => {setSelectedCheckPoint(key + 1)}}><i className="fas fa-circle px-0" style={{ color: (selectedCheckPoint >= key + 1 ? 'white' : '#E57035')}}></i></div>
                            })
                        }

                        <motion.div className="position-absolute py-1 px-5" style={{ background: '#E57016', borderRadius: '50px', position: 'absolute', left: 0, top: 0, zIndex: 0, height: '100%', width: '0%' }} animate={progressBar}>
                        </motion.div>
                    </div>

                    <div className="row w-100 px-0 mt-3 mx-0">
                        <div className={`col-12 col-lg-1 text-center text-lg-left offset-0 offset-lg-${selectedCheckPoint - 1} px-0 d-flex flex-column justify-content-center`}>
                            <svg width="1" height="23" viewBox="0 0 1 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="align-self-center">
                                <line x1="0.5" y1="23" x2="0.5" stroke="#E57016"/>
                            </svg>
                            <h5 className="text-light rightenous mt-2" style={{ fontWeight: 200, whiteSpace: 'nowrap'}}>{checkpoints[selectedCheckPoint-1].month} <span style={{ color: '#E57016' }}>{checkpoints[selectedCheckPoint-1].year}</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
        </>
    )
}

export default About;