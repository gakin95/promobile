import * as actionTypes from './actionsTypes';
import { config } from '../../../src/axios';
import axios from 'axios'

export const getUser = (payload) => {
    return {
        type : actionTypes.GET_USER,
        payload
    };
};

export const getUserFail = (error) => {
    return {
        type : actionTypes.GET_USER_FAIL,
        error : error
    };
};

export const displayUser = (token) => {
    return dispatch => {
         axios({
            method : 'get',
            url: config.user,
            headers : {
              'x-auth-token' : token
            }
          })
          .then(res => {
              console.log(res.data);
              dispatch(getUser(res.data))
          })
          .catch(err => {
            console.log(err.response.data);
            dispatch(getUserFail(err.response.data))
          })
    }
}

