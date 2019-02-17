import React from 'react'
import GoogleMap from './GoogleMap'
import './styles.css'
import { GoogleMaps } from './styles'

const Map = () => (
  <GoogleMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDPZVTVaoFFBM-NJZUiOqkr8-qL21yf3nc&v=3.exp&libraries=geometry,drawing,places"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<GoogleMaps id="google-map" />}
    mapElement={<div style={{ height: `100%` }} />}
    defaultZoom={16}
    center={{
      lat: 41.6946263,
      lng: 44.799659
    }}
  >
    {/* <Marker position={{ lat: latitudeCoordinate, lng: longtitudeCoordinate }} /> */}
  </GoogleMap>
)

export default Map
