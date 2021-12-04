export const SET_SPACES = "SET_SPACES";
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const SEE_MORE = "SEE_MORE";

export const setSpaces = () =>{
    return({type: SET_SPACES})
}

export const logIn = () =>{
    return({type: LOG_IN})
}

export const logOut = () =>{
    return({type: LOG_OUT})
}
export const seeMore = (space) =>{
    return({type: SEE_MORE, payload:space})
}
