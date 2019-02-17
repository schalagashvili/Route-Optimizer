import styled from 'styled-components'
import fonts from '../../../../styles/fonts'
import colors from '../../../../styles/colors'

export const Button = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
`
export const MainWrapper = styled.div`
  width: 100%;
  height: 600vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
`

export const Overlay = styled.div`
  opacity: 0.6;
  overflow: scroll;
  width: 100%;
  height: 100%;
  background-color: black;
`
