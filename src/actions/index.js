export const SET_SPACES = "SET_SPACES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
import axios from 'axios'

export const setSpaces = (spaces) =>{
    return({type: SET_SPACES, payload: spaces})
}

export const logIn = () =>{
    return({type: LOG_IN})
}

export const logOut = () =>{
    return({type: LOG_OUT})
}

export const getWorkspaces = () =>{
    return (dispatch) => {
        axios.get('http://localhost:9000/api/workspace')
            .then(resp=> {
                dispatch(setSpaces(resp.data))
            })
            .catch(err => {
                console.log(err);
            });
    }
}

