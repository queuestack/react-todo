import { TaskTypes } from '../constants'

const initState = {
    authedUser: '',
    clickedIndex: undefined,
    tasks: []
}

export default (state = initState, action) => {
    switch(action.type) {
        case TaskTypes.RECEIVE_TASK_DATA:
            return {
                ...state,
                ...action.taskData
            }
        case TaskTypes.ADD_TASK:
            return {
                ...state,
                clickedIndex: 0,
                tasks: [
                    action.task,
                    ...state.tasks, 
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
                clickedIndex: undefined,
                tasks: state.tasks.filter((task, id) => {
                    return id !== action.id
                })
            }
        case TaskTypes.TOGGLE_TASK:
            const { tasks } = state
            const { id } = action
            const task = tasks[id]
            const nextDone = !task.done
            const toggledTask = { ...task, done: nextDone }
            const restTasks = state.tasks.filter((task, id) => {
                return id !== action.id
            })

            if (nextDone) {
                return {
                    ...state,
                    clickedIndex: tasks.length -1,
                    tasks: [
                        ...restTasks,
                        toggledTask
                    ]
                }
            } else {
                return {
                    ...state,
                    clickedIndex: 0,
                    tasks: [
                        toggledTask,
                        ...restTasks
                    ]
                }
            }
        case TaskTypes.CLICK_TASK:
            return {
                ...state,
                clickedIndex: action.id
            }            
        case TaskTypes.SET_TASK_PRIORITY:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id === action.id ? {
                        ...task,
                        priority: action.priority
                    } : task
                })
            }
        case TaskTypes.SET_TASK_DUE_DATE:
            return {
                ...state,
                tasks: state.tasks.map((task, id) => {
                    return id === action.id ? {
                        ...task,
                        dueDate: action.date
                    } : task
                })
            }
        default:
            return state
    }

}