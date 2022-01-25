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
        <form>
            <h2>Where will you work today<StyleSpan>?</StyleSpan></h2>
            {/* <Search>
                <input value={search} onChange={handleChange} name="search" type="text"  placeholder='Type location'/>
                <button onClick={handleSubmit}>Search</button>
            </Search> */}
        </form>
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
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
    min-height:110px;
    margin-top:0px;
    background-color:white;
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
        width:98%;
        height:95%;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:10px;
        @media (max-width: 700px) {
        font-size:5rem;
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
`