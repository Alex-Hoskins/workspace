import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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
        
            <StyledForm onSubmit={submitForm}>
                    <h2>Create Account</h2>         
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
        
    )
    }
export default CreateAccount;

const StyledFormContainer = styled.div`

`

const StyledForm = styled.form`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:380px;
    border:1px solid black;
    border-radius:10px;
    z-index:1;
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