import React, { PureComponent } from 'react'
import {
  Wrapper,
  Drop,
  InnerWrapper,
  MainWrapper,
  SelectedWrapper,
  Category,
  Stroke,
  Arrow
} from './styles'
import {
  RestaurantIcon,
  AttractionIcon,
  ArrowDownIcon,
  AirplaneIcon,
  TransportIcon
} from '../../../assets/icons'
import { SkyscannerLogo, KayakLogo } from '../../../assets/logos'

class CustomDropdown extends PureComponent {
  state = {
    dropOpen: false,
    selectedCategory: 'Skyscanner'
  }

  openHandler = () => this.setState(({ dropOpen }) => ({ dropOpen: !dropOpen, height: true }))

  handleClickOutside = () => this.setState({ dropOpen: false })

  selectCategory = category => this.setState({ selectedCategory: category, dropOpen: false })

  renderIcon() {
    const { selectedCategory } = this.state

    switch (selectedCategory) {
      case 'Skyscanner':
        return <SkyscannerLogo color="#00b2d6" height={35} width={150} category="Flights" />
      case 'Kayak':
        return <KayakLogo color="#ec821f" height={30} width={200} />
      case 'Attractions':
        return <AttractionIcon color="#ec821f" height={20} width={20} />
      case 'Activities':
        return <TransportIcon color="#00b2d6" height={20} width={20} />
      case 'Restaurants':
        return <RestaurantIcon color="#00b2d6" height={20} width={20} />
      case 'Tours':
        return <AirplaneIcon color="#00b2d6" height={20} width={20} />
      case 'Transports':
        return <TransportIcon color="#00b2d6" height={20} width={20} />
      default:
        return null
    }
  }

  render() {
    const { openHandler, handleClickOutside } = this
    const { dropOpen } = this.state
    const { marginRightBottom, children, selected, header, width, height } = this.props

    return (
      <MainWrapper
        onBlur={handleClickOutside}
        tabIndex="0"
        marginRightBottom={marginRightBottom && true}
      >
        <Stroke>{header}</Stroke>
        <Wrapper onClick={openHandler}>
          <SelectedWrapper>
            <img alt="bnb" src={selected} style={{ width, height, userSelect: 'none' }} />
          </SelectedWrapper>
          <Arrow dropOpen={dropOpen}>
            <ArrowDownIcon color="#484848" height={12} width={12} />
          </Arrow>
        </Wrapper>
        <Drop
          dropOpen={dropOpen}
          innerRef={comp => {
            this.drop = comp
          }}
        >
          <InnerWrapper>
            {children.map(child => (
              <Category key={child.props.src}>{child}</Category>
            ))}
          </InnerWrapper>
        </Drop>
      </MainWrapper>
    )
  }
}

export default CustomDropdown
