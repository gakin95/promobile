import * as actionTypes from './actionsTypes';
import { config } from '../../../src/axios';
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    };
};

export const authSuccess = (token,userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId
    };
};

export const authFAIL = (error) => {
    return {
        type : actionTypes.AUTH_FAIL,
        error : error
    };
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

const checkAuthTimeOut = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000);
    }
}

export const auth = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username : username,
            password : password,
        }
        axios.post(config.login, authData)
        .then(res => {
            console.log(res.data);
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('userId',res.data.userId);
            localStorage.setItem('expirationDate', expirationDate);
            dispatch(authSuccess(res.data.idToken, res.data.userId));
            dispatch(checkAuthTimeOut(res.data.expiresIn));
        })
        .catch(err => {
            console.log(err.response.data);
            dispatch(authFAIL(err.response.data))
        })
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            }else {
                const userId = localStorage.getItem('userId');
                dispatch(authSuccess(token, userId));
                dispatch(checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    };
};

