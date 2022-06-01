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
    width:100vw;
    justify-content:center;
    flex-wrap:wrap;
    min-height:500px;
    margin-top:0px;
    background-image:url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    display:flex;
    justify-content:center;
    align-items:center;
    @media (max-width: 900px) {
        flex-direction:column;
        min-height:400px;
    }

    @media (max-width: 620px) {
        min-height:230px;
    }
    
    h2{
        color:white;
        font-size:7rem;
        text-align:center;
        width:100%;
        height:500px;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        padding:10px;
        margin:0px;
        background-color:hsl(0, 5%, .5%, 60%);
        @media (max-width: 1500px) {
            font-size:5rem;
        }
        @media (max-width: 1100px) {
            font-size:4rem;
        }
        @media (max-width: 900px) {
        font-size:3rem;
        margin-top:0px;
        height:400px;
        }
        @media (max-width: 600px) {
        font-size:3rem;
        margin-top:0px;
        height:230px
        } 
    }
   
`

const StyleSpan=styled.span`
    color:teal;
    font-size:230%
`