import { combineReducers } from 'redux'

import task from './task'
import authReducer from './authReducer'

export default combineReducers({
    task,
    auth: authReducer
})