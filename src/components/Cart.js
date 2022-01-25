import React from 'react';
import styled from 'styled-components';
import SpaceInCart from './SpaceInCart';
import Space from './Space';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

const Spaces = (props) =>{
    const spaces =props.userSpaces

    return(
    <HomeStyle>
       <h2>Your Saved WorkSpaces</h2>
       <Link to="/addworkspace">Or add your own WorkSpace to our inventory <StSpan>HERE</StSpan>!</Link>
       {spaces.length == 0 && <h3>Add WorkSpaces to your Cart and view them here!</h3> ||
        <ListStyle>
            {spaces.map((space, i)=>{
            return <Link to={`/cart/${space.workspace_id}`}><Space key={Math.random()} space={space}/></Link>
            })}
        </ListStyle>}
        <Link to="/addworkspace">Add your own WorkSpace to our inventory <StSpan>HERE</StSpan>!</Link>
    </HomeStyle>

    )}
    const mapStateToProps = (state) =>{
        return{
            userSpaces: state.userSpaces
        }
    }
export default connect(mapStateToProps)(Spaces);

const HomeStyle = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0;
    min-height:80vh;
    h2{
        font-size:2.6rem;
        margin:20px;
    }
`
const ListStyle = styled.ul`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    @media (max-width: 1438px) {
    flex-direction: row;
    justify-content:space-evenly;
    width:100%
  }
`
const StSpan=styled.span`
    color:teal;
`