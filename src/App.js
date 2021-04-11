import './App.css';

// Componenets
import NavBar from './Components/Navbar';
import About from './Components/About';


function App() {
  return (
    <>
      <div className="d-block d-lg-none">
        This webiste is available on PC only for now!
      </div>

      <div className="App d-none d-lg-block h-100">
        <NavBar location="services" dark={true}/>
        <About/>
      </div>
    </>
  );
}

export default App;
