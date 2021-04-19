import React from 'react';
import '../App.css';

import NavBar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <NavBar dark={true}/>
            <div className="container-fluid" style={{ background: '#222335', paddingTop: '10vh', paddingBottom: '10vh' }}>
                <div className="container d-flex align-items-center justify-content-center text-light">
                    <motion.h1 className="mr-5 display-4" initial={{ rotateY: 0 }} animate={{ rotateY: [360, 0] }}><i className="fas fa-exclamation-circle"></i></motion.h1>
                    <div className="">
                        <h2 className="rightenous">Opps, this page was not found!</h2>
                        <h5 className="poppins font-weight-light mt-4">We are sorry but you may want to go back to <Link to="/" className="text-light font-weight-bold">home page</Link>.</h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error404;