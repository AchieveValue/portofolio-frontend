import React from 'react';
import '../App.css';

const NavBar = ({ location }) => {
    return (
        <div className="navbar" style={{ background: '#222335'}}>
            <div className="container py-2 d-flex align-items-center justify-content-betwen">
                <a class="navbar-brand" href="#">
                    <div className="">
                        <h3 className="rightenous mb-1" style={{ color: '#FFFFFF'}}>AchieveValue</h3>
                        <h6 className="text-light poppins font-weight-light text-center"><small>Web For Artisans</small></h6>
                    </div>
                </a>

                <div className="w-50 d-flex justify-content-between align-items-center">
                    <div className="d-flex text-light rightenous justify-content-between">
                        <h5 className="mr-4 mb-0" style={(location === 'about' ? { borderBottom: '2px solid white'} : { borderBottom: 0 })}>About</h5>
                        <h5 className="mr-4 mb-0" style={(location === 'services' ? { borderBottom: '2px solid white'} : { borderBottom: 0 })}>Services</h5>
                        <h5 className="mr-4 mb-0" style={(location === 'projects' ? { borderBottom: '2px solid white'} : { borderBottom: 0 })}>Our Projects</h5>
                    </div>

                    <div className="">
                        <button className="btn btn-outline-light px-4 poppins font-weight-bold py-1 ml-5" style={{ border: '2.5px solid white', borderRadius: '20px'}}>LET'S TALK</button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default NavBar;