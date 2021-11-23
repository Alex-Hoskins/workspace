import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
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
    <LandingSearch >
        <form>
            <Search>
                <input value={search} onChange={handleChange} name="search" type="text" className="form-control" placeholder='Where will you work today?'/>
                <button onClick={handleSubmit}>Submit</button>
            </Search>
        </form>
    </LandingSearch>
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
    align-items:center;
    flex-wrap:wrap;
    height:100vh;

    input{
        width:300px;
        border-radius:30px;
        display:flex;
        justify-content:center;
        text-align:center;
        border:none;
    }
`
const Search=styled.div`
    display:flex;
    /* width:100%; */
    justify-content:center;
    align-items:center;
    flex-wrap:wrap;
    border:1px solid black;
    border-radius:30px;
    height:20px;
    button{
        border-radius:30px;
        width:80px;
        background-color:teal;
        border:none;
        color:white;
        height:20px;
    }
`