import styled from 'styled-components'
import sizes from '../../../styles/sizes'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const Wrapper = styled.div`
  box-sizing: border-box;
  color: ${colors.primaryText};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 160px;
  border-radius: 4px;
  border-top-left-radius: ${props => props.noBorderLeftRadius && '0'};
  border-bottom-left-radius: ${props => props.noBorderLeftRadius && '0'};
  height: ${props => (props.fullHeight ? '100%' : sizes.inputFieldHeight)};
  padding: 0 20px 0 15px;
  font-size: ${fonts.sizes.regular};
  background-color: white;
  box-shadow: ${colors.primaryBoxShadow};
`

export const MainWrapper = styled.div`
  min-width: 160px;
  flex: 1;
  ${'' /* margin-left: ${props => (props.noMarginLeft ? '0' : '10px')}; */} display: flex;
  ${'' /* max-width: ${props => (props.noMaxWidth ? '100%' : '200px')}; */} max-width: 100%;
  margin: ${props => props.marginRightBottom && '0 10px 15px 0'};
  position: relative;
  outline: none;
  flex-direction: column;
`

// const closeAnimation = keyframes`
// from {
//   height: 200px;
// }
// to {
//   height: 0;
// }
// `

// const openAnimation = keyframes`
//   from {
//     height: 0;
//   }
//   to {
//     height: 200px;
//   }
// `

// const openHandler = ({ isDropdownOpen, height }) => {
//   if (!isDropdownOpen && height) {
//     return `${closeAnimation} 0.2s linear forwards`
//   }
//   if (isDropdownOpen && height) {
//     return `${openAnimation} 0.2s linear forwards`
//   }
//   return null
// }

export const Drop = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  align-items: space-between;
  top: ${props => (props.fullHeight ? '58px' : sizes.inputFieldHeight)};
  width: 100%;
  user-select: none;
  max-height: 76px;
  ${'' /* animation: ${openHandler}; */} flex: 1;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  z-index: ${sizes.dropdownIndex};
  overflow-y: hidden;
  position: absolute;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: lightgray;
    outline: 1px solid slategrey;
  }
  background-color: white;
  height: 0;
  box-shadow: ${colors.primaryBoxShadow};
`

export const InnerWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 5px 10px;
  justify-content: space-between;
`
export const SelectedWrapper = styled.div`
  display: flex;
`

export const Quantity = styled.div`
  display: inline-flex;
  ${'' /* width: 15px; */};
`

// const openArrowRotation = keyframes`
//   from {
//   transform: rotate(0deg);

//   }
//   to {
//   transform: rotate(180deg);

//   }
// `

// const closeArrowRotation = keyframes`
//   from {
//   transform: rotate(180deg);

//   }
//   to {
//   transform: rotate(0deg);

//   }
//   `

// const rotationHandler = ({ isDropdownOpen, height }) => {
//   if (!isDropdownOpen && height) {
//     return `${closeArrowRotation} 0.2s linear forwards`
//   }

//   if (isDropdownOpen && height) {
//     return `${openArrowRotation} 0.2s linear forwards`
//   }
//   return null
// }

export const Arrow = styled.div`
  transform: rotate(0deg);
  ${'' /* animation: ${rotationHandler}; */};
`

export const Text = styled.div`
  background-color: white;
  position: absolute;
  color: ${colors.primaryText};
  left: 20px;
  padding: 0 4px;
  z-index: 2;
  top: -8px;
  font-size: 11px;
`
