import './App.css';
import DefaultLayout from './layouts/Defaultlayout';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';

function App() {

  return (
    <>
      <DefaultLayout>
          <div id="#">
            <Home />
          </div>

          <div id='#about'>
            <About />
          </div>

          <div id="contact">
            <Contact />
          </div>
      </DefaultLayout>
    </>
  )
}

export default App
