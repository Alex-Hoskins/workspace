import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateAccount = (props) => {
    const [user, setUser] = useState({
        username:"",
        password:""
    });
    const handleChanges = event => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const navigate = useNavigate();
    const submitForm = event => {
        event.preventDefault();
        console.log('created an account');
        navigate('/login');
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <div>
                    <h2>Create Account</h2>
                    <label>First Name: </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label>Last Name: </label>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label>Email</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="enter Username"
                        onChange={handleChanges}
                        value={user.username} />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={handleChanges}
                        value={user.password} />
                    </div>
                    <button>Create Account</button>
            </form>
        </div>
    )
    }
export default CreateAccount;