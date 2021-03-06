import React from 'react'
import { connect } from 'react-redux'
import Button from 'core/styled/Button'
import FormStyler from 'core/styled/FormStyler'
import Span from 'core/styled/Span'
import Centered from 'flexbox/CenteredContainer'
import StyledLink from 'core/styled/StyledLink'
import { submitRegistration } from 'redux/actions/registrationActions'
import { checkAPISession } from 'redux/actions/userActions'

@connect(() => ({}))
class NewProvider extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.successCallBack = this.successCallBack.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const email = this.email.value
    const password = this.password.value
    const passwordConfirmation = this.passwordConfirmation.value
    const successCallBack = this.successCallBack
    this.props.dispatch(submitRegistration(email, password, passwordConfirmation, successCallBack))
  }

  successCallBack() {
    this.props.dispatch(checkAPISession())
  }

  render() {
    return (
      <Centered>
        <FormStyler>
          <form>
            <input ref={(node) => { this.email = node }} type="text" placeholder="Email" />
            <input ref={(node) => { this.password = node }}type="password" placeholder="Password" />
            <input ref={(node) => { this.passwordConfirmation = node }}type="password" placeholder="Password Confirmation" />
            <Button onClick={this.handleSubmit}>Sign Up</Button>
          </form>
        </FormStyler>
        <Span>Already a user?</Span>
        <StyledLink to="/signin">Log In</StyledLink>
      </Centered>
    )
  }
}

export default NewProvider
