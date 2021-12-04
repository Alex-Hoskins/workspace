import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { seeMore } from '../actions';

const SpaceDetails = (props) =>{
    console.log(props)
    const { space } = props
    const goBack =()=>{
        props.dispatch(seeMore(''))
    }
    return(
    <ItemStyle>
        <StyledDetails>
            <img src={space.image} alt={space.name} />
            <StyledDetails2>
                <h2><StyledSpan>{space.name}</StyledSpan> </h2>
                <p><StyledSpan>Price:</StyledSpan> ${space.price}</p> 
                <p><StyledSpan>Location:</StyledSpan> {space.location}</p>
                <p><StyledSpan>Description:</StyledSpan> {space.description}</p>
                <p><StyledSpan>WorkSpace Elite:</StyledSpan> {space.workspaceElite ? 'Yes' : 'No'}</p>
                <ButtonContainer>
                    <button onClick={goBack}>Back to Search</button>
                    <StyledButton>Book this WorkSpace</StyledButton>
                </ButtonContainer>
            </StyledDetails2>
        </StyledDetails>
    </ItemStyle>
    )}
    const mapStateToProps = (state) =>{
        return{
            spaceDetails: state.spaceDetails
            
        }
    }
export default connect(mapStateToProps)(SpaceDetails);

const ItemStyle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:90%;
    height:auto;
    margin:20px;
    background-color:white;
    img{
        width:50%;
        height:500px;
        object-fit: cover;
        border-radius:10px;
    }
    p{
        font-size:1.2rem;
    }
    h2{
        font-size:2rem;
    }
`
const StyledDetails =styled.div`
    display:flex;
    padding:2%;


`
const StyledDetails2 =styled.div`
    display:flex;
    flex-direction:column;
    padding:2%;
    justify-content:center;
    height:500px;
    box-sizing:border-box;
    button{
        display:flex;
        justify-content:center;
        width:200px;
        background-color:teal;
        border-radius:7px;
        font-size:1.2rem;
        height:30px;
        color:white;
        margin-left:20px;
        border:none;
    }
`

const StyledSpan=styled.span`
    font-weight:bold;
        &:hover{
            text-decoration:none;
            text-decoration-color:none;
            cursor:text;
        }
`
const StyledButton=styled.div`
    display:flex;
    justify-content:center;
    width:200px;
    background-color:black;
    border-radius:7px;
    font-size:1.2rem;
    height:30px;
    color:white;
    margin-left:20px;
    border:none;

`
const ButtonContainer=styled.div`
    width:410px;
    display:flex;
`
