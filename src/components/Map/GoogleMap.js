import React from 'react'
import { GoogleMap, withGoogleMap, withScriptjs } from 'react-google-maps'

const GoogleMaps = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap {...props} ref={props.onMapMounted}>
      {props.children}
    </GoogleMap>
  ))
)

export default GoogleMaps
