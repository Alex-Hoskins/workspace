import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header = (props) =>{
    return(
    <HeaderStyle>
        <NavContainer>
            <h1>WorkSpace</h1>
            <NavStyle>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/search">Advanced Search</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                {props.state.loggedIn ? <li><Link to="/logout"><SpanStyled>Logout</SpanStyled></Link></li> : <li><Link to="/login"><SpanStyled>Login</SpanStyled></Link></li>}   
            </NavStyle>
        </NavContainer>
    </HeaderStyle>)
}
const mapStateToProps = (state) =>{
    return{
        state: state

    }
   
}

export default connect(mapStateToProps)(Header);

const SpanStyled = styled.span`
    background-color:teal;
    border-radius:30px;
    color:white;
    padding:4px 18px 4px 18px;
    &:hover{
        text-decoration-color:white;
    }
`
const HeaderStyle = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height:10%;
    margin:0px;
    padding:0px;

    h1{
        background-color:white;
        width:300px;
        font-size:2.4rem;
        margin:0;
        text-align:center;
        font-weight:300;
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
  li {
        display: flex;
        flex-direction:row;
        padding: 0;
        color:black;
        margin-bottom:0;
        
        a {
            text-decoration: none;
            color: black;
            font-size: 1.4em;
            &:hover{
            font-weight:bold;
            text-decoration:underline;
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