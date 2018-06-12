import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const { agentName, email, email_verified } = this.props.user

    return (
      <div>
        <h1>hello agent {agentName}</h1>
        <h2>with email {email}</h2>
        <h3>you are {email_verified ? 'verified' : 'not verified'}</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({ user: auth.user })

export default connect(mapStateToProps)(Profile)
