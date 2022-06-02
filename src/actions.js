import {
CHANGE_SEARCH_FIELD,
CHANGE_SEARCH_PENDING,
CHANGE_SEARCH_SUCCESS,
CHANGE_SEARCH_FAIL,
} from './constants'

export const setSearchField = (text) =>{
    // console.log('coming from action', text)
    return { 
    type: CHANGE_SEARCH_FIELD,  //constant 
    payload: text //common name used in redux //whatever user enters
}}