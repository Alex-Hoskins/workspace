import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Spaces from './Spaces';


const LandingPage = (props) => {
    const [search, setSearch]=useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setSearch(
            e.target.value
        );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSearch('');
        navigate('/spaces')
    }

    return(
    <div>
    <LandingSearch >
            <h2>Where will you work today<StyleSpan>?</StyleSpan></h2>
            <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="Deskspace" />
    </LandingSearch>
    <Spaces/>
    </div>
    );
}

const mapStateToProps = (state) =>{
    return{
        spaces: state.spaces
    }
   
}

export default connect(mapStateToProps)(LandingPage);

const LandingSearch=styled.div`
    display:flex;
    width:90%;
    justify-content:center;
    flex-wrap:wrap;
    min-height:110px;
    margin-top:0px;
    background-color:white;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media (max-width: 1000px) {
        flex-direction:column;
    }
    img{
        width:40%;
        object-fit:cover;
        padding:0;
        margin:0;
        height:400px;
        border-radius:20px;
        @media (max-width: 1000px) {
        width:90%
    }
    }

    @media (max-width: 620px) {
        min-height:230px;
    }
    
    form{
        display:flex;
        align-items:center;
        justify-content:center;
        object-fit:cover;
        background-position:center;
        width:100%;
        height:110px;
        box-sizing:border-box;
        @media (max-width: 620px) {
        height:230px;
        background-color:black;
        }
    }

    input{
        width:200px;
        border-radius:30px;
        display:flex;
        justify-content:center;
        text-align:center;
        border:none;
        font-size:1.2rem;
    }
    h2{
        color:rgba(0, 0, 0, 0.9);
        font-size:6rem;
        text-align:center;
        width:40%;
        height:95%;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        padding:0;
        margin:0;
        @media (max-width: 1300px) {
            font-size:5rem;
        }
        @media (max-width: 1100px) {
            font-size:5rem;
        }
        @media (max-width: 1000px) {
        font-size:4rem;
        width:90%;
        margin-top:0px;
        }
        @media (max-width: 600px) {
        font-size:3rem;
        margin-top:0px;
        }
    }
   
`
const Search=styled.div`
    display:flex;
    width:300px;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    border:1px solid black;
    border-radius:30px;
    height:30px;
    background-color:white;
    button{
        border-radius:30px;
        width:80px;
        background-color:teal;
        border:none;
        color:white;
        height:100%;
    }
`
const StyleSpan=styled.span`
    color:teal;
    font-size:230%
`