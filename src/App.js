import './App.css';

// Componenets
import NavBar from './Components/Navbar';
import About from './Components/About';


function App() {
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
