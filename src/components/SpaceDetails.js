import { useParams } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { add_user_space } from "../actions";

const SpaceDetails = (props) =>{
    const params = useParams()
    let spaces = props.spaces
    console.log('hello from userSpaces', props.userSpaces)
    let userSpaces= props.userSpaces
    let {workspace_id} =  params
    let [space] = spaces.filter(s => {
        return (  workspace_id == s.workspace_id)
    })
    if(space){
        let emailName = space.workspace_name.split(' ')
        emailName=emailName.join('')
        space.email=emailName+`@workspace.com`
        } 
    const addToCart=()=>{
        let inCart=false
        if(userSpaces){
            for(let x of userSpaces){
                if(x.workspace_name == space.workspace_name){
                    inCart=true
                }
            }
        }
        
        if(!inCart){
            props.dispatch(add_user_space(space)) 
        }
        console.log(userSpaces)
        
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
                {space.email && <p><StyledSpan>Email:</StyledSpan> {space.email}</p>}
                <button onClick={addToCart}>Add To Cart </button>
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
export default connect(mapStateToProps)(SpaceDetails);

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
        @media (max-width: 900px) {
            width:100%;
            height:400px;
          }
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
    @media (max-width: 900px) {
        flex-direction:column;
      }


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
    }
    @media (max-width: 900px) {
        height:auto;
        margin:0px;
        padding:0px;
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

