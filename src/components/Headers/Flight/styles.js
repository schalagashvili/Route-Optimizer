import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;
  padding: 15px 0 4px 10px;
  position: relative;
  @media (max-width: 768px) {
    display: none;
    margin-top: -150%;
    padding-bottom: 10px;
    padding-top: 60px;
    background-color: #f3f2f5;
    position: fixed;
  }
  justify-content: center;
`

export const AutocompletesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const SecondRow = styled.div`
  display: flex;
  margin-top: 10px;
  flex-wrap: wrap;
`

export const ThirdRow = styled.div`
  display: flex;
  min-width: 100%;
  justify-content: space-between;
  padding: 0 15px 10px 5px;
  color: ${colors.primaryBrand};
`

export const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: ${fonts.sizes.normal};
`

export const Text = styled.div`
  margin-left: 4px;
`

export const ItemWrapper = styled.div`
  height: 46px;
`

export const CloseArrow = styled.div`
  display: none;
  z-index: 2;
  transform: rotate(180deg);
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: -40px;
  @media (max-width: 768px) {
    display: block;
  }
`

export const Button = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #90e60f, #88c72a);
`

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    background-color: #f3f2f5;
  }
`
