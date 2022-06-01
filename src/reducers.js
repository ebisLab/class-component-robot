import {CHANGE_SEARCH_FIELD} from './constants'

const initialState = {
    searchField: ''
}

export const searchData = (state=initialState, action={})=>{
    switch(action.type){
        case: CHANGE_SEARCH_FIELD:
            return { ... state, searchField: action.payload } //cleaner
            // return Object.assign({}, state, searchField: action.payload) //same as line above
        default:
            return state;
    }
}