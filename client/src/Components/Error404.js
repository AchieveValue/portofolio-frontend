import React from 'react';
import '../App.css';

import NavBar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import parent from './Animations';

const Error404 = () => {
    return (
        <>
            <NavBar dark={true}/>
            <motion.div variants={parent} initial="hidden" animate="show" exit="exit">
                <div className="container-fluid" style={{ background: '#222335', paddingTop: '15vh', paddingBottom: '15vh' }}>
                    <div className="container d-flex align-items-center justify-content-center text-light flex-column flex-lg-row text-center">
                        <motion.h1 className="mr-5 display-4" initial={{ rotateY: 0 }} animate={{ rotateY: [360, 0] }}><i className="fas fa-exclamation-circle"></i></motion.h1>
                        <div className="">
                            <h2 className="rightenous">Oops, this page was not found!</h2>
                            <h5 className="poppins font-weight-light mt-4">We are sorry, you may want to go back to the <Link to="/" className="text-light font-weight-bold">home page</Link>.</h5>
                            <h5 className="poppins font-weight-light mt-4"> Static will be fired for this, don't worry!</h5>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Error404;