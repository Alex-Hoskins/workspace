import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AddWorkSpace = (props) => {
    const navigate = useNavigate();

    const [workspace, setWorkspace] = useState({
        workspace_name:"",
        workspace_description:"",
        workspace_location:"",
        workspace_price:"",
        image_content:"",
        image_description:""
    });
    const [message, setMessage] = useState('')

    const handleChanges = event => {
        setWorkspace({
            ...workspace,
            [event.target.name]: event.target.value
        });
    };

    const submitForm = event => {
        event.preventDefault();
        axios.post('https://workspacebackend.herokuapp.com/api/workspace', workspace)
            .then(res=>{
                navigate('/')
            })
            .catch(err=>{
                setMessage(err.response.data.message)
            })
    }

    const goHome = event =>{
        navigate('/')
    }
    return (
        <PageContainer>
            <StyledFormContainer>
                <PageShadow>
                <StyledForm onSubmit={submitForm}>
                        <ExitButton onClick={goHome}>x</ExitButton>
                        <h2>Add WorkSpace</h2>         
                        <StyledInputContainer>
                            <label>WorkSpace Name</label>
                            <input
                                type="text"
                                name="workspace_name"
                                placeholder="Enter name"
                                onChange={handleChanges}
                                value={workspace.workspace_name} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Description </label>
                            <input
                                type="text"
                                name="workspace_description"
                                placeholder="Enter description"
                                onChange={handleChanges}
                                value={workspace.workspace_description} />
                        </StyledInputContainer>    
                        <StyledInputContainer>
                            <label>Location</label>
                            <input
                                type="text"
                                name="workspace_location"
                                placeholder="Enter location"
                                onChange={handleChanges}
                                value={workspace.workspace_location} />
                        </StyledInputContainer>    
                        <StyledInputContainer>
                            <label>Price for 4 hours</label>
                            <input
                                type="text"
                                name="workspace_price"
                                placeholder="Enter price for each 4 hour block"
                                onChange={handleChanges}
                                value={workspace.workspace_price} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label>Image</label>
                            <input
                                type="text"
                                name="image_content"
                                placeholder="Enter image URL"
                                onChange={handleChanges}
                                value={workspace.image_content} />
                        </StyledInputContainer>  
                        <StyledInputContainer>
                            <label>Alternate Image Description</label>
                            <input
                                type="text"
                                name="image_description"
                                placeholder="Describe the image"
                                onChange={handleChanges}
                                value={workspace.image_description} />
                        </StyledInputContainer>  
                        <button>Add WorkSpace</button>
                        {message && <p>{message}</p>}
                </StyledForm>
                </PageShadow>
            </StyledFormContainer>
        </PageContainer>
        
    )
    }
export default AddWorkSpace;

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
    p{
        width:85%;
        text-align:right;
        padding:0;
        margin:0;
        margin-top:4px;
    }
`
const PageShadow = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    /* background-color:#0000001c; */
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
        &:hover{
        cursor:pointer;
    }
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
const ExitButton = styled.div`
    width:10px;
    color:grey;
    text-align:right;
    width:90%;
    margin-top:3px;
    &:hover{
        cursor:pointer;
    }
`