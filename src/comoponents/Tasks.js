import React, { Component } from 'react'
import { connect } from 'react-redux'

import Task from './Task'
import TaskDetail from './TaskDetail'

class Tasks extends Component {
    render() {
        const { clickedIndex, tasks } = this.props

        return (
            <div>
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