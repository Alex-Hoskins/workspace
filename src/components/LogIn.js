import axios from "axios";
import React, { useState } from "react";
import { connect } from 'react-redux';
import { logIn } from "../actions";
import { useNavigate } from "react-router-dom";


const LogIn = (props) =>{
    const navigate = useNavigate();
    const [user,setUser] = useState({
             username: '',
             password: ''
        })
    

    const handleUsernameChange = (event) => {
        setUser({
            ...user,
            username: event.target.value
        })
    }
    
    const handlePasswordChange = (event) => {
        setUser({
            ...user,
            password: event.target.value 
        })
    }

    const handleSubmit = event =>{
        event.preventDefault();
        props.dispatch(logIn());
        navigate('/');
    }
   
    return (

        <div className='market'>
            <form onSubmit={handleSubmit}>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input 
                        type="username" 
                        value={user.username}
                        onChange={handleUsernameChange}
                        className="form-control" 
                        placeholder="Enter username" 
                        />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input 
                    type="password" 
                    value={user.password}
                    onChange={handlePasswordChange}
                    className="form-control" 
                    placeholder="Enter password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
        )
}

const mapStateToProps = (state) =>{
    return{
        spaces: state.spaces,
        state: state
        
    }
   
}

export default connect(mapStateToProps)(LogIn);