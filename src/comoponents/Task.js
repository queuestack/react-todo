import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import { clickTask, toggleTask, removeTask } from '../store/actions'

const TaskContainer = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    margin: 10px;
    
    ${props => props.priority === 'high' && css`
        border-bottom: 5px solid red
    `}
`
const DoneTask = styled.div`
    color: gray;
    text-decoration: line-through;
    padding: 10px;
    font-size: 20px;
`
const TodoTask = styled.div`
    padding: 10px;
    font-size: 20px;
`
const Task = (props) => {
    const { dispatch, index, task } = props
    const { title, priority, done } = task

    return (
        <TaskContainer
            priority={priority}
            onClick={() => dispatch(clickTask(index))}
        >
            {done 
            ? 
            <DoneTask>
                <i 
                    class="far fa-check-square" 
                    style={{margin: '5px'}}
                    onClick={() => dispatch(toggleTask(index))} 
                />
                <span>
                    {title}
                </span>
                <i 
                    class="far fa-trash-alt" 
                    style={{margin: '5px', float: 'right'}}
                    onClick={() => dispatch(removeTask(index))}
                />
            </DoneTask> 
            : 
            <TodoTask>
                <i 
                    class="far fa-square" 
                    style={{margin: '5px'}}
                    onClick={() => dispatch(toggleTask(index))} 
                />
                <span>
                    {title}
                </span>
            </TodoTask>}                  
        </TaskContainer>
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