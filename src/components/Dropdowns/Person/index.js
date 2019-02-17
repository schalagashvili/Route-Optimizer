import React, { Component } from 'react'
import TweenLite from 'gsap'
import { Wrapper, Drop, InnerWrapper, MainWrapper, Quantity, Text } from './styles'
import { UsersIcon, PlusIcon, MinusIcon, ArrowDownIcon } from '../../../assets/icons'
import withPlanningState from '../../../context'

class PersonsDropdown extends Component {
  state = {
    dropOpen: false,
    childrenMinusColor: 'lightBlue',
    adultsMinusColor: '#00B2D6'
  }

  openHandler = () => {
    const { dropOpen } = this.state

    if (!dropOpen) {
      TweenLite.to(this.drop, 0.3, { height: 300 })
      TweenLite.to('#people-dropdown-arrow', 0.3, { rotation: 180 })

      return this.setState({ dropOpen: true })
    }
    TweenLite.to(this.drop, 0.3, { height: 0 })
    TweenLite.to('#people-dropdown-arrow', 0.3, { rotation: 0 })
    return this.setState({ dropOpen: false })
  }

  handleClickOutside = () => {
    this.setState({ dropOpen: false })
    TweenLite.to(this.drop, 0.3, { height: 0 })
    TweenLite.to('#people-dropdown-arrow', 0.3, { rotation: 0 })
  }

  incrementChildren = () => {
    const { quantityChildren, updateQuantity } = this.props
    if (quantityChildren === 0) this.setState({ childrenMinusColor: '#00B2D6' })
    updateQuantity('quantityChildren', quantityChildren + 1)
  }

  decrementChildren = () => {
    const { quantityChildren, updateQuantity } = this.props
    if (quantityChildren === 1) this.setState({ childrenMinusColor: 'lightBlue' })
    if (quantityChildren !== 0) updateQuantity('quantityChildren', quantityChildren - 1)
  }

  incrementAdults = () => {
    const { quantityAdults, updateQuantity } = this.props
    if (quantityAdults === 0) this.setState({ adultsMinusColor: '#00B2D6' })
    updateQuantity('quantityAdults', quantityAdults + 1)
  }

  decrementAdults = () => {
    const { quantityAdults, updateQuantity } = this.props
    if (quantityAdults === 1) this.setState({ adultsMinusColor: 'lightBlue' })
    if (quantityAdults !== 0) updateQuantity('quantityAdults', quantityAdults - 1)
  }

  render() {
    const { childrenMinusColor, adultsMinusColor } = this.state
    const {
      quantityAdults,
      quantityChildren,
      noMarginLeft,
      noMaxWidth,
      marginRightBottom,
      noBorderRadius,
      fullHeight,
      noBorderLeftRadius,
      header
    } = this.props
    const {
      incrementChildren,
      decrementChildren,
      incrementAdults,
      decrementAdults,
      openHandler
    } = this

    return (
      <MainWrapper
        noMarginLeft={noMarginLeft && true}
        noMaxWidth={noMaxWidth && true}
        onBlur={this.handleClickOutside}
        marginRightBottom={marginRightBottom && true}
        tabIndex="0"
      >
        {header && <Text>Persons</Text>}

        <Wrapper
          noBorderRadius={noBorderRadius && true}
          noBorderLeftRadius={noBorderLeftRadius && true}
          fullHeight={fullHeight && true}
          onClick={openHandler}
          innerRef={comp => {
            this.wrapperRef = comp
          }}
        >
          <UsersIcon color="#00B2D6" height={25} width={25} />
          <div>
            <Quantity>{quantityAdults}</Quantity> - <Quantity>{quantityChildren}</Quantity>
          </div>
          <div id="people-dropdown-arrow">
            <ArrowDownIcon color="#484848" height={12} width={12} />
          </div>
        </Wrapper>
        <Drop
          fullHeight={fullHeight && true}
          innerRef={comp => {
            this.drop = comp
          }}
        >
          <InnerWrapper>
            {quantityAdults} Adults
            <div>
              <MinusIcon
                decrement={decrementAdults}
                color={adultsMinusColor || 'lightBlue'}
                height={25}
                width={25}
                styles={{ cursor: 'pointer', marginRight: 7 }}
              />
              <PlusIcon
                increment={incrementAdults}
                color="#00B2D6"
                height={25}
                width={25}
                styles={{ cursor: 'pointer' }}
              />
            </div>
          </InnerWrapper>
          <InnerWrapper>
            {quantityChildren} Children
            <div>
              <MinusIcon
                decrement={decrementChildren}
                color={childrenMinusColor || '#00B2D6'}
                height={25}
                width={25}
                styles={{ cursor: 'pointer', marginRight: 7 }}
              />
              <PlusIcon
                increment={incrementChildren}
                color="#00B2D6"
                height={25}
                width={25}
                styles={{ cursor: 'pointer' }}
              />
            </div>
          </InnerWrapper>
        </Drop>
      </MainWrapper>
    )
  }
}

export default withPlanningState(PersonsDropdown)

// import React, { Component } from 'react'
// import { Wrapper, Drop, InnerWrapper, MainWrapper, Quantity, Arrow, Text } from './styles'
// import { UsersIcon, PlusIcon, MinusIcon, ArrowDownIcon } from '../../../assets/icons'

// class PersonsDropdown extends Component {
//   state = {
//     isDropdownOpen: false,
//     height: false,
//     adults: 2,
//     children: 0,
//     childrenMinusColor: 'lightBlue',
//     adultsMinusColor: '#00B2D6'
//   }

//   clickHandler = () => {
//     const { isDropdownOpen } = this.state

//     if (!isDropdownOpen) {
//       return this.setState({ isDropdownOpen: true, height: true })
//     }
//     return this.setState({ isDropdownOpen: false })
//   }

//   handleClickOutside = () => {
//     this.setState({ isDropdownOpen: false })
//   }

//   incrementChildren = () => {
//     const { children } = this.state
//     if (children === 0) {
//       this.setState({ childrenMinusColor: '#00B2D6' })
//     }
//     this.setState({ children: children + 1 })
//   }

//   decrementChildren = () => {
//     const { children } = this.state

//     if (children === 1) {
//       this.setState({ childrenMinusColor: 'lightBlue' })
//     }
//     if (children !== 0) {
//       this.setState({ children: children - 1 })
//     }
//   }

//   incrementAdults = () => {
//     const { adults } = this.state

//     if (adults === 0) {
//       this.setState({ adultsMinusColor: '#00B2D6' })
//     }
//     this.setState({ adults: adults + 1 })
//   }

//   decrementAdults = () => {
//     const { adults } = this.state

//     if (adults === 1) {
//       this.setState({ adultsMinusColor: 'lightBlue' })
//     }
//     if (adults !== 0) {
//       this.setState({ adults: adults - 1 })
//     }
//   }

//   render() {
//     const {
//       children,
//       adults,
//       childrenMinusColor,
//       adultsMinusColor,
//       height,
//       isDropdownOpen
//     } = this.state
//     const {
//       noMarginLeft,
//       noMaxWidth,
//       marginRightBottom,
//       noBorderRadius,
//       fullHeight,
//       noBorderLeftRadius
//     } = this.props
//     const {
//       incrementChildren,
//       decrementChildren,
//       incrementAdults,
//       decrementAdults,
//       clickHandler
//     } = this

//     return (
//       <MainWrapper
//         noMarginLeft={noMarginLeft && true}
//         noMaxWidth={noMaxWidth && true}
//         onBlur={this.handleClickOutside}
//         marginRightBottom={marginRightBottom && true}
//         tabIndex="0"
//       >
//         <Text>Persons</Text>
//         <Wrapper
//           noBorderRadius={noBorderRadius && true}
//           noBorderLeftRadius={noBorderLeftRadius && true}
//           fullHeight={fullHeight && true}
//           onClick={clickHandler}
//         >
//           <UsersIcon color="#00B2D6" height={25} width={25} />
//           <div>
//             <Quantity>{adults} Adults</Quantity> - <Quantity>{children} Children</Quantity>
//           </div>
//           <Arrow isDropdownOpen={isDropdownOpen} height={height}>
//             <ArrowDownIcon color="#484848" height={12} width={12} />
//           </Arrow>
//         </Wrapper>
//         <Drop fullHeight={fullHeight && true} isDropdownOpen={isDropdownOpen} height={height}>
//           <InnerWrapper>
//             {adults} Adults
//             <div>
//               <MinusIcon
//                 decrement={decrementAdults}
//                 color={adultsMinusColor || 'lightBlue'}
//                 height={25}
//                 width={25}
//                 styles={{ cursor: 'pointer', marginRight: 7 }}
//               />
//               <PlusIcon
//                 increment={incrementAdults}
//                 color="#00B2D6"
//                 height={25}
//                 width={25}
//                 styles={{ cursor: 'pointer' }}
//               />
//             </div>
//           </InnerWrapper>
//           <InnerWrapper>
//             {children} Children
//             <div>
//               <MinusIcon
//                 decrement={decrementChildren}
//                 color={childrenMinusColor || '#00B2D6'}
//                 height={25}
//                 width={25}
//                 styles={{ cursor: 'pointer', marginRight: 7 }}
//               />
//               <PlusIcon
//                 increment={incrementChildren}
//                 color="#00B2D6"
//                 height={25}
//                 width={25}
//                 styles={{ cursor: 'pointer' }}
//               />
//             </div>
//           </InnerWrapper>
//         </Drop>
//       </MainWrapper>
//     )
//   }
// }

// export default PersonsDropdown
