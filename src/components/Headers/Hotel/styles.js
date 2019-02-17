import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
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

export const Text = styled.div`
  margin-left: 4px;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: ${sizes.borderRadius};
  height: 46px;
  outline: none;
  margin: 2px;
  padding-left: 20px;
  margin-right: 20px;
  font-family: ${fonts.types.regular};
  box-shadow: ${colors.primaryBoxShadow};
`

export const Button = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  margin-right: 4px;
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
`

export const SearchButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const CancelButton = styled.div`
  font-size: ${fonts.sizes.small};
  margin-top: 5px;
  color: ${colors.primaryBrand};
  cursor: pointer;
`

export const FilterWrapper = styled.div`
  box-shadow: ${colors.primaryBoxShadow};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: ${sizes.borderRadius};
`

export const ColumnWrapper = styled.div`
  min-width: 300px;
  flex: 1;
  margin-top: 20px;
  margin-left: 20px;
`

export const FilterTitle = styled.div`
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.medium};
`

export const Checkbox = styled.input`
  border: 1px solid red;
  background-color: red;
`

export const SearchWrapper = styled.div`
  max-width: 710px;
  min-width: 100%;
  height: 0;
  display: flex;
  overflow: hidden;
`
