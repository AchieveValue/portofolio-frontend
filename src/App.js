import './App.css';
import React, { useEffect } from 'react';
import { SmoothScroll, useWindowDimensions } from './Functions'


// Componenets
import NavBar from './Components/Navbar';
import About from './Components/About';


function App() {
  useEffect(() => {
    new SmoothScroll(document,100 ,25)
  }, [])

  return (
    <>
      {/* <div className="d-block d-md-none">
        Get a bigger screen bro, you will develop eye issues.
      </div> */}

      <div className="App h-100">
        <NavBar location="services" dark={true}/>
        <About/>
      </div>
    </>
  );
}

export default App;
