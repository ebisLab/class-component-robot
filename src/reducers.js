import {
CHANGE_SEARCH_FIELD,
REQUEST_SEARCH_PENDING,
REQUEST_SEARCH_SUCCESS,
REQUEST_SEARCH_FAIL,
} from './constants'

const initialStateSearch = {
    searchField: ''
}

const initialStateData = {
    isPending: false,
    data:[],
    error:''
}

export const searchData = (state=initialStateSearch, action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // return { ... state, searchField: action.payload } //cleaner
            return Object.assign({}, state, {searchField: action.payload}) //same as line above
        default:
            return state;
    }
}

export const requestData = (state=initialStateSearch, action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            // return { ... state, searchField: action.payload } //cleaner
            return Object.assign({}, state, {searchField: action.payload}) //same as line above
        default:
            return state;
    }
}

// export const requestData=(state=initialStateData, action={})=>{
//     switch(action.type){
//         case REQUEST_SEARCH_PENDING:
//             return Object.assign({}, state, {isPending: true})
//         case REQUEST_SEARCH_SUCCESS:
//             return Object.assign({}, state, {data: action.payload, isPending: false})
//         case REQUEST_SEARCH_FAIL:
//             return Object.assign({}, state, {error: action.payload, isPending: false})
//     }
// }