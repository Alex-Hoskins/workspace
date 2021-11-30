import React, { useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchPage = (props) => {
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
        navigate('/')
    }

    return(
    <LandingSearch >
        <form>
            <Search>
                <input value={search} onChange={handleChange} name="search" type="text" className="form-control" placeholder='Find todays office'/>
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

export default connect(mapStateToProps)(SearchPage);

const LandingSearch=styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    flex-wrap:wrap;
    height:100vh;

    
    input{
        width:200px;
        border-radius:30px;
        display:flex;
        justify-content:center;
        text-align:center;
        border:none;
        font-size:1.2rem;
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
    }
`