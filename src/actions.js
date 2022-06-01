import {CHANGE_SEARCH_FIELD} from './constants'

export const setSearchField = (text) =>({ ///returning an object
    type: CHANGE_SEARCH_FIELD,  //constant 
    payload: text //common name used in redux //whatever user enters
})