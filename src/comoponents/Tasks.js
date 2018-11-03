import React from 'react'
import { connect } from 'react-redux'

import Task from './Task'
import TaskDetail from './TaskDetail'
import AddTask from './AddTask'

const Tasks = (props) => {
    const { clickedIndex, tasks } = props

    return (
        <div>
            <AddTask />
            {tasks.map((task, i) => {
                return (
                    <Task 
                        key={task.title + task.dueDate}
                        index={i}
                    /> 
                )})
            }
            {
                tasks[clickedIndex] && (
                    <TaskDetail
                        index={clickedIndex}
                    />
                )
            }
        </div>
    )
}

const mapStateToProps = ({ task }, props) => {
    const { authedUser, clickedIndex, tasks } = task

    return {
        authedUser,
        clickedIndex,
        tasks
    }
}

export default connect(mapStateToProps)(Tasks)