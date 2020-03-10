import * as actionType from './actions';

const initState = {
    authenticated : 'false',
    currAcc: '',
    account : {
        id:'', 
        name: '' , 
        num: ''
    }
}

 const reducer = (state=initState, action) => {
     switch(action.type) {
         case actionType.Find_User:
             console.log('From reducer', state)
             const newState =  {
                ...state,
                authenticated : action.auth,
                account : action.accountProperty
             }
             console.log('From reducer after', newState)
             return newState;
        default:
            return state
     }
}

export default reducer