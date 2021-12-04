import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { seeMore } from '../actions';


const Space = (props) =>{
    const { space } = props

    const letsSeeIt=()=>{
        props.dispatch(seeMore(space))
    }

    return(
    <ItemStyle onClick={letsSeeIt}>
        <div>
            <img src={space.image} alt={space.name} />
            <p><StyledSpan>{space.name}</StyledSpan> ${space.price}/4hrs</p>
            <p>{space.location}</p>
        </div>
    </ItemStyle>
    )}

    const mapStateToProps = (state) =>{
        return{
            spaceDetails: state.spaceDetails
        }
    }
export default connect(mapStateToProps)(Space);

const ItemStyle = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:300px;
    height:300px;
    margin:20px;
    background-color:white;
    img{
        width:300px;
        height:200px;
        object-fit: cover;
        border-radius:10px;
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