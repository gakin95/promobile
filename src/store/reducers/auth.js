import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility'

const initialState = {
    token : null,
    userId : null,
    error : null,
    loading : false
};

const authStart = (state, action) => {
    return updatedObject(state, {error: null, loding:true})
};

const authSuccess = (state, action) => {
    return updatedObject(state, {
        token : action.idToken,
        userId : action.userId,
        error : null,
        loading : false
    })
};

const authFail = (state, action) => {
    return updatedObject(state, {error: action.error, loding:true})
};

const auth = (state = initialState , action) => {
    switch(action.type) {
        case actionTypes.AUTH_START : authStart(state, action);
        case actionTypes.AUTH_SUCCESS : authSuccess(state,action);
        case actionTypes.AUTH_FAIL : authFail(state,action);
        default: return state
    }
}

export default  auth