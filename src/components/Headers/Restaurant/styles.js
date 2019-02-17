import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0 4px 10px;
`

export const FirstRow = styled.div`
  display: flex;
`

export const SecondRow = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`

export const ThirdRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 15px 10px 5px;
  min-width: 100%;
  color: ${colors.primaryBrand};
`

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${fonts.sizes.normal};
`
