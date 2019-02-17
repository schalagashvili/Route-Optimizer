import styled from 'styled-components'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'
import colors from '../../../styles/colors'

export const Button = styled.div`
  width: 80px;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 30px;
  color: white;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
  right: 20px;
  top: 20px;
  z-index: 2;
`

export const MainWrapper = styled.div`
  width: 100%;
  display: none;
  opacity: 0;
  height: 100%;
  position: absolute;
  top: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: lightgray;
    outline: 1px solid slategrey;
  }
  left: 0;
  z-index: 4;
`

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
`

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: auto;
  background-color: white;
  border-radius: ${sizes.borderRadius};
  @media (max-width: 768px) {
    border-radius: 0;
  }
`

export const Wrapper = styled.div`
  padding: 60px 0 40px 0;
  @media (max-width: 768px) {
    padding: 0;
  }
`

export const HotelName = styled.div`
  font-size: ${fonts.sizes.large};
  color: ${colors.primaryText};
`

export const HorizontalLine = styled.div`
  width: 100%;
  border-bottom: 1px solid #ededed;
`

export const ArrowDownWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`

export const SectionWrapper = styled.div`
  position: relative;
`

export const FacilityFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 29px 10px 10px;
  flex: 1;
`

export const FacilitySecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0px 29px 10px 10px;
`

export const RoomInfoWrapper = styled.div`
  box-shadow: ${colors.primaryBoxShadow};
  border-radius: ${sizes.borderRadius};
  width: 95%;
  margin: 15px auto;
  height: 100%;
`
