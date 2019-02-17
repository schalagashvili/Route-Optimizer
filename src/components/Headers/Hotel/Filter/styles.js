import styled from 'styled-components'
import colors from '../../../../styles/colors'
import fonts from '../../../../styles/fonts'
import sizes from '../../../../styles/sizes'

export const FilterWrapper = styled.div`
  box-shadow: ${colors.primaryBoxShadow};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: ${sizes.borderRadius};
`

export const FilterBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 0;
  overflow: hidden;
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

export const CloseButton = styled.div`
  margin-right: 15px;
  color: #00b2d6;
  cursor: pointer;
`

export const ButtonsWrapper = styled.div`
  margin: 20px 20px 20px auto;
  display: flex;
  align-items: baseline;
`
