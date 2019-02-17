import styled from 'styled-components'
import sizes from '../../../styles/sizes'
import colors from '../../../styles/colors'

export const Wrapper = styled.div`
  box-sizing: border-box;
  color: ${colors.primaryTextColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 23px;
  padding-left: 15px;
  height: ${sizes.inputFieldHeight};
  border-radius: ${sizes.borderRadius};
  background-color: white;
  box-shadow: ${colors.primaryBoxShadow};
  flex: 1;
`
export const MainWrapper = styled.div`
  min-width: 180px;
  flex: 1;
  display: flex;
  height: ${props => (props.fullHeight ? '100%' : '46px')};
  margin: ${props => props.marginRightBottom && '0 10px 10px 0'};
  max-width: 100%;
  position: relative;
  outline: none;
  flex-direction: column;
`

export const Drop = styled.div`
  box-sizing: border-box;
  z-index: ${sizes.dropdownIndex};
  flex-direction: column;
  position: absolute;
  top: ${sizes.inputFieldHeight};
  width: 100%;
  align-items: space-between;
  transition: z-index 200ms ${({ dropOpen }) => (dropOpen ? 'step-start' : 'step-end')},
    opacity 175ms ease-out, transform 200ms ease-out;
  transform: translate3d(0, ${({ dropOpen }) => (dropOpen ? '0' : '-4px')}, 0);
  opacity: ${({ dropOpen }) => (dropOpen ? '1' : '0')};
  z-index: ${({ dropOpen }) => (dropOpen ? '100' : '-1')};
  background-color: white;
  box-shadow: ${colors.primaryBoxShadow};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: lightgray;
    outline: 1px solid slategrey;
  }
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
`
export const SelectedWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const Category = styled.div`
  &:hover {
    background-color: lightGray;
  }
  padding: 13px;
  flex: 0;
  flex-direction: column;
  cursor: pointer;
  justify-content: center;
  & > img {
    user-select: none;
  }
`

const rotationHandler = ({ dropOpen }) => (dropOpen ? 180 : 0)

export const Arrow = styled.div`
  transform: rotate(${rotationHandler}deg);
  transition: transform 200ms ease-out;
`

export const Text = styled.div`
  padding-left: 10px;
`

export const Stroke = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 20px;
  padding: 0 4px;
  top: -8px;
  font-size: 11px;
  user-select: none;
`
