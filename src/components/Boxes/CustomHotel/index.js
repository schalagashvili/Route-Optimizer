import React, { Component } from 'react'
import TweenLite from 'gsap'
import { AutcompleteInput } from '../../index'
import {
  MainWrapper,
  Img,
  FirstColumn,
  SecondColumn,
  Button,
  Input,
  Text,
  Buttons,
  AutocompleteWrapper
} from './styles'

class CustomHotelBox extends Component {
  state = {}

  closeCustomHotelBox = () => {
    TweenLite.to('#customHotelBox', 0.4, {
      height: '0',
      marginBottom: '0'
    })
  }

  render() {
    const { imageURL } = this.props

    return (
      <MainWrapper id="customHotelBox">
        {window.outerWidth > 1024 && <Img src={imageURL} />}
        <FirstColumn>
          <Input placeholder="Enter Hotel Name" />
          <AutocompleteWrapper>
            {/* <PlacesAutocomplete placeholder="Enter Location" /> */}
            <AutcompleteInput
              title="Where"
              placeholder="Enter city or airport"
              noMinWidth
              marginRightBottom
              id="autocomplete2"
            />
          </AutocompleteWrapper>
        </FirstColumn>
        <SecondColumn>
          <Input placeholder="Enter Nights" />
          <Input placeholder="$ Enter Price" />
          <Buttons>
            <Text onClick={this.closeCustomHotelBox}>Close</Text>
            <Button>Save</Button>
          </Buttons>
        </SecondColumn>
      </MainWrapper>
    )
  }
}

export default CustomHotelBox
