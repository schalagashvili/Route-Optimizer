import styled from 'styled-components'
import sizes from '../../../styles/sizes'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const Input = styled.input`
  box-shadow: ${colors.primaryBoxShadow};
  box-sizing: border-box;
  border: none;
  border-left: none;
  min-width: 160px;
  width: 100%;
  flex: 1;
  height: ${props => (props.fullHeight ? '60px' : sizes.inputFieldHeight)};
  padding-right: 20px;
  padding-left: 40px;
  font-family: ${fonts.types.regular};
  border-radius: 4px;
  border-radius: ${props => (props.noBorderRadius ? '0' : sizes.borderRadius)};
  border-top-right-radius: ${props => props.noBorderRightRadius && '0'};
  border-bottom-right-radius: ${props => props.noBorderRightRadius && '0'};
  border-top-left-radius: ${props => props.noBorderLeftRadius && '0'};
  border-bottom-left-radius: ${props => props.noBorderLeftRadius && '0'};
  background-color: white;
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.regular};
  outline: none;
  text-overflow: ellipsis;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  position: relative;
  min-width: ${props => (props.noMinWidth ? '160px' : '240px')};
  margin: ${props => props.marginRightBottom && '0 10px 15px 0'};
  ${'' /* margin-left: ${props => (props.noMarginLeft ? '0' : '10px')}; */};
`

export const IconWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 14px;
`

export const Text = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 20px;
  padding: 0 4px;
  top: -8px;
  font-size: 11px;
`
