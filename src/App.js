import React from 'react';
import { useEffect, useState } from 'react';
import {Routes, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import Header from './components/Header';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';


function App() {
  return (
   <div className='app'>
     <Header/>
     <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route exact path="/search" element={<SearchPage/>}/>
        <Route exact path="/login" element={<LogIn/>}/>
        <Route exact path="/logout" element={<LogOut/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
     </Routes>
   </div>
  );
}

export default App;
