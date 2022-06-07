import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) =>{
    let userSpaces = props.userSpaces
    return(
    <HeaderStyle>
        <NavContainer>
            <h1>WorkSpace</h1>
            <NavStyle>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/spaces">Spaces</Link></li>
               <li><Link to="/cart">Cart({userSpaces.length})</Link></li>
                {props.state.loggedIn ? <li><Link to="/logout"><SpanStyled>Logout</SpanStyled></Link></li> : <li><Link to="/login"><SpanStyled>Login</SpanStyled></Link></li>}   
            </NavStyle>
        </NavContainer>
    </HeaderStyle>)
}
const mapStateToProps = (state) =>{
    return{
        state: state,
        userSpaces: state.userSpaces

    }
   
}

export default connect(mapStateToProps)(Header);

const HeaderStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:10%;
    margin:0px;
    padding:1%;
    box-sizing:border-box;
    border-bottom:1px solid gray;
    h1{
        background-color:white;
        width:300px;
        font-size:2.4rem;
        margin:0px;
        text-align:center;
        font-weight:300;
        @media (max-width: 700px) {
            font-size:4rem;
          }
    }

    p {
        font-weight: bold;
        font-size: 1.5em;
    }
`
const NavContainer=styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    background-color:white;
    border:none;
    @media (max-width: 700px) {
    flex-direction: column;
    align-items:center;
  }
`
const NavStyle = styled.ul`
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:1000px;
    height:40px;
    margin:0px;
    padding:0px;
    color:black;
    @media (max-width: 700px) {
    width:100%;
    flex-direction:column;
    height:auto;
  }
  li {
        display: flex;
        flex-direction:row;
        padding: 0;
        color:black;
        margin-bottom:0;
        @media (max-width: 700px) {
            width:100%;
            justify-content:center;
            height:auto;
            font-size:1.5rem;
            margin:5px;
            background-color:rgb(245,245,245);
        }
        a {
            text-decoration: none;
            color: black;
            font-size: 1.3em;
            &:hover{
            font-weight:bold;
            text-decoration-color:teal;
            }
        }
    }
    h2{
            font-size:1.2rem;
            display:flex;
            align-items:center;
            justify-content:center;
        }
`
const SpanStyled = styled.span`
    background-color:teal;
    border-radius:30px;
    color:white;
    padding:4px 18px 4px 18px;
    @media (max-width: 700px) {
        justify-content:center;
        height:auto;
        margin:5px;            
        background-color:rgb(245,245,245);
        color:teal;
        border-radius:0px;
        padding:0px;
      }
`