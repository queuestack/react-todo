import { combineReducers } from 'redux'

import task from './task'
import auth from './auth'

export default combineReducers({
    task,
    auth
})