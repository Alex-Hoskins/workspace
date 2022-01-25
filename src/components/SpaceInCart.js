import { useParams } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { add_user_space } from "../actions";

const SpaceInCart = (props) =>{
    const params = useParams()
    let spaces = props.spaces
    console.log('hello from userSpaces', props.userSpaces)
    let userSpaces= props.userSpaces
    let {workspace_id} =  params
    let [space] = spaces.filter(s => {
        return (  workspace_id == s.workspace_id)
    })

    const bookSpace=()=>{
        
        console.log('Book WorkSpaces coming soon!')
        
    }
    return(
    <ItemStyle>
        {!space && <h2>loading...</h2> ||
        <StyledDetails>
            <img src={space.image_content} alt={space.image_description} />
            <StyledDetails2>
                <h2><StyledSpan>{space.name}</StyledSpan> </h2>
                <p><StyledSpan>Price:</StyledSpan> ${space.workspace_price}</p> 
                <p><StyledSpan>Location:</StyledSpan> {space.workspace_location}</p>
                <p><StyledSpan>Description:</StyledSpan> {space.workspace_description}</p>
                <button onClick={bookSpace}><LineSpan>Book </LineSpan> (coming soon)</button>
                <p>Booking WorkSpaces coming soon!</p>
            </StyledDetails2>
        </StyledDetails>
        }
    </ItemStyle>
    )}
    const mapStateToProps = (state) =>{
        return{
            spaces: state.spaces,
            userSpaces:state.userSpaces
        }
    }
export default connect(mapStateToProps)(SpaceInCart);

const ItemStyle = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:90%;
    min-height:80vh;
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
        align-items:center;
        width:160px;
        background-color:teal;
        border-radius:7px;
        font-size:1.2rem;
        height:30px;
        color:white;
        border:none;
        margin-top:30px;
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
const LineSpan=styled.span`
    text-decoration:line-through;
`
