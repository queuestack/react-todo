import React, { Component } from 'react'

class Task extends Component {
    state = {
        isClicked: false
    }
    hanldeClick = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
    }
    handleRemoveTask = () => {

    }
    handleToggleTask = () => {

    }
    handleSetTask = () => {

    }
    handleSetPriority = () => {

    }
    handleSetDueDate = () => {
        
    }
    render() {
        const { index, task } = this.props
        const { title, body, dueDate, done, priority } = task
        
        return (
            <div>
                <hr/>
                <div>{title}</div>
                <div>{body}</div>
                <div>{dueDate}</div>
                <div>{done}</div>
                <div>{priority}</div>
                <input 
                    type="checkbox"
                    value="done"
                />
                <hr/>
            </div>
        )
    }
}

export default Task