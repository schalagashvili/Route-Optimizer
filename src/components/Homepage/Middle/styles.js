import styled from 'styled-components'
import fonts from '../../../styles/fonts'
import colors from '../../../styles/colors'
import sizes from '../../../styles/sizes'

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100%;
  margin-top: -120px;
  @media (max-height: 700px) {
    margin-top: -160px;
  }
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.div`
  color: white;
  font-weight: bold;
  font-size: 40px;
  font-family: QuicksandBold;
  text-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  padding-bottom: 20px;
`

export const InputsWrapper = styled.div`
  height: 60px;
  width: 100%;
  @media (max-width: 1023px) {
    height: 100%;
    max-width: 600px;
  }
  border-radius: 4px;
  box-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  background-color: white;
  @media (max-width: 600px) {
    background-color: transparent;
    box-shadow: none;
  }
  display: flex;
  flex-wrap: wrap;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 30px;
  width: 100%;
  max-width: 1000px;
  @media (max-width: 1023px) {
    margin: 60px;
    max-width: 600px;
    width: 90%;
  }
`

export const Button = styled.div`
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  font-size: 17px;
  box-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
  margin-left: auto;
`

export const LastLineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const QuestionInfo = styled.div`
  height: 70;
  width: 200px;
  background-color: white;
  font-size: 12px;
  visibility: hidden;
  position: absolute;
  top: 23px;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  transition-property: visibility;
  transition-duration: 0.3s;
  transition-delay: 0.1s;
`

export const QuestionMark = styled.div`
  width: 15px;
  height: 15px;
  cursor: help;
  z-index: 1;
  &:hover ~ ${QuestionInfo} {
    visibility: visible;
  }
`

export const AdvancedWrapper = styled.div`
  top: 25px;
  width: 320px;
  left: 4px;
  height: 0;
  overflow: hidden;
  position: absolute;
  background-color: white;
  color: black;
  outline: none;
  box-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  border-radius: 4px;
  z-index: 2;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  flex: 1;
  border: none;
  border-radius: ${sizes.borderRadius};
  min-height: 46px;
  outline: none;
  margin-top: 10px;
  margin: 10px;
  margin-left: ${props => props.noLeftMargin && '0'};
  padding-left: 10px;
  font-family: ${fonts.types.regular};
  box-shadow: ${colors.primaryBoxShadow};
`

export const DarkBackground = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  filter: blur(18px);
  width: 200px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const DarkBackgroundSmall = styled.div`
  background-color: rgba(0, 0, 0, 0.65);
  filter: blur(18px);
  width: 200px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

export const OptionsWrapper = styled.div`
  display: flex;
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;
  margin-left: 20px;
`

export const Span = styled.div`
  margin-right: 5px;
  background-color: rgba(0, 0, 0, 0.01);
  position: relative;
`

export const Label = styled.label`
  margin-right: 20px;
`

export const ItineraryGenerator = styled.div`
  color: white;
  position: relative;
  outline: none;
`

export const DownArrow = styled.div`
  margin-left: 5px;
`

export const Calendar = styled.div.attrs({
  className:
    'DateInput DateInput_input DateInput_input__focused DateRangePicker_picker__directionLeft DateRangePickerInput__withBorder DateRangePicker'
})`
  &.DateInput {
    width: 150px;
    border-radius: 0;
  }

  &.DateRangePicker {
    width: 290px;
    @media (max-width: 600px) {
      width: 100%;
    }
  }

  &.DateInput_input {
    border-radius: 4px;
    font-size: 7px;
    border-radius: 0px;
    padding: 0;
  }

  &.DateInput_input__focused {
    padding-bottom: 23px;
  }

  &.DateRangePicker_picker__directionLeft {
    ${'' /* border-radius: 4px; */};
  }

  &.DateRangePickerInput__withBorder {
    height: 60px;
    border-radius: 4px;
    ${'' /* box-shadow: 0 1px 3px 0 rgba(37, 32, 31, 0.3); */};
  }
`
