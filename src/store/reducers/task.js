import { TaskTypes } from '../constants'

export default (state = {}, action) => {
    switch(action.type) {
        case TaskTypes.GET_TASKS:
            return {
                ...state
            }
        case TaskTypes.ADD_TASK:
            return {
                ...state,
                ...action.task,
            }
        default:
            return state
    }

}