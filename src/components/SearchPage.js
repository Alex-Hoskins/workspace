import React, { useState } from "react";
import styled from 'styled-components';
import Spaces from './Spaces';
import { connect } from 'react-redux';
import { filter_spaces, getWorkspaces, setSpaces } from "../actions";



const SearchPage = (props) => {
    const [workspace, setWorkspace] = useState({
        price:''
    });
    
    const handleChanges = event => {
        setWorkspace({
            ...workspace,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = event => {
        event.preventDefault();
        props.dispatch(filter_spaces(workspace.price))
    }
    const reset = (e)=>{
        e.preventDefault();
        props.dispatch(getWorkspaces())
    }

    return (
        <PageStyle>
        <PageContainer>
            <StyledFormContainer>
                <StyledForm onSubmit={submitForm}> 
                        <h2>Find your <br />WorkSpace</h2>
                        <StyledInputContainer>
                            <label >Max Price:</label>
                                <select name="price" onChange={handleChanges}>
                                    <option value="100000">---No Max---</option>
                                    <option value="25">$25</option>
                                    <option value="50">$50</option>
                                    <option value="75">$75</option>
                                    <option value="150">$150</option>
                                </select>
                        </StyledInputContainer>  
                        <button>Search</button>
                        <button onClick={reset}>Reset</button>
                </StyledForm>
               </StyledFormContainer>
        </PageContainer>
            <Spaces/>
        </PageStyle>
    )
    }

    const mapStateToProps = (state) =>{
        return{
            spaces: state.spaces,
            filterSpaces:state.filterSpaces
        }
    }
export default connect(mapStateToProps)(SearchPage);

const PageStyle=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
min-height:100vh;
background-color:rgb(245,245,245);
h2{
        font-size:2.6rem;
        text-align:center;
        margin-top:15px;
    }
`
const PageContainer = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    padding-top:5px;
    margin-top:0px;
    box-sizing:border-box;
`

const StyledFormContainer = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:45%;
    border:1px solid grey;
    border-radius:7px;
    box-sizing:border-box;
    margin:1px;
    @media(max-width: 1200px){
        width:60%;
    }
    @media(max-width: 900px){
        width:75%;
    }
    @media (max-width: 700px) {
        width:100%;
        border-radius:0px;
        border:none;
        border-top:1px solid lightgrey;
        border-bottom:1px solid lightgrey;
    };
    h2{
        text-align:center;
        font-size:1rem;
        margin-top:0px;
        margin-bottom:0px;
    }
`


const StyledForm = styled.form`
    display:flex;
    justify-content:space-evenly;
    flex-wrap:wrap;
    align-items:center;
    width:100%;
    background-color:white;
    box-sizing:border-box;
    border-radius:7px;
    @media (max-width: 700px) {
        width:100vw;
        border-radius:0px;
        opacity:85%;
        justify-content:space-around;
        flex-direction:column;
        align-items:center;
        padding:10px;
       
     };
    input{
        width:200px;
        height:30px;
        font-size:1.2rem;
        color:black;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
         };
    }
    option{
        width:200px;
        height:30px;
        font-size:1.2rem;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
         };
    }
    select{
        width:130px;
        height:30px;
        font-size:1.2rem;
        color:black;
        border-radius:7px;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
            margin:0px;
         };
    }

    button{
        width:100px;
        background-color:teal;
        border-radius:7px;
        font-size:1.2rem;
        height:30px;
        color:white;
        margin-left:20px;
        border:none;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
            margin:10px;
         };
    }
    label{
        font-size:.8rem;
        color:grey;
    }
    h2{
        text-align:center;
        font-size:1rem;
        margin-top:0px;
        margin-bottom:0px;
        margin-right:19px;
        @media (max-width: 700px) {
            width:85vw;
            height:50px;
            margin:10px;
            font-size:1.2rem;
         };
    }
`
const StyledInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin:5px;
`
