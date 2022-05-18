import React, { useState } from "react";
import styled from 'styled-components';
import Spaces from './Spaces';
import { connect } from 'react-redux';



const SearchPage = () => {
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
        console.log(workspace.buildingType)
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
                                    <option defaultValue="">---No Max---</option>
                                    <option value="25">$25</option>
                                    <option value="50">$50</option>
                                    <option value="75">$75</option>
                                    <option value="150">$150</option>
                                </select>
                        </StyledInputContainer>  
                        <button>Search</button>
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
        }
    }
export default connect(mapStateToProps)(SearchPage);

const PageStyle=styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
min-height:100vh;
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
    width:90%;
    background-color:white;
    box-sizing:border-box;
    input{
        width:200px;
        height:30px;
        font-size:1.2rem;
        color:black;
    }
    option{
        width:200px;
        height:30px;
        font-size:1.2rem;
    }
    select{
        width:130px;
        height:30px;
        font-size:1.2rem;
        color:black;
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
    }
`
const StyledInputContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin:5px;
`
