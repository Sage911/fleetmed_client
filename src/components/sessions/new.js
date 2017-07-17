// Allows user to initiate a new session
import React from 'react'
import { connect } from 'react-redux'

import { Form, Button } from './sessionsStyledComponents'
import { userSignIn } from '../../redux/actions/userActions'
import StaticLot from '../styled/StaticLot'
import StyledLink from '../styled/StyledLink'

@connect(() => {})
class New extends React.Component {
  constructor(props) {
    super(props)
    this.signIn = this.signIn.bind(this)
    this.successCallBack = this.successCallBack.bind(this)
  }

  signIn(e) {
    e.preventDefault()
    const email = this.email.value
    const password = this.password.value
    const successCallBack = this.successCallBack
    this.props.dispatch(userSignIn(email, password, successCallBack))
  }

  successCallBack() {
    this.props.history.push('/profile')
  }

  render() {
    return (
      <StaticLot>
        <Form>
          <form>
            <input ref={(node) => { this.email = node }} type="email" placeholder="email" />
            <input ref={(node) => { this.password = node }} type="password" placeholder="password" />
            <Button primary onClick={this.signIn}>Sign In</Button>
          </form>
        </Form>
        <StyledLink to="/signup">Sign Up</StyledLink>
      </StaticLot>
    )
  }
}

export default New
