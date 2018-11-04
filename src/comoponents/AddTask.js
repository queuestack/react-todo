import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { addTask } from '../store/actions'
import { formatTask } from '../utils/helpers';

const TaskInput = styled.input`
    border-radius: 10px;
    padding: 10px;
    margin: 5px;
`

class AddTask extends Component {
    state = {
        title: ''
    }
    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleAddBtn = () => {
        const { dispatch } = this.props
        const { title } = this.state
        const task = formatTask(title, undefined, undefined, 'normal', false)

        if (title !== '') {
            dispatch(addTask(task))

            this.setState({
                title: '',
                body: ''
            })
        }
    }
    render() {
        return (
            <div>
                <TaskInput 
                    type="text"
                    value={this.state.title}
                    placeholder="Add TODO here!"
                    onChange={this.handleTitleChange}
                />
                <i 
                    className="fas fa-arrow-circle-up fa-lg"
                    style={{margin: '5px'}}
                    onClick={this.handleAddBtn}
                />
            </div>
        )
    }
}

export default connect()(AddTask)