import styled from 'styled-components'
import sizes from '../../../styles/sizes'
import colors from '../../../styles/colors'

export const MainWrapper = styled.div`
  max-width: 100%;
  min-width: 210px;
  margin: ${props => props.marginRightBottom && '0 10px 15px 0'};
  flex: 1;
  display: flex;
  outline: none;
  position: relative;
  flex-direction: column;
  height: ${props => (props.fullHeight ? '100%' : '46px')};
`

export const Drop = styled.div`
  box-sizing: border-box;
  position: absolute;
  border-radius: ${sizes.borderRadius};
  width: 100%;
  z-index: ${sizes.dropdownIndex};
  top: ${sizes.inputFieldHeight};
  flex-direction: column;
  align-items: space-between;
  overflow-y: auto;
  background-color: white;
  box-shadow: ${colors.primaryBoxShadow};
  transition: z-index 200ms ${({ isDropdownOpen }) => (isDropdownOpen ? 'step-start' : 'step-end')},
    opacity 175ms ease-out, transform 200ms ease-out;
  transform: translate3d(0, ${({ isDropdownOpen }) => (isDropdownOpen ? '0' : '-5px')}, 0);
  opacity: ${({ isDropdownOpen }) => (isDropdownOpen ? '1' : '0')};
  z-index: ${({ isDropdownOpen }) => (isDropdownOpen ? '100' : '-1')};
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: lightgray;
    outline: 1px solid slategrey;
  }
`

export const Wrapper = styled.div`
  box-sizing: border-box;
  min-width: 210px;
  color: ${colors.primaryText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 20px;
  height: ${sizes.inputFieldHeight};
  border-radius: ${sizes.borderRadius};
  background-color: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
  flex: 1;
`

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const SelectedWrapper = styled.div`
  display: flex;
  padding: 15px;
  align-items: center;
`

export const DropItem = styled.div`
  &:hover {
    background-color: lightGray;
  }
  padding: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const Text = styled.div`
  padding-left: 10px;
  user-select: none;
`

const rotationHandler = ({ isDropdownOpen }) => (isDropdownOpen ? 180 : 0)

export const Arrow = styled.div`
  transform: rotate(${rotationHandler}deg);
  transition: transform 200ms ease-out;
`

export const Text2 = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 20px;
  padding: 0 4px;
  top: -8px;
  font-size: 11px;
  user-select: none;
`
