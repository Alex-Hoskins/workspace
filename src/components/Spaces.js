import React, { useState} from 'react';
import styled from 'styled-components';
import Space from './Space';
import { data } from '../data/data'

const initialSpaces= data;

const Spaces = () =>{
    const[spaces, setSpaces]=useState(initialSpaces)
    const [isToggled,setIsToggled]=useState(false)

    const toggle=()=>{
        setIsToggled(!isToggled)
        console.log(isToggled)
    }

    return(
    <HomeStyle>
       <h2>See what our users have to offer!</h2>
        {isToggled && <ListStyle>
            <LandingItem item={spaces[0]}/>
            <LandingItem item={spaces[1]}/>
            <LandingItem item={spaces[2]}/>
            <LandingItem item={spaces[3]}/>
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
export default Spaces;

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