import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Space = (props) =>{
    const { space } = props

    return(
    <ItemStyle>
            <img src={space.image_content} alt={space.image_description} />
            <p><StyledSpan>{space.workspace_name}</StyledSpan> ${space.workspace_price}/4hrs</p>
            <p>{space.workspace_location}</p>
    </ItemStyle>
    )}

    const mapStateToProps = (state) =>{
        return{
            spaceDetails: state.spaceDetails
        }
    }
export default connect(mapStateToProps)(Space);

const ItemStyle = styled.button`
    border:none;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:300px;
    height:300px;
    margin:10px;
    padding:0px;
    background-color:white;
    p{
        margin:0px;
        margin-top:5px;
        
    }
    @media (max-width: 1100px) {
        width:400px;
        height:400px;
        }
    @media (max-width: 920px) {
        width:280px;
        height:300px;
        }
    @media (max-width: 720px) {
        width:380px;
        height:400px;
        }
    img{
        width:300px;
        height:200px;
        object-fit: cover;
        border-radius:10px;
        @media (max-width: 1100px) {
        width:400px;
        height:300px;
        }
        @media (max-width: 920px) {
        width:280px;
        height:200px;
        }
        @media (max-width: 720px) {
        width:380px;
        height:300px;
        }
    }
    p{
        font-size:1rem;
    }
    &:hover{
        cursor:pointer
    }
`
const StyledSpan=styled.span`
    font-weight:bold;
    color:black;
`