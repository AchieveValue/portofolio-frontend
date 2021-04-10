import { m } from 'framer-motion';
import React from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const About = () => {

    const parent = {
        hidden: {
            opacity: 0,
        }, 
        show: {
            opacity: 1,
            transition: {
                delay: 1,
                duration: 0.5,
                staggerChildren: 2,
                delayChildren: 2
            }
        }
    }

    const children = {
        hidden: {
            opacity: 0, 
            x: 600
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
            x: -600
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
        <motion.div variants={parent} initial="hidden" animate="show">
            <motion.div className="container-fluid p-0 m-0 d-flex align-items-center d-flex flex-column-reverse justify-content-start" style={{ width: '99vw', height: '70vh', backgroundImage: `url('https://wallpaperbat.com/img/446956-developer-wallpaper-picture.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="container" style={{ marginBottom: '6%'}}>
                    <h1 style={{ color: '#E57016'}} className="poppins font-weight-bold">This is <span className="text-light">Achieve</span>Value</h1>
                    <h5 className="poppins text-light font-weight-light w-50">We are a startup company that aims to develop and deliver modern, rapid and engaging web-based applications.</h5>
                </div>
            </motion.div>

            <motion.div className="container" variants={children2} >
                <div className="container d-flex align-items-center justify-content-between w-100" style={{ padding: '9%' }}>
                    <div className="d-flex align-items-start justify-content-between">
                        <div className="pr-5 mr-5">
                            <h2 className="poppins font-weight-bold mb-1" style={{ color: '#222335' }}>How we are</h2>
                            <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>different?</h2>
                        </div>
                        <h5 className="poppins text-dark font-weight-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h5>
                    </div>
                </div>
            </motion.div>

            <motion.div className="container-fluid d-flex justify-content-center align-items-center" style={{ backgroundColor: '#222335', paddingTop: '8%', paddingBottom: '8%' }} variants={children}>
                <div className="container w-100 row d-flex align-items-center justify-content-center align-items-center" style={{ height: '18vh' }}>
                    <div className="col-12 mb-5 text-center">
                        <h2 className="poppins font-weight-bold mb-1 text-light">Meet</h2>
                        <h2 className="poppins font-weight-bold mb-1" style={{ color: '#E57016' }}>Our team</h2>
                    </div>
                    <div className="col-2 w-100 h-100 mr-4">
                        <motion.div className="rounded-circle" style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 0 0px 0px #E57016' }} whileHover={{ boxShadow: '0 0 0px 10px #E57016' }}></motion.div>
                    </div>
                    <div className="col-2 w-100 h-100 mr-4">
                        <div className="rounded-circle" style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col-2 w-100 h-100 mr-4">
                        <div className="rounded-circle" style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col-2 w-100 h-100 mr-4">
                        <div className="rounded-circle" style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                    <div className="col-2 w-100 h-100">
                        <div className="rounded-circle" style={{ width: '15vh', height: '15vh', backgroundImage: `url('https://media-exp1.licdn.com/dms/image/C4E03AQGp-bWQw5eTFQ/profile-displayphoto-shrink_200_200/0/1610734448728?e=1623283200&v=beta&t=3gjA5xqTpGtaEACsE9_FZpsqxFiYkZl4XYkBHugqwW0')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default About;