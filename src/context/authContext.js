import jwtDecode from 'jwt-decode';
import { createContext, useReducer } from 'react';

const initialState = {
    user: null
}

if (localStorage.getItem('token')) {
    const decoded = jwtDecode(localStorage.getItem('token'));
    if (decoded.exp * 1000 < Date.now()) {
        localStorage.removeItem('token');
    } else {
        initialState.user = decoded;
    }
}

const AuthContext = createContext({
    user: null,
    login: (userData) => { },
    logout: () => { }
});

function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null
            }
        default:
            return state;
    }
}

function AuthProvider(props) {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (userData) => {
        console.log(userData);
        console.log("->_>_>WWWW");
        localStorage.setItem('token', userData.token);
        dispatch({
            type: 'LOGIN',
            payload: userData
        })
    }
    function logout() {
        localStorage.removeItem('token');
        dispatch({
            type: 'LOGOUT'
        })
    }
    return (<AuthContext.Provider
        value={{ user: state.user, login, logout }}
        {...props}
    />)
}

export { AuthContext, AuthProvider };