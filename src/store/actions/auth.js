import * as actionTypes from './actionsTypes';
import { config } from '../../../src/axios';
import axios from 'axios'

export const authStart = () => {
    return {
        type : actionTypes.AUTH_START
    };
};

export const authSUCCESS = (token, userId) => {
    return {
        type : actionTypes.AUTH_SUCCESS,
        idToken : token,
        userId
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
            username : username,
            password : password,
            returnSecureToken: true
        }
        axios.post(config.login, authData)
        .then(res => {
            console.log( res.data);
            dispatch(authSUCCESS(res.data.idToken, res.data.localId))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFAIL(err))
        })
    }
}

