import React from 'react';
import styled from 'styled-components';
import SpaceInCart from './SpaceInCart';
import Space from './Space';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';

const About = (props) =>{
    const spaces =props.userSpaces

    return(
        <AboutFormat>
            <AboutStyle>
            <h2>What is WorkSpace?</h2>
            <p>WorkSpace is here to meet the ever changing needs of remote workers with flexibility, quality, and innovation. Now more than ever, professionals desire no commute, flexible schedules, and amazing office spaces. With our selection of quality WorkSpaces, you can work from anywhere at anytime!  <br /><br /><StSpan>It is the professional office environment with out the commute. It is the comfort of working from home without the distractions!</StSpan><br /><br />Add your own office, spare room, coffee shop corner, or professional building and let our users book it for the day. Or choose from our inventory of WorkSpaces to find the space right for you. Like a home away from home, we are here to give you an office away from the office.</p>
            <h3>Where will you work today?</h3>
            </AboutStyle>
        </AboutFormat>

    )}
    const mapStateToProps = (state) =>{
        return{
            userSpaces: state.userSpaces
        }
    }
export default connect(mapStateToProps)(About);
const AboutFormat = styled.div`
    display:flex;
    justify-content:center;
`
const AboutStyle = styled.ul`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:0;
    min-height:80vh;
    width:50%;
    h2{
        font-size:2.6rem;
        margin:0px;
        margin-top:15px;
    }
    p{
        font-size:1.8rem;
    }
    h3{
        font-size:1.8rem;
        font-weight:bold;
        margin-top:0;
    }
`

const StSpan=styled.span`
    color:teal;
    font-weight:bold;

`