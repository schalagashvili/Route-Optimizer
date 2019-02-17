import styled, { keyframes } from 'styled-components'

export const MainWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  position: relative;
`

const zoomAnimation = keyframes`
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.3);
    }
`

const fadeAnimation = keyframes`
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
`

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: ${props => `url(${props.bgImage})`};
  animation: ${zoomAnimation} 10s linear alternate infinite, ${fadeAnimation} 10s linear infinite;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  z-index: -1;
`
