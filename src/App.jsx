import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {

  return (
    <>
    <Navbar />
          <div id="#">
            <Home />
          </div>

          <div id='#about'>
            <About />
          </div>

          <div id="contact">
            <Contact />
          </div>
    <Footer />
    </>
  )
}

export default App
