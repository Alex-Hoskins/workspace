import React from 'react';
import styled from 'styled-components';


const Space = (props) =>{
    const { space } = props
    return(
    <ItemStyle>
        <div>
            <img src={space.image} alt={space.name} />
            <p><StyledSpan>Item:</StyledSpan> {space.name}</p>
            <p><StyledSpan>Price:</StyledSpan> ${space.price}</p> 
            <p><StyledSpan>Description:</StyledSpan> {space.description}</p>
            <p><StyledSpan>WorkSpace Elite:</StyledSpan> {space.workspaceElite ? 'Yes' : 'No'}</p>
        </div>
    </ItemStyle>
    )}
export default Space;

const ItemStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:400px;
    height:500px;
    margin:20px;
    background-color:white;
    img{
        width:400px;
        height:300px;
        object-fit: cover;
    }
    p{
        font-size:1rem;
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