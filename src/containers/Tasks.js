import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getTasks, addTask, setTask } from '../store/actions'
import { formatTask } from '../utils/helpers'

class Tasks extends Component {
    componentDidMount() {
        const { dispatch } = this.props
        
        const time = new Date().getTime()
        const task1 = formatTask('title', 'body', time, 'high')
        const task2 = formatTask('tite', 'boy', time, 'high')

        dispatch(addTask(task1))
        dispatch(addTask(task2))
    }
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}
const mapStateToProps = ({ task }, props) => {
    const { authedUser, tasks } = task
    console.log(authedUser, tasks)
    return {
        authedUser,
        tasks
    }
}

export default connect(mapStateToProps)(Tasks)