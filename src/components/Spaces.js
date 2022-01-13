import React from 'react';
import styled from 'styled-components';
import Space from './Space';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

const Spaces = (props) =>{
    const spaces =props.spaces

    return(
        
    <HomeStyle>
       <h2>See what our users have to offer!</h2>
        <ListStyle>
            {spaces.map((space, i)=>{
            return <Link to={`/spaces/${space.workspace_id}`}><Space key={Math.random()} space={space}/></Link>
            })}
        </ListStyle>
    </HomeStyle>
    )}
    const mapStateToProps = (state) =>{
        return{
            spaces: state.spaces
        }
    }
export default connect(mapStateToProps)(Spaces);

const HomeStyle = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0;
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