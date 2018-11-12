import { AuthTypes } from '../constants'

export default function(state = {}, action) {
    console.log(action)
    switch(action.type) {
        case AuthTypes.FETCH_USER:
            return state
        default:
            return state
    }
}