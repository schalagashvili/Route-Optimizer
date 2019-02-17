import styled from 'styled-components'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  position: relative;
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.bgImage})`};
  background-size: cover;
  position: absolute;
  z-index: -1;
`

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`
export const ContactContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 900px;
  padding: 20px;
`

export const InfoText = styled.span`
  font-weight: ${fonts.weights.bold};
  font-size: 16px;
`

export const MainCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.bgWhite};
  margin-bottom: 20px;
  box-shadow: ${colors.primaryBoxShadow};
  border-radius: 5px;
`
