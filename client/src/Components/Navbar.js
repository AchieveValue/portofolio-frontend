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
                <div className="container-fluid py-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 px-lg-5">
                    <Link className="navbar-brand" to="/" variants={children}>
                        <div className="d-flex align-items-center justify-content-center">
                            <img src="https://i.ibb.co/Jsr94Hw/Frame-2alt-logo.png" alt="" style={{ maxWidth: '40%' }}/>
                        </div>
                    </Link>
                    <div className="w-50 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex text-light rightenous justify-content-between">
                            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 1 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5></Link>
                            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 2 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5></Link>
                            <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 3 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    } else {
        return (
            <motion.div className="navbar" style={{ background: '#F2F3F8'}} variants={parent} initial="hidden" animate="show" exit="hidden">
                <div className="container-fluid py-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 px-lg-5">
                    <motion.a clasName="navbar-brand" href="/" variants={children}>
                        <div className="">
                            <h3 className="rightenous mb-1" style={{ color: '#222335'}}>AchieveValue</h3>
                            <h6 className="poppins font-weight-light text-center" style={{ color: '#222335' }}><small>Web For Artisans</small></h6>
                        </div>
                    </motion.a>
    
                    <div className="w-75 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" style={{ color: '#222335' }} onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex rightenous justify-content-between">
                            <Link to="/about" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 1 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5></Link>
                            <Link to="/services" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 2 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5></Link>
                            <Link to="/projects" style={{ color: '#222335', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" variants={children} style={(hoveredLink === 3 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5></Link>
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    }

}

export default NavBar;