import React from 'react';
import styled from 'styled-components';

const Footer = () =>{
    return(
        <FooterStyle>
            <p><h3>Company</h3>The WorkSpace App</p>
            <p><h3>Location</h3>San Francisco, CA</p>
            <a href="https://github.com/Alex-Hoskins/workspace" target='blank'><p><h3>GitHub</h3>https://github.com/Alex-Hoskins/workspace5</p></a>
        </FooterStyle>
        )
}

const FooterStyle=styled.div`
display:flex;
justify-content:space-around;
align-items:flex-end;
min-height:7vh;
background-color:hsl(0, 5%, .5%, 97%);
color:white;
border-top:1px solid gray;
@media (max-width: 700px) {
    flex-direction:column;
    align-items:center;
    text-align:center;
    justify-content:center;
    font-size:1rem;
  }
a{
    color:white;
    text-decoration:none;
    @media (max-width: 700px) {
        margin:0px;
      }
}
h3{
    color:teal;
    @media (max-width: 700px) {
        margin:0px;
      }
}
`


export default Footer;