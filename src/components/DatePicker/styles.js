import styled from 'styled-components'
import colors from '../../styles/colors'

export const DepartCalendar = styled.div`
  position: absolute;
  left: 15px;
  top: 10px;
  z-index: 2;
`

export const ReturnCalendar = styled.div`
  position: absolute;
  left: 150px;
  top: 10px;
  z-index: 2;
`

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  background-color: white;
  height: 46px;
  max-width: 100%;
  flex: 1;
  margin-right: 10px;
  margin-bottom: 15px;
  ${'' /* min-width: 273px; */} max-width: 140px;
`
export const Text = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 20px;
  padding: 0 4px;
  z-index: 2;
  top: -8px;
  font-size: 11px;
`

export const Text2 = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 157px;
  padding: 0 4px;
  z-index: 2;
  top: -8px;
  font-size: 11px;
`
