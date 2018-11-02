import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Tasks } from './comoponents'
import { handleInitalData } from './store/actions/shared';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(handleInitalData())
  }
  render() {
    return (
      <div>
        <Tasks />
      </div>
    );
  }
}

export default connect()(App);
