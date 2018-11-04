import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { formatTask, formatDate, formatTime, validateDate, validateTime } from '../utils/helpers';
import { setTask } from '../store/actions';

const TaskDetailContainer = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    margin: 10px;
    display: flex;
    flex-direction: column;
`

const TaskTitleInput = styled.input`
    padding: 10px;
    font-size: 20px;
    margin: 10px;
    border: 0px;
`

const TaskBodyInput = styled.input`
    padding: 10px;
    font-size: 15px;
    margin: 10px;
    border: 1px solid gray;
    width: 90%;
`
const LabelText = styled.div`
    margin-left: 10px;
`
const PrioritySelect = styled.select`
    padding: 10px;
    font-size: 15px;
    margin: 10px;
    border: 1px solid gray;
    width: 90%;
`

const DueDateInput = styled.input`
    padding: 5px;
    font-size: 15px;
    margin: 5px;
`

class TaskDetail extends Component {
    state = {
        title: '',
        body: '',
        priority: '',
        date: '',
        time: '',
    }
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleBodyChange = (event) => {
        this.setState({
            body: event.target.value
        })
    }
    handleSetPriority = (event) => {
        console.log(event.target.value)
        this.setState({
            priority: event.target.value
        })
    }    
    handleDateChange = (event) => {
        this.setState({
            date: event.target.value
        })
    }
    handleTimeChange = (event) => {
        this.setState({
            time: event.target.value
        })
    }
    handleSetTask = (event) => {
        const { index, dispatch } = this.props
        const { title, body, priority, date, time } = this.state
        const { done } = this.props.task

        const dueDate = validateDate(date) && validateTime(time) ? 
            formatTime(date, time) :
            undefined

        const task = formatTask(title, body, dueDate, priority, done)
    
        dispatch(setTask(task, index))
    }
    setStateFromProps(props) {
        const { title, body, priority, dueDate } = props.task
        const { year, month, day, hour, minute } = formatDate(dueDate)

        const bodyState = body === undefined ? '' : body
        const dateState = dueDate === undefined ? '' : year + "/" + month + "/" + day
        const timeState = dueDate === undefined ? '' : hour + ":" + minute

        this.setState({
            title,
            body: bodyState,
            priority,
            date: dateState,
            time: timeState
        })
    }
    componentDidMount() {
        this.setStateFromProps(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.setStateFromProps(nextProps)   
    }
    render() {
        const { title, body, priority, date, time } = this.state

        return (
            <TaskDetailContainer>
                <TaskTitleInput 
                    type="text" 
                    value={title} 
                    onChange={this.handleTitleChange} 
                />
                <label>
                    <LabelText>
                        Note
                    </LabelText>
                    <TaskBodyInput 
                        type="text"
                        placeholder="Type your note"
                        onChange={this.handleBodyChange}
                        value={body}
                    />
                </label>
                <label>
                    <LabelText>
                        Priority
                    </LabelText>
                    <PrioritySelect 
                        onChange={this.handleSetPriority}
                        value={priority}
                    >
                        <option value="high">high</option>
                        <option value="normal">normal</option>
                    </PrioritySelect>
                </label>
                
                <label>
                    <LabelText>
                        Due Date
                    </LabelText>
                    <LabelText>
                        Date
                        <DueDateInput
                            type="text"
                            placeholder="yyyy/mm/dd"
                            value={date}
                            onChange={this.handleDateChange}
                            maxLength='10'
                        />
                    </LabelText>

                    <LabelText>
                        Time
                        <DueDateInput
                            type="text"
                            placeholder="hh:mm"
                            value={time}
                            onChange={this.handleTimeChange}
                            maxLength='5'
                        />
                    </LabelText>
                </label>

                <input 
                    type='button' 
                    onClick={this.handleSetTask} 
                    value='Save' 
                />
            </TaskDetailContainer>
        )
    }
}

const mapStateToProps = ({ task }, props) => {
    const { tasks } = task
    const { index } = props

    return {
        task: tasks[index],
        ...props
    }
}

export default connect(mapStateToProps)(TaskDetail)