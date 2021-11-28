import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


import About from './views/About';
import Home from './views/Home';
import Details from './views/Details';

import NavBar from './components/NavBar';
import Header from './components/Header';


const App = () => {

  return (
    <Router>
        <div className='App'>
        <Header/>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detail" element={<Details/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </div>
    </Router>
    
  )
}

export default App;

