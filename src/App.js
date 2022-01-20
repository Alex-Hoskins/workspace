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
import Footer from './components/Footer'
import { connect } from 'react-redux';
import {getWorkspaces} from './actions/index'



function App(props) {

  useEffect(()=>{
    props.dispatch(getWorkspaces())
   },[]);
  
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
     <Footer/>
   </div>
  );
        }


const mapStateToProps = (state) =>{
  return{
      spaces: state.spaces
  }
}
export default connect(mapStateToProps)(App);
