import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { motion  } from 'framer-motion';
import { useLocation } from "react-router-dom";


const NavBar = ({ dark }) => {
    let location = useLocation();
    location= location.pathname.slice(1);

    location = ["about", "services", "projects"].indexOf(location) + 1;
    
    const [hoveredLink, setHoveredLink] = useState(location);

    const parent = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.4,
            }
        }
    }

    const children = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.2,
                ease: "easeOut",
            }
        }
    }

    const linkStyle = {
        cursor: 'pointer',
    }

    if(dark) {
        return (
            <motion.div className="navbar" style={{ background: '#222335'}} variants={parent} initial="hidden" animate="show" exit="hidden">
                <img style={{ position: 'fixed', top: '3%', left: '10%', maxWidth: '8vh' }} className="mr-5" src="https://i.ibb.co/272NT0y/Logo-Small-Square-removebg-preview.png" alt="Logo-Small-Square-removebg-preview" border="0" />
                <div className="container pt-5 pb-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 py-3">
                    <Link className="navbar-brand" to="/" variants={children}>
                        <h3 className="rightenous text-light">Achieve<span style={{ color: '#E57016' }}>Value</span></h3>
                    </Link>
                    <div className="w-50 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex text-light rightenous justify-content-between">
                            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 1 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5></Link>
                            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 2 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5></Link>
                            <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mb-0 pb-1" variants={children} style={(hoveredLink === 3 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    } else {
        return (
            <motion.div className="navbar" style={{ background: 'white'}} variants={parent} initial="hidden" animate="show" exit="hidden">
                <img style={{ position: 'fixed', top: '3%', left: '10%', maxWidth: '5%' }} className="mr-5" src="https://i.ibb.co/272NT0y/Logo-Small-Square-removebg-preview.png" alt="Logo-Small-Square-removebg-preview" border="0" />
                <div className="container pt-4 pb-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 py-3">
                    <Link className="navbar-brand" to="/" variants={children}>
                        <h3 className="rightenous" style={{ color: '#222335' }}>Achieve<span style={{ color: '#E57016' }}>Value</span></h3>
                    </Link>
                    <div className="w-50 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex text-light rightenous justify-content-between">
                            <Link to="/about" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 1 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5></Link>
                            <Link to="/services" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 2 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5></Link>
                            <Link to="/projects" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mb-0 pb-1" variants={children} style={(hoveredLink === 3 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

}

export default NavBar;