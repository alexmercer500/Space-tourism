
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Header from './assets/header/Header';
import Home from './assets/home/Home';
import Destination from './assets/Destination'
import Crew from './assets/Crew';
import Technology from './assets/Technology';

function App() {

  const location = useLocation()
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.key}>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Destination' element={<Destination />} />
          <Route exact path='/Crew' element={<Crew />} />
          <Route exact path='/Technology' element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App;
