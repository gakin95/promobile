import * as actionTypes from '../actions/actionsTypes';
import { updatedObject } from '../utility';

const initialState = {
    user : null,
    error : null
};

const getUser = (state, action) => {
    return updatedObject(state, {
        user: action.payload,
        error: null
    })
};

const getUserFail = (state, action) => {
    return updatedObject(state, {
        user: null,
        error: action.error
    })
}

const displayUser = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.GET_USER: return getUser(state, action);
        case actionTypes.GET_USER_FAIL: return getUserFail(state, action);
        default: return state
    }
}

export default displayUser