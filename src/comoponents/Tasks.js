import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Task from './Task'
import TaskDetail from './TaskDetail'
import AddTask from './AddTask'

const TodoContainer = styled.div`
    display: flex;
    flex-direction: row;
    
`

const TodoList = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
`

const Tasks = (props) => {
    const { clickedIndex, tasks } = props

    return (
        <TodoContainer>
            <div>
                <TodoList>
                    <h1
                        style={{textAlign: 'center'}}
                    >Todo List</h1>
                    {tasks.map((task, i) => {
                        return (
                            <Task 
                                key={task.title + task.dueDate}
                                index={i}
                            /> 
                        )})
                    }
                    <AddTask />
                </TodoList>
            </div>
            <div>
                {
                    tasks[clickedIndex] && (
                        <TaskDetail
                            index={clickedIndex}
                        />
                    )
                }
            </div>
        </TodoContainer>
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