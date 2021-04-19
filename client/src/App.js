import './App.css';
import React, { useEffect } from 'react';
import { SmoothScroll } from './Functions'
import { Switch, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

// Componenets
import About from './Components/About';
import Footer from './Components/Footer'
import ComingSoon from './Components/ComingSoon'
import Error404 from './Components/Error404'


function App() {
  const location = useLocation();

  useEffect(() => {
    new SmoothScroll(document, 100, 20)
  }, [])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key} >
          <Route path='/about'>
            <About/>
          </Route>
          <Route path='/services'>
            <ComingSoon />
          </Route>
          <Route path='/projects'>
            <ComingSoon />
          </Route>
          <Route>
            <Error404 />
          </Route>
        </Switch>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;