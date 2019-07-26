export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const LOGOUT = 'LOGOUT';

export function login(auth){
    return{
        type:LOGIN_TOKEN,
        auth
    }

}

export const logout = () => {
    return {
        type: LOGOUT,
    }
};