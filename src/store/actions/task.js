import { TaskTypes } from '../constants'

export const getTasks = () => {
    type: TaskTypes.GET_TASKS
}
export const addTask = (task) => {
    type: TaskTypes.ADD_TASK,
    task
}

export const setTask = (task) => {
    type: TaskTypes.SET_TASK,
    task
}

export const removeTask = (task) => {
    type: TaskTypes.REMOVE_TASK,
    task
}

export const toggleTask = (task) => {
    type: TaskTypes.TOGGLE_TASK,
    task
}

export const setTaskPriority = (task, priority) => {
    tyep: TaskTypes.SET_TASK_PRIORITY,
    task,
    priority
}

export const setTaskDueDate = (task, date) => {
    type: TaskTypes.SET_TASK_DUE_DATE,
    task,
    date
}