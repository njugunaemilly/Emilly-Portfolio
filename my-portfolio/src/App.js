import './App.css';
import './index.css'
import Footer from './Components/Footer';
import './Components/Footer.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';

import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Hero from './Pages/Hero';

function App() {
  
  return (
  <>
  <Navbar/>
  <Hero/>
  <Skills/>
  <Projects/>
  <Footer/>
  </>
  );
}

export default App;
