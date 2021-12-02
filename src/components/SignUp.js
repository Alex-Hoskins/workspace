import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CreateAccount = (props) => {
    const [user, setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        username:"",
        password:""
    });
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const navigate = useNavigate();
    const submitForm = event => {
        event.preventDefault();
        console.log('created an account');
        navigate('/login');
    }

    return (
        <PageContainer>
            <StyledFormContainer>
                <PageShadow>
                <StyledForm onSubmit={submitForm}>
                        <h2>Create Account or <Link to="/login">Login</Link></h2>         
                        <StyledInputContainer>
                            <label>First Name </label>
                            <input
                                type="text"
                                name="firstname"
                                placeholder="Enter first name"
                                onChange={handleChanges}
                                value={user.firstname} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Last Name </label>
                            <input
                                type="text"
                                name="lastname"
                                placeholder="Enter last name"
                                onChange={handleChanges}
                                value={user.lastname} />
                        </StyledInputContainer>    
                        <StyledInputContainer>
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleChanges}
                                value={user.email} />
                        </StyledInputContainer>    
                        <StyledInputContainer>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Enter a username"
                                onChange={handleChanges}
                                value={user.username} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter a password"
                                onChange={handleChanges}
                                value={user.password} />
                        </StyledInputContainer>  
                        <button>Create Account</button>
                </StyledForm>
                </PageShadow>
            </StyledFormContainer>
        </PageContainer>
        
    )
    }
export default CreateAccount;

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