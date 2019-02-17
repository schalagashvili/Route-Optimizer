import styled from 'styled-components'
import fonts from '../../../styles/fonts'
import colors from '../../../styles/colors'

export const SettingsFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
`

export const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.small};
`

export const InputField = styled.input`
  box-shadow: ${colors.primaryBoxShadow};
  border: none;
  margin-top: 10px;
  padding: 10px;
  font-family: ${fonts.types.regular};
  border-radius: 4px;
  background-color: white;
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.regular};
  outline: none;
  text-overflow: ellipsis;
`
