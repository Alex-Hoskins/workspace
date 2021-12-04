import React, { useState} from 'react';
import styled from 'styled-components';
import Space from './Space';
import { data } from '../data/data';
import { connect } from 'react-redux';

const Spaces = (props) =>{
    const spaces =props.spaces
    const [isToggled,setIsToggled]=useState(false)

    const toggle=()=>{
        setIsToggled(!isToggled)
        console.log(isToggled)
    }

    const letsSeeIt=(id)=>{
        if(seeMore === id){
            setSeeMore('')
        }
        else{setSeeMore(id)}
    }

    return(
        
    <HomeStyle>
       <h2>See what our users have to offer!</h2>
        {isToggled && <ListStyle>
            <Space space={spaces[0]}/>
            <Space space={spaces[1]}/>
            <Space space={spaces[2]}/>
            <Space space={spaces[3]}/>
        </ListStyle>}
        {
        !isToggled &&
        <ListStyle>
            {spaces.map(space=>{
            return <Space key={space.space_id} space={space}/>
            })}
        </ListStyle>
        }
        <button onClick={toggle}>See More</button>
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