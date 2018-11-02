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
        case TaskTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task, id) => {
                    return id !== action.id
                })
            }
        case TaskTypes.TOGGLE_TASK:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id === action.id ? {
                        ...task,
                        done: !task.done
                    } : task
                })
            }
        case TaskTypes.SET_TASK_PRIORITY:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id == action.id ? {
                        ...task,
                        priority: action.priority
                    } : task
                })
            }
        case TaskTypes.SET_TASK_DUE_DATE:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id == action.id ? {
                        ...task,
                        dueDate: action.date
                    } : task
                })
            }
        default:
            return state
    }

}