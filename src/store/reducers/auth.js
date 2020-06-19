import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility'

const initialState = {
    token : null,
    userID : null,
    error : null,
    isAuth : false,
    loading : false
};

const authStart = (state, action) => {
    return updatedObject(state, {error: null, loading:true})
};

const authSuccess = (state, action) => {
    return updatedObject(state, {
        token : action.idToken,
        userId: action.userId,
        error : null,
        isAuth : true,
        loading : false
    })
};

const authFail = (state, action) => {
    return updatedObject(state, {
        error: action.error,
        loading: false,
        isAuth : false,
    })
};

const authLogout = (state, action) => {
    return updatedObject(state, {
        token : null,
        userId: null,
        isAuth : false,
    })
};

const auth = (state = initialState , action) => {
    switch(action.type) {
        case actionTypes.AUTH_START : return authStart(state, action);
        case actionTypes.AUTH_SUCCESS :return authSuccess(state, action);
        case actionTypes.AUTH_FAIL :return authFail(state, action);
        case actionTypes.AUTH_LOGOUT :return authLogout(state, action);
        default: return state
    }
}

export default  auth