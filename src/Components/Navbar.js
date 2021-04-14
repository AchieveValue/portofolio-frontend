import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import { motion } from 'framer-motion';


const NavBar = ({ location, dark }) => {
    location = ["about", "services", "projects"].indexOf(location) + 1;
    
    const [hoveredLink, setHoveredLink] = useState(location);

    const linkStyle = {
        cursor: 'pointer',
    }

    if(dark) {
        return (
            <div className="navbar" style={{ background: '#222335'}}>
                <div className="container-fluid py-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 px-lg-5">
                    <a className="navbar-brand" href="#">
                        <div className="">
                            <h3 className="rightenous mb-1" style={{ color: '#FFFFFF'}}>AchieveValue</h3>
                            <h6 className="text-light poppins font-weight-light text-center"><small>Web For Artisans</small></h6>
                        </div>
                    </a>
    
                    <div className="w-75 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex text-light rightenous justify-content-between">
                            <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 1 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5></Link>
                            <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 2 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5></Link>
                            <Link to="/projects" style={{ color: 'white', textDecoration: 'none' }}><motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 3 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar" style={{ background: '#F2F3F8'}}>
                <div className="container-fluid py-2 d-flex align-items-center justify-content-center justify-content-lg-between flex-column flex-lg-row px-0 px-lg-5">
                    <a clasName="navbar-brand" href="#">
                        <div className="">
                            <h3 className="rightenous mb-1" style={{ color: '#222335'}}>AchieveValue</h3>
                            <h6 className="poppins font-weight-light text-center" style={{ color: '#222335' }}><small>Web For Artisans</small></h6>
                        </div>
                    </a>
    
                    <div className="w-75 d-flex justify-content-around justify-content-lg-end align-items-center mt-4 mt-lg-0" style={{ color: '#222335' }} onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex rightenous justify-content-between">
                        <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 1 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 2 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }}>Services</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 3 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Projects</motion.h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default NavBar;