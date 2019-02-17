import React, { PureComponent } from 'react'
import {
  DropContainer,
  DropOptionContainer,
  DropSelected,
  DropSelectedValue,
  DropItem,
  DropArrow,
  DropList
} from './styles'

class OptionDrop extends PureComponent {
  constructor({ optionDefault }) {
    super()
    this.state = {
      selectedValue: optionDefault,
      showDrop: false
    }
  }

  render() {
    const { optionData, width, align } = this.props
    const { selectedValue, showDrop } = this.state
    return (
      <DropContainer width={width} align={align}>
        <DropOptionContainer>
          <DropSelected
            onClick={() => this.setState(prevState => ({ showDrop: !prevState.showDrop }))}
          >
            <DropSelectedValue>{selectedValue}</DropSelectedValue>
          </DropSelected>
          <DropList show={showDrop}>
            {optionData.map(optionValue => (
              <DropItem
                onClick={() => {
                  this.setState({
                    selectedValue: optionValue,
                    showDrop: false
                  })
                }}
                key={optionValue}
              >
                {optionValue}
              </DropItem>
            ))}
          </DropList>
        </DropOptionContainer>
        <DropArrow
          onClick={() => this.setState(prevState => ({ showDrop: !prevState.showDrop }))}
          show={showDrop}
        />
      </DropContainer>
    )
  }
}

export default OptionDrop
