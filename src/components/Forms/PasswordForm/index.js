import React, { Component } from 'react'
import { SettingsFormContainer, LabelField, InputField } from './styles'

class PasswordForm extends Component {
  state = {
    currentPasswordField: '',
    newPasswordField: '',
    confirmNewPasswordField: ''
  }

  render() {
    return (
      <SettingsFormContainer>
        <LabelField>
          Current Password
          <InputField
            onChange={({ target }) => this.setState({ currentPasswordField: target.value })}
            name="current_password"
            type="password"
          />
        </LabelField>
        <LabelField>
          New Password
          <InputField
            onChange={({ target }) => this.setState({ newPasswordField: target.value })}
            name="new_password"
            type="password"
          />
        </LabelField>
        <LabelField>
          Confirm New Password
          <InputField
            onChange={({ target }) => this.setState({ confirmNewPasswordField: target.value })}
            name="confirm_new_password"
            type="password"
          />
        </LabelField>
      </SettingsFormContainer>
    )
  }
}

export default PasswordForm
