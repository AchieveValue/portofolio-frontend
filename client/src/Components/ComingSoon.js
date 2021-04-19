import React from 'react';
import '../App.css';

import NavBar from './Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";

const parent = {
    hidden: {
        opacity: 0,
    }, 
    show: {
        opacity: 1,
        transition: {
            delay: 3,
            duration: 0.5,
            ease: "easeOut",
        }
    }
}

const ComingSoon = () => {
    return (
        <motion.div variants={parent} initial="hidden" animate="show" exit={{ opacity: 0 }}>
            <NavBar dark={true}/>
            .
        </motion.div>
    )
}

export default ComingSoon;