import React from 'react'
import { connect } from 'react-redux'

import { formatDate } from '../utils/helpers';

const Task = (props) => {
    const { title, body, dueDate, priority, done } = props.task
    const { year, month, day, hour, minute, second } = formatDate(dueDate)

    return (
        <div>
            <hr/>
            {
                <div onClick={() => props.handleClickTask(props.index)}>
                    <div>{title}</div>
                    <div>{body}</div>
                    <div>{dueDate ? year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second : 'Set due date'}</div>
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