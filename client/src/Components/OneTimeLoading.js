import React from 'react';
import { motion, useAnimation} from 'framer-motion';

const OneTimeLoading = () => {
    let wraper = useAnimation();

    setTimeout(() => {
        wraper.start({
            opacity: 0,
            zIndex: -1
        });
    }, 3500);

    return (
        <motion.div animate={wraper} className="bg-light d-flex flex align-items-center justify-content-center" style={{ zIndex: 3, position: 'fixed', top: 0, left: 0, height: '100vh', width: '100vw' }}>
            <motion.img className="d-none d-lg-block" initial={{ rotateY: 0 }} animate={{ rotateY: [360, 0] }} transition={{ repeat: 1, duration: 0.8 }} style={{ maxWidth: '10%' }} src="https://i.ibb.co/272NT0y/Logo-Small-Square-removebg-preview.png" alt="Logo" border="0"></motion.img>
            <motion.img className="d-block d-lg-none" initial={{ rotateY: 0 }} animate={{ rotateY: [360, 0] }} transition={{ repeat: 1, duration: 0.8 }} style={{ maxWidth: '20%' }} src="https://i.ibb.co/272NT0y/Logo-Small-Square-removebg-preview.png" alt="Logo" border="0"></motion.img>
            <div className="d-flex flex-column align-items-left justify-content-start">
                <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="rightenous" style={{ color: '#222335' }}>Achieve<span style={{ color: '#E57016' }}>Value</span></motion.h1>
                <motion.h4 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2 }} className="poppins font-weight-light" style={{ color: '#818195' }}>Empowering the <span style={{ color: '#222335' }}>next gen</span> web</motion.h4>
            </div>
        </motion.div>
    )
}

export default OneTimeLoading;