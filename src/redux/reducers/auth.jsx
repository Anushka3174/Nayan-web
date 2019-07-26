import { LOGIN_TOKEN,LOGOUT } from "../actions/index.jsx"


export const auth=(state = null,action)=>{
    switch(action.type){
        case LOGIN_TOKEN:
            if(action.auth!==undefined){
                return action.auth;
            }
            return null;
        case LOGOUT:
            return "";    
        default:
            return state;
    }
};