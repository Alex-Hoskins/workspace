import React from 'react';
import { useEffect, useState } from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';


function App() {
  return (
   <div>
     <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
     </Routes>
   </div>
  );
}

export default App;
