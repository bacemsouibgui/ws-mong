import { GET_CONTACTS } from "../actions/actionsTypes"

// state initiale
const initState={
    contacts:[]
}

// Reducer
export const contReducer=(state=initState,{type,payload})=> {

    switch(type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload
            }

        default:
            return state;
    }

}