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
    justify-content:space-around;
    align-items:center;
    background-size:100%;
    margin:0;
    box-sizing:border-box;
`
const ListStyle = styled.ul`
    display:flex;
    flex-wrap:wrap;
`