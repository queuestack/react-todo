import { TaskTypes } from '../constants'

export const addTask = (task) => {
    return {
        type: TaskTypes.ADD_TASK,
        task
    }
}

export const setTask = (task, id) => {
    return {
        type: TaskTypes.SET_TASK,
        task,
        id
    }
}

export const removeTask = (task) => {
    return {
        type: TaskTypes.REMOVE_TASK,
        task
    }
}

export const toggleTask = (task) => {
    return {
        type: TaskTypes.TOGGLE_TASK,
        task
    }
}

export const setTaskPriority = (task, priority) => {
    return {
        type: TaskTypes.SET_TASK_PRIORITY,
        task,
        priority
    }
}

export const setTaskDueDate = (task, date) => {
    return {
        type: TaskTypes.SET_TASK_DUE_DATE,
        task,
        date
    }
}