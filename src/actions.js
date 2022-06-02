import {
CHANGE_SEARCH_FIELD,
REQUEST_SEARCH_PENDING,
REQUEST_SEARCH_SUCCESS,
REQUEST_SEARCH_FAIL,
} from './constants'

export const setSearchField = (text) =>{
    // console.log('coming from action', text)
    return { 
    type: CHANGE_SEARCH_FIELD,  //constant 
    payload: text //common name used in redux //whatever user enters
}}

export const requestData = () => dispatch => {
    dispatch({type: REQUEST_SEARCH_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=> dispatch({type: REQUEST_SEARCH_SUCCESS, payload: data}))
    .catch(err=>dispatch({type: REQUEST_SEARCH_FAIL, payload: err}))
}