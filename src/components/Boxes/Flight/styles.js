import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  min-height: 140px;
  cursor: grab;
  ${'' /* margin-bottom: 20px; */}
  border-radius: ${sizes.borderRadius};
  ${'' /* box-shadow: ${colors.primaryBoxShadow}; */}
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${sizes.media.laptop}) {
    flex-direction: column;
  }
`

export const Name = styled.div`
  font-size: ${fonts.sizes.medium};
  font-weight: ${fonts.weights.bold};
  margin-bottom: 5px;
`

export const FirstColumn = styled.div`
  flex: 2;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  color: ${colors.primaryText};
  margin: 10px;
`

export const FlightInfo = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;
`

export const DepartInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
`

export const ArriveInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const FlightTime = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
  margin-right: 20px;
`

export const Logo = styled.div`
  flex-grow: 0;
  @media (max-width: ${sizes.media.mobileM}) {
    display: none;
  }
`

export const FirstRow = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`

export const SecondRow = styled.div`
  align-items: center;
  flex: 1;
  display: flex;
`

export const SecondColumn = styled.div`
  box-sizing: border-box;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-left: 1.5px dashed lightgray;
  @media (max-width: ${sizes.media.laptop}) {
    border-left: none;
    border-top: 1.5px dashed lightgray;
    padding-left: 1.5px;
    flex-direction: row;
    justify-content: flex-end;
    padding: 13px 13px 13px 0;
  }
  justify-content: center;
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
  color: ${colors.primaryText};
  font-size: 21px;
  align-items: center;
  display: flex;
  font-weight: ${fonts.weights.bold};
  margin-bottom: 10px;
  @media (max-width: ${sizes.media.laptop}) {
    margin-bottom: 0;
    padding-right: 15px;
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

export const Stops = styled.div`
  color: green;
  font-size: 12px;
`

export const Time = styled.div`
  font-weight: ${fonts.weights.bold};
`

export const Airlines = styled.div`
  margin: 10px 15px 0;
  font-size: 12px;
  @media (min-width: ${sizes.media.mobileM}) {
    display: none;
  }
`
