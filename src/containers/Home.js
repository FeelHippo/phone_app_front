import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllPhones } from '../store/actions'

import Landing from '../components/Landing'

export class Home extends Component {
  componentDidMount() {
    this.props.fetchPhones()
  }

  render() {
    return (
      <Landing 
        phones={ this.props.phones }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    phones: state.phones,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhones: () => dispatch(getAllPhones()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)