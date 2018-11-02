import React, { Component } from 'react'
import { connect } from 'react-redux'

class Tasks extends Component {
    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}
const mapStateToProps = ({ task }, props) => {
    const { authedUser, tasks } = task
    console.log(authedUser, tasks)
    return {
        authedUser,
        tasks
    }
}

export default connect(mapStateToProps)(Tasks)