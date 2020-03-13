import * as actionTypes from './actionsTypes'

export const findUser = (accountdetails,authen) => {
    return {
        type : actionTypes.Find_User, 
        accountProperty:accountdetails, 
        auth:authen
    }
}