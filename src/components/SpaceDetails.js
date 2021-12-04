import React from 'react';
import styled from 'styled-components';


const Space = (props) =>{
    const { space } = props
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
            </StyledDetails2>
        </StyledDetails>
    </ItemStyle>
    )}
export default Space;

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
        height:auto;
        object-fit: cover;
        border-radius:10px;
    }
    p{
        font-size:2rem;
    }
    h2{
        font-size:3rem;
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
`

const StyledSpan=styled.span`
    font-weight:bold;
        &:hover{
            text-decoration:none;
            text-decoration-color:none;
            cursor:text;
        }
`