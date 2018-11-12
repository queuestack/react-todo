import { AuthTypes } from '../constants'

export default function(state = null, action) {
    switch(action.type) {
        case AuthTypes.FETCH_USER:
            return action.payload || false
        default:
            return state
    }
}