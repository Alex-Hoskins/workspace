import React, { useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { logOut } from "../actions";
import { connect } from 'react-redux';

const LogOut = (props)=> {
    const navigate = useNavigate();
    useEffect(()=> {
       localStorage.removeItem('token');
       props.dispatch(logOut())
       navigate('/')

    }, [navigate]);

    return(<div></div>);
}

const mapStateToProps = (state) =>{
    return{
        spaces: state.spaces,
        state: state
        
    }
   
}

export default connect(mapStateToProps)(LogOut);