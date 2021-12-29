import React from 'react';
import { useEffect, useState } from 'react';
import {Routes, Route, useParams } from "react-router-dom";
import './App.css';
import LandingPage from './components/LandingPage';
import SearchPage from './components/SearchPage';
import Header from './components/Header';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import SignUp from './components/SignUp';
import SpaceDetails from './components/SpaceDetails';
import { connect } from 'react-redux';
import Spaces from './components/Spaces'



function App(props) {
  const spaces = props.spaces
  console.log(spaces)

  if(!spaces){
    return(loading)
  }else{
  return (
   <div className='app'>
     <Header/>
     <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/spaces" element={<SearchPage/>}/>
        <Route path="/spaces/:space_id" element={<SpaceDetails/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="/signup" element={<SignUp/>}/>
     </Routes>
   </div>
  );
        }
}

const mapStateToProps = (state) =>{
  return{
      spaces: state.spaces
  }
}
export default connect(mapStateToProps)(App);
