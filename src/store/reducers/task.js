import { TaskTypes } from '../constants'

const initState = {
    authedUser: '',
    tasks: []
}

export default (state = initState, action) => {

    switch(action.type) {
        case TaskTypes.ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks, 
                    action.task
                ]
            }
        case TaskTypes.SET_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id === action.id ? action.task : task
                })
            }
        default:
            return state
    }

}