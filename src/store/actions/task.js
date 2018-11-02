import { TaskTypes } from '../constants'

export const receiveTaskData = (taskData) => {
    return {
        type: TaskTypes.RECEIVE_TASK_DATA,
        taskData
    }
}

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

export const removeTask = (id) => {
    return {
        type: TaskTypes.REMOVE_TASK,
        id
    }
}

export const toggleTask = (id) => {
    return {
        type: TaskTypes.TOGGLE_TASK,
        id
    }
}

export const setTaskPriority = (id, priority) => {
    return {
        type: TaskTypes.SET_TASK_PRIORITY,
        id,
        priority
    }
}

export const setTaskDueDate = (id, date) => {
    return {
        type: TaskTypes.SET_TASK_DUE_DATE,
        id,
        date
    }
}