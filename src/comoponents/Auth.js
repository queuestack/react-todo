import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class Auth extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    render() {
        return (
            <div>
                <a href='/auth/google'>
                    Login with google
                </a>
            </div>
        )        
    }
}

export default connect(null, actions)(Auth)