import axios from "axios";
import React, { useState } from "react";
import { connect } from 'react-redux';
import { logIn } from "../actions";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LogIn = (props) =>{
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username:"",
        password:""
    });
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event =>{
        event.preventDefault();
        props.dispatch(logIn());
        navigate('/');
    }
   
    return (
        <PageContainer>
            <StyledFormContainer>
                <PageShadow>
                    <StyledForm onSubmit={handleSubmit}>
                        <h3>Login or <Link to="/signup">Signup</Link></h3>
                        <StyledInputContainer>
                            <label>Username</label>
                            <input 
                                name='username'
                                type="text" 
                                value={user.username}
                                onChange={handleChanges}
                                placeholder="Enter username" 
                                />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Password</label>
                            <input 
                            name='password'
                            type="text" 
                            value={user.password}
                            onChange={handleChanges}
                            placeholder="Enter password" />
                        </StyledInputContainer>
                        <button type="submit">Submit</button>
                    </StyledForm>
                </PageShadow>   
            </StyledFormContainer>
        </PageContainer>
        )
}

const mapStateToProps = (state) =>{
    return{
        spaces: state.spaces,
        state: state
        
    }
   
}

export default connect(mapStateToProps)(LogIn);

const PageContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    height:100vh;
    padding-top:5px;
    margin-top:0px;
    min-height:100vh;
    box-sizing:border-box;
`

const StyledFormContainer = styled.div`
     display:flex;
    align-items:center;
    justify-content:center;
    background-image:url('https://images.unsplash.com/photo-1596079890744-c1a0462d0975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80');
    object-fit:cover;
    width:90%;
    height:90%;
    border-radius:30px;
    margin:0px;
    min-height:90vh; 
    box-sizing:border-box;

`
const PageShadow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#00000036;
    width:100%;
    height:100%;
    border-radius:30px;
    margin:0px;
    padding:0px;
    box-sizing:border-box;  
`

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:380px;
    border-radius:10px;
    background-color:white;
    input{
        width:300px;
        height:30px;
        font-size:1.2rem;
        border-radius:7px;
    }
    button{
        width:300px;
        background-color:teal;
        border-radius:7px;
        font-size:1.2rem;
        height:30px;
        color:white;
        margin:20px;
    }
    label{
        font-size:.8rem;
        color:grey;
    }
    h2{
        text-align:center;
        font-size:1.4rem;
        margin-top:20px;
        margin-bottom:5px;
    }
`
const StyledInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin:5px;
`