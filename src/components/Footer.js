import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
    return(
        <FooterStyle>
            <p><h3>Company</h3>The WorkSpace App</p>
            <p><h3>Location</h3>San Francisco, CA</p>
            <a href="https://github.com/Alex-Hoskins/workspace"><p><h3>GitHub</h3>https://github.com/Alex-Hoskins/workspace5</p></a>
        </FooterStyle>
        )
}

const FooterStyle=styled.div`
display:flex;
justify-content:space-around;
align-items:flex-end;
min-height:7vh;
background:#00000008;;
color:gray;
border-top:1px solid gray;
@media (max-width: 675px) {
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:1rem;
  }
    a{
        color:gray;
        text-decoration:none;
    }
`


export default Footer;