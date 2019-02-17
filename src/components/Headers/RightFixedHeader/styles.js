import styled from 'styled-components'
import colors from '../../../styles/colors'

export const CloseButton = styled.div`
  text-align: end;
  font-size: 18px;
  z-index: 3;
  color: ${colors.primaryText};
  position: absolute;
  right: 30px;
`

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  background-color: #f3f2f5;
  z-index: 3;
  box-shadow: 0 4px 2px -2px silver;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    display: none;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
`

export const Arrow = styled.div`
  margin-left: 5px;
`
