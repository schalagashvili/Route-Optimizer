import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'

export const MainWrapper = styled.div`
  width: 100%;
  height: 0;
  overflow: hidden
  max-width: 700px;
  margin: auto;
  border-radius: ${sizes.borderRadius};
  box-shadow: ${colors.primaryBoxShadow};
  display: flex;
`

export const Img = styled.div`
  flex: 0.8;
  min-height: 180px;
  max-width: 168px;
  background-position: 50% 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  border-bottom-left-radius: ${sizes.borderRadius};
  border-top-left-radius: ${sizes.borderRadius};
`

export const Name = styled.div`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weights.bold};
  margin-bottom: 5px;
`

export const FirstColumn = styled.div`
  flex: 1;
  color: ${colors.primaryText};
  margin: 10px 0 10px 10px;
  flex-direction: column;
`

export const SecondColumn = styled.div`
  margin: 10px 10px 10px 7px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const LocationWrapper = styled.div`
  display: inline-block;
  margin-top: 10px;
`

export const MoreInfo = styled.div`
  margin-top: 10px;
  color: ${colors.primaryBrand};
  font-weight: ${fonts.weights.bold};
  cursor: pointer;
  display: flex;
`

export const PriceWrapper = styled.div`
  color: #0ab21b;
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weights.bold};
`

export const Button = styled.div`
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: ${sizes.borderRadius};
  min-height: 46px;
  outline: none;
  margin-top: 10px;
  padding-left: 20px;
  font-family: ${fonts.types.regular};
  box-shadow: ${colors.primaryBoxShadow};
`

export const Text = styled.div`
  color: ${colors.primaryBrand};
  margin-right: 10px;
  cursor: pointer;
`

export const SectionWrapper = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
`

export const RoomsAndPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Rooms = styled.div`
  color: #0ab21b;
  text-align: end;
`

export const Buttons = styled.div`
  display: flex;
  align-items: baseline;
`

export const AutocompleteWrapper = styled.div`
  ${'' /* margin-left: -10px; */} margin-top: 10px;
  flex: 1;
`
