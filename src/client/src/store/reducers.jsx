import T from '../constants/types'
import { combineReducers } from 'redux'


export const Products = (state={}, action) => {
    console.log(`state & payload: ${JSON.stringify(action.payload)}`)
    switch(action.type) {

        case T.DATA.GET_PRODUCTS :
            return Object.assign(action.payload, ...action.payload)
        case T.DATA.GET_CURRENCIES :
            return Object.assign(action.payload, ...action.payload)
        case T.DATA.GET_IP :
            return Object.assign(action.payload, ...action.payload)
        default:
            return state
    }
};

export default combineReducers({
    Products
})



