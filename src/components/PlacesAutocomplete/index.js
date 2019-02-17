import React from 'react'
import './styles.css'
import { Input, Wrapper, IconWrapper, Text } from './styles'
import { PinIcon } from '../../assets/icons'

const { compose, withProps, lifecycle } = require('recompose')
const { withScriptjs } = require('react-google-maps')

const {
  StandaloneSearchBox
} = require('react-google-maps/lib/components/places/StandaloneSearchBox')

const PlacesWithStandaloneSearchBox = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyDPZVTVaoFFBM-NJZUiOqkr8-qL21yf3nc&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />
  }),
  lifecycle({
    componentWillMount() {
      const refs = {}

      this.setState({
        places: [],
        onSearchBoxMounted: ref => {
          refs.searchBox = ref
        },
        onPlacesChanged: (props, context) => {
          const places = refs.searchBox.getPlaces()
          this.setState({
            places
          })
          places.map(({ geometry: { location } }) =>
            context.setCoordinates(location.lat(), location.lng())
          )
        }
      })
    }
  }),
  withScriptjs
)(props => (
  <Wrapper
    noMarginLeft={props.noMarginLeft && true}
    noMinWidth={props.noMinWidth && true}
    data-standalone-searchbox=""
    marginRightBottom={props.marginRightBottom && true}
  >
    <Text>{props.title}</Text>
    <IconWrapper>
      <PinIcon color="#00b2d6" height={20} width={20} />
    </IconWrapper>
    <StandaloneSearchBox ref={props.onSearchBoxMounted} bounds={props.bounds}>
      <Input
        fullHeight={props.fullHeight && true}
        noBorderRadius={props.noBorderRadius && true}
        noBorderRightRadius={props.noBorderRightRadius && true}
        noBorderLeftRadius={props.noBorderLeftRadius && true}
        type="text"
        placeholder={props.placeholder}
      />
    </StandaloneSearchBox>
  </Wrapper>
))

export default PlacesWithStandaloneSearchBox
