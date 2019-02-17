import React, { PureComponent } from 'react'
import {
  Wrapper,
  Drop,
  InnerWrapper,
  MainWrapper,
  DropItem,
  SelectedWrapper,
  Text,
  Arrow,
  Text2
} from './styles'
import { ArrowDownIcon } from '../../../assets/icons'

class Dropdown extends PureComponent {
  constructor(props) {
    super(props)
    const { defaultSelected } = props
    this.state = {
      isDropdownOpen: false,
      selectedValue: defaultSelected
    }
  }

  clickHandler = () => this.setState(({ isDropdownOpen }) => ({ isDropdownOpen: !isDropdownOpen }))

  handleClickOutside = () => {
    const { isDropdownOpen } = this.state
    if (isDropdownOpen) this.setState({ isDropdownOpen: false })
  }

  selectValue = value => {
    this.setState({ selectedValue: value, isDropdownOpen: false })
  }

  selectHandler = selected => {
    const { onItemSelect } = this.props

    this.selectValue(selected)
    return onItemSelect && onItemSelect(selected)
  }

  renderIcon = () => {
    const { selectedValue } = this.state
    const { values, icons, width, height } = this.props

    return icons.map(
      (Icon, index) =>
        values[index] === selectedValue ? (
          <Icon
            color="#00b2d6"
            height={height}
            width={width}
            key={`${values[index]}dropSelectedValue`}
          />
        ) : null
    )
  }

  render() {
    const { clickHandler, selectValue, handleClickOutside } = this
    const { selectedValue, isDropdownOpen, height } = this.state
    const {
      marginRightBottom,
      onItemSelect,
      icons,
      values,
      onlyIcons,
      title,
      width,
      height: propHeight
    } = this.props

    return (
      <MainWrapper
        onBlur={handleClickOutside}
        tabIndex="0"
        marginRightBottom={marginRightBottom && true}
      >
        <Text2>{title}</Text2>

        <Wrapper onClick={clickHandler}>
          <SelectedWrapper>
            {icons && this.renderIcon()}
            {!onlyIcons && <Text>{selectedValue}</Text>}
          </SelectedWrapper>
          <Arrow isDropdownOpen={isDropdownOpen} showHeight={height}>
            <ArrowDownIcon color="#484848" height={12} width={12} />
          </Arrow>
        </Wrapper>
        <Drop isDropdownOpen={isDropdownOpen} showHeight={height}>
          <InnerWrapper>
            {icons
              ? icons.map((Icon, index) => (
                  <DropItem
                    onClick={() => this.selectHandler(values[index])}
                    key={`${values[index]}dropItem`}
                  >
                    <Icon
                      color={selectedValue === values[index] ? '#00b2d6' : '#484848'}
                      height={propHeight}
                      width={width}
                    />
                    {!onlyIcons && <Text>{values[index]}</Text>}
                  </DropItem>
                ))
              : values.map(label => (
                  <DropItem
                    key={`${label}dropItem`}
                    onClick={() => {
                      selectValue(label)
                      onItemSelect(label)
                    }}
                  >
                    <Text>{label}</Text>
                  </DropItem>
                ))}
          </InnerWrapper>
        </Drop>
      </MainWrapper>
    )
  }
}

export default Dropdown
