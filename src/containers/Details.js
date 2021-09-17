import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPhoneById } from '../store/actions'

import PhoneCard from '../components/PhoneCard'

export class Details extends Component {
  componentDidMount() {
    this.props.fetchPhone(this.props.match.params.id)
  }

  render() {
    return (
      <PhoneCard 
        phone={ this.props.phone }
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    phone: state.phone,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPhone: id => dispatch(getPhoneById(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)