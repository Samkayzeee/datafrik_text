import './App.css';
import DefaultLayout from './layouts/Defaultlayout';
import About from './pages/about/About';
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
      </DefaultLayout>
    </>
  )
}

export default App
