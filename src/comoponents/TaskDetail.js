import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatTask, formatDate, formatTime, validateDate, validateTime } from '../utils/helpers';
import { toggleTask, removeTask, setTask, setTaskPriority, setTaskDueDate } from '../store/actions';

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
    handleRemoveTask = () => {
        const { index, dispatch } = this.props

        dispatch(removeTask(index))
    }
    handleToggleTask = () => {
        const { index, dispatch } = this.props

        dispatch(toggleTask(index))
    }
    handleSetTask = (event) => {
        const { index, dispatch } = this.props
        const { title, body, date, time } = this.state
        const { priority, done } = this.props.task

        if (validateDate(date) && validateTime(time)) {
            const dueDate = formatTime(date, time)
        
            const task = formatTask(title, body, dueDate, priority, done)
    
            dispatch(setTask(task, index))
        } else {
            // TODO: focus to date or time input box
        }
    }
    handleSetPriority = (event) => {
        const { index, dispatch } = this.props
        const priority = event.target.value
        
        dispatch(setTaskPriority(index, priority))
    }
    handleSetDueDate = () => {
        const { index, dispatch } = this.props
        const { date, time } = this.state.props

        const dueDate = formatTime(date, time)

        dispatch(setTaskDueDate(index, dueDate))
    }
    setStateFromProps(props) {
        const { title, body, priority, dueDate } = props.task
        const { year, month, day, hour, minute } = formatDate(dueDate)
        
        this.setState({
            title,
            body,
            priority,
        })

        if(dueDate !== undefined) {
            this.setState({
                date: year + "/" + month + "/" + day,
                time: hour + ":" + minute
            })
        } else {
            this.setState({
                date: '',
                time: ''
            })
        }
    }
    componentDidMount() {
        this.setStateFromProps(this.props)
    }
    componentWillReceiveProps(nextProps) {
        this.setStateFromProps(nextProps)   
    }
    render() {
        const { done } = this.props.task
        const { title, body, date, time } = this.state

        return (
            <div>
                <input 
                    type="text" 
                    value={title} 
                    onChange={this.handleTitleChange} 
                />
                <input 
                    type="text"
                    value={body}
                    onChange={this.handleBodyChange}
                />
                <select onChange={this.handleSetPriority}>
                    <option value="high">high</option>
                    <option value="normal">normal</option>
                </select>
                <input
                    type="text"
                    placeholder="yyyy/mm/dd"
                    value={date}
                    onChange={this.handleDateChange}
                    maxLength='10'
                />
                <input
                    type="text"
                    placeholder="hh:mm"
                    value={time}
                    onChange={this.handleTimeChange}
                    maxLength='5'
                />
                <input 
                    type='button' 
                    onClick={this.handleToggleTask} 
                    value={ done ? 'done' : 'todo' } 
                /> 
                <input 
                    type='button' 
                    onClick={this.handleRemoveTask} 
                    value='Remove' 
                />
                <input 
                    type='button' 
                    onClick={this.handleSetTask} 
                    value='Save' 
                />
            </div>
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