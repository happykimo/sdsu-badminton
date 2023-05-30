import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home/Home';
import Products from './components/pages/Products';
import AboutUs from './components/pages/AboutUs/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/products' exact Component={Products} />
          <Route path='/about-us' exact Component={AboutUs} />
          <Route path='/sign-up' exact Component={SignUp}/>
        </Routes>
      </Router>
    </>
    
  );
}

export default App;
