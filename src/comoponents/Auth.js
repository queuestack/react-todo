import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions'

class Auth extends Component {
    componentDidMount() {
        this.props.fetchUser()
    }
    renderContent() {
        const { auth } = this.props
        
        switch(auth) {
            case null:
                return 'Still Deciding'
            case false:
                return <a href='/auth/google'>Login With Google</a>
            default:
                return (
                    <div>
                        <span>Hello {auth.googleId} </span>
                        <a href='/api/logout'>Logout</a>
                    </div>
                )
        }
    }
    render() {
        return (
            <div>
                {this.renderContent()}

            </div>
        )        
    }
}

function mapStateToProps(state) {
    const { auth } = state
    
    return {
        auth
    }
}

export default connect(mapStateToProps, actions)(Auth)