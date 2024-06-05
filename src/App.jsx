import React from 'react';
import './App.css'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import AnimatedRoutes from './Components/AnimatedRoutes';



function App() {

  return (
    <Router basename='/devportfolio'>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
