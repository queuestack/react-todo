import React, { Component } from 'react'
import { connect } from 'react-redux'

import { addTask } from '../store/actions'
import { formatTask } from '../utils/helpers';

class AddTask extends Component {
    state = {
        title: '',
        body: ''
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
    handleAddBtn = () => {
        const { dispatch } = this.props
        const { title, body } = this.state
        const task = formatTask(title, body, undefined, 'middle', false)

        dispatch(addTask(task))

        this.setState({
            title: '',
            body: ''
        })
    }
    render() {
        return (
            <div>
                <input 
                    type="text"
                    value={this.state.title}
                    placeholder="Title"
                    onChange={this.handleTitleChange}
                />
                <input 
                    type="text"
                    value={this.state.body}
                    placeholder="Body"
                    onChange={this.handleBodyChange}
                />
                <input
                    type="button"
                    value='Add'
                    onClick={this.handleAddBtn}
                />
            </div>
        )
    }
}

export default connect()(AddTask)