import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';


const CreateAccount = (props) => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        user_first_name:"",
        user_last_name:"",
        email:"",
        username:"",
        password:""
    });
    const [message, setMessage] = useState('')

    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        axios.post('https://workspacebackend.herokuapp.com/api/auth/register', user)
            .then(res=>{
                navigate('/login')
            })
            .catch(err=>{
                setMessage(err.response.data.message)
            })
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
                                name="user_first_name"
                                placeholder="Enter first name"
                                onChange={handleChanges}
                                value={user.user_first_name} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Last Name </label>
                            <input
                                type="text"
                                name="user_last_name"
                                placeholder="Enter last name"
                                onChange={handleChanges}
                                value={user.user_last_name} />
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
                        {message && <p>{message}</p>}
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
    width:100vw;
    padding-top:5px;
    margin-top:0px;
    min-height:100vh;
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
`
const PageShadow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#0000001c;
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