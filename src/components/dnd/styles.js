import styled from 'styled-components'

export const Transport = styled.div``

export const ListContainer = styled.div`
  border: 1px dashed black;
  padding: 70px 0;
  max-width: 730px;
  min-height: 30vh;
  margin: auto;
  position: relative;
`

export const Date = styled.div`
  width: 131px;
  height: 36px;
  margin-bottom: 30px;
  position: absolute;
  top: -15px;
  left: 10px;
  background-color: #333;
  border-radius: 30px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  fron-weight: bold;
  font-size: 16px;
  z-index: 10;
`

export const Description = styled.div`
  max-width: 730px;
  height: 140px;
  border: 2px dashed silver;
  border-radius: 4px;
  margin: 5px 0;
  position: absolute;
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
`
export const VerticalDash = styled.div`
  height: 85px;
  position: absolute;
  border-left: 2px dashed silver;
  top: -85px;
  left: 40px;
  z-index: -1;
  display: block;
`

export const Time = styled.div``

export const TimeWrapper = styled.div`
  position: absolute;
  display: flex;
  background-color: white;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85px;
  padding: 15px 0;
  height: 100%;
  z-index: 2;
`

export const Edit = styled.div`
  color: #00b2d6;
`

export const TransportationTime = styled.div`
  padding-left: 12px;
`
export const TransportationDistance = styled.div`
  padding-left: 12px;
`
export const TransportationPrice = styled.div`
  padding-left: 12px;
  color: green;
`

export const TransportWrapper = styled.div`
  display: ${props => (props.isDragging ? 'none' : 'flex')};
  align-items: center;
`

export const TtransportEdit = styled.div`
  color: #00b2d6;
  padding-left: 20px;
`

export const DayEnd = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`

export const Line = styled.div`
  position: absolute;
  border-bottom: 0.7px solid silver;
  width: 95%;
  top: 18px;
`

export const DayEndTime = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: #f3f2f5;
`

export const MoonIconWrapper = styled.div`
  margin-right: 10px;
`
