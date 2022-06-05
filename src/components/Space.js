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
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:flex-start;
    width:300px;
    height:300px;
    padding:5px;
    margin:10px;
    background-color:rgb(245,245,245);
    border:none;
    @media (max-width: 700px) {
        width:400px;
        height:400px;
    };
    p{
        margin:0px;
        margin-top:5px;
        
    }
    img{
        width:280px;
        height:200px;
        object-fit: cover;
        border-radius:10px;
        @media (max-width: 700px) {
            width:380px;
            height:300px
        };
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