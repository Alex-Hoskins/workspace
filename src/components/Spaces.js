import React, { useState } from 'react';
import styled from 'styled-components';
import Space from './Space';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

const Spaces = (props) =>{
    let spaces = props.filterSpaces

    return(
    <HomeStyle>
        <h2>See what our users have to offer!</h2>
       {spaces.length == 0 && <h3>loading available WorkSpaces...</h3> ||
        <ListStyle>
            {spaces.map((space, i)=>{
            return <Link to={`/spaces/${space.workspace_id}`}><Space key={Math.random()} space={space}/></Link>
            })}
        </ListStyle>}
        <Link to="/addworkspace">Add your own WorkSpace to our inventory <StSpan>HERE</StSpan>!</Link>
    </HomeStyle>

    )}
    const mapStateToProps = (state) =>{
        return{
            spaces: state.spaces,
            filterSpaces:state.filterSpaces
        }
    }
export default connect(mapStateToProps)(Spaces);

const HomeStyle = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0px;
    margin:0px;
    min-height:80vh;
    width:100%;
    h2{
        font-size:2.6rem;
        text-align:center;
        margin:20px;
    }
`
const ListStyle = styled.ul`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:flex-start;
    margin:0px;
    padding:0px;
    @media (max-width: 1438px) {
    flex-direction: row;
    width:100%;
  }
`
const StSpan=styled.span`
    color:teal;
`