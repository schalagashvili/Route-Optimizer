import styled from 'styled-components'
import fonts from '../../../../styles/fonts'
import colors from '../../../../styles/colors'
import sizes from '../../../../styles/sizes'

export const AdvancedWrapper = styled.div`
  top: 25px;
  width: 320px;
  left: 4px;
  height: 0;
  overflow: hidden;
  position: absolute;
  background-color: white;
  color: black;
  outline: none;
  box-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  border-radius: 4px;
  z-index: 2;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  border: none;
  border-radius: ${sizes.borderRadius};
  min-height: 46px;
  outline: none;
  margin-top: 10px;
  margin: 10px;
  margin-left: ${props => props.noLeftMargin && '0'};
  padding-left: 10px;
  font-family: ${fonts.types.regular};
  box-shadow: ${colors.primaryBoxShadow};
`
