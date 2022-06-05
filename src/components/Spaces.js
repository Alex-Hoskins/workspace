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
    width:auto;
    h2{
        font-size:2.6rem;
        text-align:center;
        margin:20px;
    }
`
const ListStyle = styled.ul`
    display: grid;
    width:100%;
    grid-template-columns: minmax(25%, max-content)
    repeat(auto-fill, 25%) 25%;
    justify-content: space-evenly;
    justify-items: center;
    align-content: space-evenly;
    align-items: center;
    position:center;
    @media (max-width: 1438px) {
        grid-template-columns: minmax(33%, max-content)
        repeat(auto-fill, 33%) 33%;
    };
    @media (max-width: 1000px) {
        grid-template-columns: 50% 50%;
    };
    @media (max-width: 700px) {
        grid-template-columns: 100%;
    };
`
const StSpan=styled.span`
    color:teal;
`