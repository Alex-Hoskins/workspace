export const SET_SPACES = "SET_SPACES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const ADD_USER_SPACE = "ADD_USER_SPACE";

import axios from 'axios'

export const setSpaces = (spaces) =>{
    return({type: SET_SPACES, payload: spaces})
}

export const add_user_space = (space) =>{
    console.log('hello form action')
    return({type: ADD_USER_SPACE, payload: space})
}

export const logIn = () =>{
    return({type: LOG_IN})
}

export const logOut = () =>{
    return({type: LOG_OUT})
}

export const getWorkspaces = () =>{
    return (dispatch) => {
        axios.get('https://workspacebackend.herokuapp.com/api/workspace')
            .then(resp=> {
                dispatch(setSpaces(resp.data))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

