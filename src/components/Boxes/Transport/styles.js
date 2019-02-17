import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 120px;
  margin-bottom: 20px;
  padding-left: ${props => (props.paddingLeft ? '85px' : 0)}
  border-radius: ${sizes.borderRadius};
  box-shadow: ${colors.primaryBoxShadow};
  display: flex;
`

export const Img = styled.div`
  flex: 1;
  @media (max-width: ${sizes.media.laptop}) {
    flex: 1.5;
  }
  min-height: 120px;
  background-position: 50% 50%;
  background-image: url(${props => props.src});
  background-size: cover;
  border-bottom-left-radius: ${props => (props.noBorderRadius ? '0' : sizes.borderRadius)};
  border-top-left-radius: ${props => (props.noBorderRadius ? '0' : sizes.borderRadius)};
`

export const Name = styled.div`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weights.bold};
  margin-bottom: 5px;
`

export const FirstColumn = styled.div`
  flex: 1.8;
  color: ${colors.primaryText};
  margin: 10px 0 10px 10px;
`

export const SecondColumn = styled.div`
  margin: 10px 10px 10px 7px;
  flex: 1.2;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
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
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
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
