import React from 'react'
import { connect } from 'react-redux'

import { clickTask } from '../store/actions'
import { formatDate } from '../utils/helpers';

const Task = (props) => {
    const { dispatch, index, task } = props
    const { title, body, dueDate, priority, done } = task
    const { year, month, day, hour, minute, second } = formatDate(dueDate)

    return (
        <div>
            <hr/>
            {
                <div onClick={() => dispatch(clickTask(index))}>
                    <div>{title}</div>
                    <div>{done ? 'done' : 'todo'}</div>
                    <div>{priority}</div>
                </div>                        
            }
            <hr/>
        </div>
    )
}

const mapStateToProps = ({ task }, props) => {
    const { tasks } = task
    const { index } = props

    return {
        task: tasks[index],
        ...props
    }
}

export default connect(mapStateToProps)(Task)