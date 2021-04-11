import React, { useState } from 'react';
import '../App.css';
import { motion } from 'framer-motion';

const NavBar = ({ location, dark }) => {
    location = ["about", "services", "projects"].indexOf(location);
    const [hoveredLink, setHoveredLink] = useState(location);

    const linkStyle = {
        cursor: 'pointer'
    }

    if(dark) {
        return (
            <div className="navbar" style={{ background: '#222335'}}>
                <div className="container-fluid py-2 d-flex align-items-center justify-content-betwen px-5">
                    <a class="navbar-brand" href="#">
                        <div className="">
                            <h3 className="rightenous mb-1" style={{ color: '#FFFFFF'}}>AchieveValue</h3>
                            <h6 className="text-light poppins font-weight-light text-center"><small>Web For Artisans</small></h6>
                        </div>
                    </a>
    
                    <div className="w-50 d-flex justify-content-end align-items-center" onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex text-light rightenous justify-content-between">
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 1 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 2 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }} transition={{ duration: 2 }}>Services</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 3 ? { borderBottom: '2.5px solid white', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Our Projects</motion.h5>
                        </div>
    
                        <div className="">
                            <button className="btn btn-outline-light px-4 poppins font-weight-bold py-1 ml-5" style={{ border: '2.5px solid white', borderRadius: '20px'}}>LET'S TALK</button>
                        </div>  
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="navbar" style={{ background: '#F2F3F8'}}>
                <div className="container-fluid py-2 d-flex align-items-center justify-content-betwen px-5">
                    <a class="navbar-brand" href="#">
                        <div className="">
                            <h3 className="rightenous mb-1" style={{ color: '#222335'}}>AchieveValue</h3>
                            <h6 className="poppins font-weight-light text-center" style={{ color: '#222335' }}><small>Web For Artisans</small></h6>
                        </div>
                    </a>
    
                    <div className="w-50 d-flex justify-content-end align-items-center" style={{ color: '#222335' }} onMouseLeave={() => { setHoveredLink(location) }}>
                        <div className="d-flex rightenous justify-content-between">
                        <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 1 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(1) }}>About</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 2 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(2) }}>Services</motion.h5>
                            <motion.h5 className="mr-4 mb-0 pb-1" style={(hoveredLink === 3 ? { borderBottom: '2.5px solid #222335', ...linkStyle} : { borderBottom: 0, ...linkStyle })} onMouseEnter={() => { setHoveredLink(3) }}>Our Projects</motion.h5>
                        </div>
    
                        <div className="">
                            <button className="btn btn-outline-light px-4 poppins font-weight-bold py-1 ml-5" style={{ border: '2.5px solid #222335', borderRadius: '20px', color: '#222335'}}>LET'S TALK</button>
                        </div>  
                    </div>
                </div>
            </div>
        )
    }

}

export default NavBar;