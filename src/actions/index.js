export const SET_SPACES = "SET_SPACES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export const setSpaces = () =>{
    return({type: SET_SPACES})
}

export const logIn = () =>{
    return({type: LOG_IN})
}

export const logOut = () =>{
    return({type: LOG_OUT})
}
