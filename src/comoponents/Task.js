import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatTask, formatDate, formatTime } from '../utils/helpers';
import { toggleTask, removeTask, setTask, setTaskPriority, setTaskDueDate } from '../store/actions';

class Task extends Component {
    state = {
        isClicked: false,
        title: this.props.task.title,
        body: this.props.task.body,
        date: '',
        time: '',
    }
    hanldeClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
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
    handleSetTask = () => {
        const { index, dispatch } = this.props
        const { title, body, date, time } = this.state
        const { priority, done } = this.props.task
        const dueDate = formatTime(date, time)
        console.log(date)
        console.log(time)
        console.log(dueDate)
        
        const task = formatTask(title, body, dueDate, priority, done)

        dispatch(setTask(task, index))
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
    componentDidMount() {
        const { dueDate } = this.props.task
        const { year, month, day, hour, minute } = formatDate(dueDate)
        
        if(dueDate !== undefined) {
            this.setState({
                date: year + "/" + month + "/" + day,
                time: hour + ":" + minute
            })
        }        
    }
    render() {
        const { dueDate, priority, done } = this.props.task
        const { year, month, day, hour, minute, second } = formatDate(dueDate)

        return (
            <div>
                <hr/>
                <input 
                    type="text" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange} 
                />
                <input 
                    type="text"
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                />
                <select onChange={this.handleSetPriority}>
                    <option value="high">high</option>
                    <option value="middle">middle</option>
                    <option value="low">low</option>
                </select>
                <div>{year + "/" + month + "/" + day + " " + hour + ":" + minute + ":" + second}</div>
                <input
                    type="text"
                    placeholder="yyyy.mm.dd"
                    value={this.state.date}
                    onChange={this.handleDateChange}
                    maxLength='10'
                />
                <input
                    type="text"
                    placeholder="hh:mm"
                    value={this.state.time}
                    onChange={this.handleTimeChange}
                    maxLength='5'
                />
                <div>{priority}</div>
                <button onClick={this.handleToggleTask}> { done ? 'done' : 'todo' } </button>
                <button onClick={this.handleRemoveTask}> Remove </button>
                <button onClick={this.handleSetTask}> Save </button>
                <hr/>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        ...props
    }
}

export default connect(mapStateToProps)(Task)