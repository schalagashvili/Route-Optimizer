import styled from 'styled-components'
import fonts from '../../styles/fonts'
import colors from '../../styles/colors'

/*eslint-disable */
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
