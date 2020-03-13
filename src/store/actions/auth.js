import * as actionTypes from './actionsTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    };
};

export const authSUCCESS = (token) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        token
    };
};

export const authFAIL = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    };
};

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email : username,
            password : password,
            //returnSecureToken: true
        }
        axios.post('https://matrixx-server.herokuapp.com/api/auth/login', authData)
        .then(res => {
            console.log( res.data);
            dispatch(authSUCCESS(res.data.token))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFAIL(err))
        })
    }
}

export const authorize = () => {
    return dispatch => {
        dispatch(authStart());
        axios.get('https://matrixx-server.herokuapp.com/api/users/me', 
           { headers : {
                "Authorization" : `Bearer ${authSUCCESS.token}`
            }}
        

        )
        .then(res => {
            console.log( res.data);
            //dispatch(authSUCCESS(res.data.token))
        })
        .catch(err => {
            console.log(err);
            //dispatch(authFAIL(err))
        })
    }
}