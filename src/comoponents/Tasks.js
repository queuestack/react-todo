import React, { Component } from 'react'
import { connect } from 'react-redux'

import Task from './Task'
import TaskDetail from './TaskDetail'

class Tasks extends Component {
    state = {
        clickedIndex: undefined
    }
    handleClickTask = (index) => {
        this.setState({
            clickedIndex: index
        })
    }
    render() {
        const { tasks } = this.props
        const { clickedIndex } = this.state

        return (
            <div>
                {tasks.map((task, i) => {
                    return (
                        <Task 
                            key={task.title + task.dueDate}
                            index={i}
                            handleClickTask={this.handleClickTask}
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
    const { authedUser, tasks } = task

    return {
        authedUser,
        tasks
    }
}

export default connect(mapStateToProps)(Tasks)