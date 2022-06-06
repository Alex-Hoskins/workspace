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
    const [message, setMessage]=useState('')
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event =>{
        event.preventDefault();
        axios.post('https://workspacebackend.herokuapp.com/api/auth/login', user)
            .then(res=>{
                localStorage.setItem('token', res.data.token);
                props.dispatch(logIn())
                navigate('/')
            })
            .catch(err=>{
                setMessage(err.response.data.message)
            })
        
    }
   
    return (
        <PageContainer>
            <StyledFormContainer>
                <PageShadow>
                    <StyledForm onSubmit={handleSubmit}>
                        <h2>Login or <Link to="/signup"><span>Signup</span></Link></h2>
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
                        {message && <p>{message}</p>}
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
    width:100vw;
    padding-top:5px;
    margin:0px;
    min-height:100vh;
`

const StyledFormContainer = styled.div`
     display:flex;
    align-items:center;
    justify-content:center;
    background-image:url('https://images.unsplash.com/photo-1487446929682-f62f73984006?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80');
    background-position:center;
    background-repeat:no-repeat;
    background-size:cover;
    width:100%;
    height:90%;
    // border-radius:30px;
    margin:0px;
    min-height:100vh; 
`
const PageShadow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:hsl(0, 5%, .5%, 60%);    
    width:100%;
    height:100%;
    // border-radius:30px;
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
    min-height:400px;
    border-radius:10px;
    background-color:white;
    @media (max-width: 700px) {
        width:100vw;
        height:100vh;
        border-radius:0px;
        opacity:85%;
     };
    input{
        width:300px;
        height:30px;
        font-size:1.2rem;
        border-radius:7px;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
         };
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
    span{
        color:teal;
    }
`
const StyledInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin:5px;
`