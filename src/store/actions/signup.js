import * as actionTypes from './actionsTypes';
import { config } from '../../../src/axios';
import axios from 'axios'

export const accountDetails = (payload) => {
    return {
        type : actionTypes.ACCOUNT_DETAILS,
        payload
    }
}

export const gatherPersonalDetails = (payload) => {
    return {
        type : actionTypes.GATHER_PERSONAL_DETAILS,
        payload
    };
};

export const regStart = () => {
    return {
        type : actionTypes.REG_START
    };
};

export const regSuccess = (payload) => {
    localStorage.removeItem('errorMsg');
    return {
        type : actionTypes.REG_SUCCESS,
        // idToken: token,
        payload
    };
};

export const regFAIL = (error) => {
    return {
        type : actionTypes.REG_FAIL,
        error : error
    };
};



export const authSignUp = (firstName , lastName,middleName ,phone , email ,address, username, password,accounts) => {
    return dispatch => {
        dispatch(regStart());
        const authData = {
            firstName : firstName,
            lastName : lastName,
            middleName : middleName,
            phone : phone,
            email : email,
            address : address,
            username : username,
            password : password,
            accounts : accounts
        }
        axios.post(config.register, authData)
        .then(res => {
            console.log(res.data);
            dispatch(regSuccess(res.data));
        })
        .catch(err => {
            localStorage.setItem('errorMsg', err.response.data);
            console.log(err.response.data);
            dispatch(regFAIL(err.response.data))
        })
    }
};



