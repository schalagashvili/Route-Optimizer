import React from 'react'
import { Wrapper, Input, Text, IconWrapper } from './styles'
import { PinIcon } from '../../../assets/icons'

const AutocompleteInput = props => (
  <Wrapper
    noMarginLeft={props.noMarginLeft && true}
    noMinWidth={props.noMinWidth && true}
    marginRightBottom={props.marginRightBottom && true}
  >
    <Text>{props.title}</Text>
    <IconWrapper>
      <PinIcon color="#00b2d6" height={20} width={20} />
    </IconWrapper>
    <Input
      fullHeight={props.fullHeight && true}
      noBorderRadius={props.noBorderRadius && true}
      noBorderRightRadius={props.noBorderRightRadius && true}
      noBorderLeftRadius={props.noBorderLeftRadius && true}
      type="text"
      defaultValue={props.defaultValue}
      placeholder={props.placeholder}
      id={props.id}
      className="autocomplete"
    />
  </Wrapper>
)

export default AutocompleteInput
