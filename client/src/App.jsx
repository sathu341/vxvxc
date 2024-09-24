
import './App.css'
import Board from './board'
import Aboutpage from './components/aboutpage'
import Cardskerala from './components/cardskerala'
import Headernav from './components/headernav'
import Homepage from './components/homepage'
import Slider from './components/slider'
import {Routes,Route} from 'react-router-dom';
import { lazy,Suspense } from 'react'
import Spinner from 'react-bootstrap/Spinner';
function App() {
const Hpage=lazy(()=> import('./components/homepage'))
const AboutPage=lazy(()=> import('./components/aboutpage'))
  return (
    <>
      <Headernav/>
      <section>
        <Suspense fallback={<div>
          <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
        </div>}>
        <Routes>
        <Route path="/" element={<Hpage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
       </Routes>

        </Suspense>
  

      </section>
   

    </>
  )
}

export default App
