import React from 'react';
import '../App.css';

import NavBar from './Navbar';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

import parent from './Animations';

const ComingSoon = () => {
    return (
        <motion.div variants={parent} initial="hidden" animate="show" exit="exit">
            <NavBar dark={true}/>
            <motion.div>
                <div className="container-fluid" style={{ background: '#222335', paddingTop: '15vh', paddingBottom: '15vh' }}>
                    <div className="container d-flex align-items-center justify-content-center text-light flex-column flex-lg-row text-center">
                        <motion.h1 className="mr-5 display-4" initial={{ rotateY: 0 }} animate={{ rotateY: [360, 0] }}><i class="fas fa-hourglass-half"></i></motion.h1>
                        <div className="">
                            <h2 className="rightenous">This page is not ready yet.</h2>
                            <h5 className="poppins font-weight-light mt-4">We assure you that we are doing our best to finish it! You may want to go to <Link to="/" className="text-light font-weight-bold">home page</Link>.</h5>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ComingSoon;