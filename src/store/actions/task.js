import { TaskTypes } from '../constants'

export const addTask = (task) => {
    type: TaskTypes.ADD_TASK,
    task
}

export const setTask = (id) => {
    type: TaskTypes.ADD_TASK,
    id
}

export const removeTask = (id) => {
    type: TaskTypes.REMOVE_TASK,
    id
}

export const toggleTask = (id) => {
    type: TaskTypes.TOGGLE_TASK,
    id
}

export const setTaskPriority = (id, priority) => {
    tyep: TaskTypes.SET_TASK_PRIORITY,
    id,
    priority
}

export const setTaskDueDate = (id, date) => {
    type: TaskTypes.SET_TASK_DUE_DATE,
    id,
    date
}