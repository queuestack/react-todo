import React, { Component } from 'react'
import { connect } from 'react-redux'

import Task from './Task'

class Tasks extends Component {
    render() {
        const { tasks } = this.props

        return (
            <div>
                {tasks.map((task, i) => {
                    return (
                        <Task 
                            key={task.title + task.dueDate}
                            task={task}
                            index={i}
                        /> 
                    )})
                }
            </div>
        )
    }
}

const mapStateToProps = ({ task }, props) => {
    const { authedUser, tasks } = task

    return {
        authedUser,
        tasks
    }
}

export default connect(mapStateToProps)(Tasks)