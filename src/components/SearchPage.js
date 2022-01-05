import React, { useState } from "react";
import styled from 'styled-components';
import Spaces from './Spaces';
import { connect } from 'react-redux';



const SearchPage = () => {
    const [workspace, setWorkspace] = useState({
        location:"",
        buildingType:"",
        numberOfPeople:"",
        date:"",
        time:""
    });
    
    const handleChanges = event => {
        setWorkspace({
            ...workspace,
            [event.target.name]: event.target.value
        });
    };
    const submitForm = event => {
        event.preventDefault();
    }

    return (
        <PageStyle>
        <PageContainer>
            <StyledFormContainer>
                <StyledForm onSubmit={submitForm}> 
                        <h2>Find your <br />WorkSpace</h2>
                        <StyledInputContainer>
                            <label>Location </label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter location"
                                onChange={handleChanges}
                                value={workspace.location} />
                        </StyledInputContainer>
                        <StyledInputContainer>
                            <label >WorkSpace type?</label>
                                <select name="buildingType" onChange={handleChanges}>
                                    <option defaultValue="">---Select---</option>
                                    <option value="homeOffice">Home Office</option>
                                    <option value="sharedOffice">Shared Office</option>
                                    <option value="uniqueLocation">Unique WorkSpaces</option>
                                    <option value="Entire Office">Entire Office</option>
                                </select>
                        </StyledInputContainer>  
                        <StyledInputContainer>
                            <label >How many people?</label>
                                <select name="numberOfPeople" onChange={handleChanges}>
                                    <option defaultValue="">---Select---</option>
                                    <option value="onePerson">1</option>
                                    <option value="twoPerson">2</option>
                                    <option value="threeToSixPerson">3-6</option>
                                    <option value="sixPlusPerson">7+</option>
                                    <option value="twentyPlusPerson">20+</option>
                                </select>
                        </StyledInputContainer>  
                        <StyledInputContainer>
                            <label>What date?</label>
                                <select name="date" onChange={handleChanges}>
                                    <option defaultValue="">---Select---</option>
                                    <option value="today">Today</option>
                                    <option value="tomorrow">Tomorrow</option>
                                    <option value="nextWeek">Next week</option>
                                    <option value="nextMonth">Next</option>
                                </select>
                        </StyledInputContainer>  
                        <StyledInputContainer>
                            <label >What time?</label>
                                <select name="time" onChange={handleChanges}>                                    
                                    <option defaultValue="" >---Select---</option>
                                    <option value="12am-8am">12am-8am</option>
                                    <option value="8am-12pm">8am-12pm</option>
                                    <option value="12pm-4pm">12pm-4pm</option>
                                    <option value="4pm-8pm">4pm-8pm</option>
                                    <option value="8pm-11:59pm">8pm-11:59pm</option>
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
    width:90%;
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
    width:95%;
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
