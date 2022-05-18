import React from 'react';
import { useEffect } from 'react';
import {Routes, Route } from "react-router-dom";
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
import {getWorkspaces, logOut, logIn} from './actions/index'
import AddWorkSpace from './components/AddWorkSpace';
import PrivateRoute from './components/PrivateRoute';
import Cart from './components/Cart';
import SpaceInCart from './components/SpaceInCart';
import About from './components/About';



function App(props) {

  useEffect(()=>{
    props.dispatch(getWorkspaces())
    if(localStorage.getItem('token')){
      props.dispatch(logIn())
    }else{
      props.dispatch(logOut())
    }
   },[]);
  
  return (
   <div className='app'>
     <Header/>
     <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/spaces" element={<SearchPage/>}/>
        <Route path="/spaces/:workspace_id" element={<SpaceDetails/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/logout" element={<LogOut/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/cart/:workspace_id" element={<SpaceInCart/>}/>
        <Route path="/addworkspace" element={<PrivateRoute><AddWorkSpace/></PrivateRoute>}/>
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
