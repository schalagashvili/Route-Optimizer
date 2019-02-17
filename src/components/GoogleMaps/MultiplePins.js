import React, { Component } from 'react'
import Map from './Map'

class MultiPins extends Component {
  state = {}

  componentDidMount() {
    const locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ]

    const map = new window.google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new window.google.maps.LatLng(-33.92, 151.25),
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    })

    const infowindow = new window.google.maps.InfoWindow()

    let marker
    let i

    for (i = 0; i < locations.length; i++) {
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
        map
      })

      window.google.maps.event.addListener(
        marker,
        'click',
        ((marker, i) => () => {
          infowindow.setContent(locations[i][0])
          infowindow.open(map, marker)
        })(marker, i)
      )
    }
  }

  render() {
    return null
  }
}

export default MultiPins
