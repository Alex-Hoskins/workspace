import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Spaces from './Spaces';


const LandingPage = (props) => {
    const [search, setSearch]=useState('');
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        console.log('this is value',e.target.value)
        setSearch(
            e.target.value
        );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(`${search} is what we are searching for.`);
        setSearch('');
        navigate('/search')
    }

    return(
    <div>
    <LandingSearch >
        <form>
            <h2>Where will you work today?</h2>
            <Search>
                <input value={search} onChange={handleChange} name="search" type="text"  placeholder='Type location'/>
                <button onClick={handleSubmit}>Search</button>
            </Search>
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
    align-items:flex-start;
    flex-wrap:wrap;
    min-height:40vh;
    padding-top:5px;
    margin-top:0px;
    form{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        background-image:url('https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80');
        object-fit:cover;
        background-position:center;
        width:100%;
        height:40vh;
        margin:0px;
        box-sizing:border-box;
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
        font-size:3rem;
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