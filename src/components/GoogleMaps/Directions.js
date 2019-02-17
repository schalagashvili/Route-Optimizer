// import React, { Component } from 'react'
// import Map from './Map'

// class GoogleMaps extends Component {
//   state = {}

//   directions = () => {
//     const directionsService = new window.google.maps.DirectionsService()
//     const directionsDisplay = new window.google.maps.DirectionsRenderer()
//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       zoom: 6,
//       center: { lat: 41.85, lng: -87.65 }
//     })
//     directionsDisplay.setMap(map)

//     directionsService.route(
//       {
//         origin: 'Perth, WA',
//         destination: 'Sydney, NSW',
//         waypoints: [{ location: 'Adelaide, SA' }, { location: 'Broken Hill, NSW' }],
//         optimizeWaypoints: true,
//         travelMode: 'DRIVING'
//       },
//       (response, status) => {
//         if (status === 'OK') {
//           directionsDisplay.setDirections(response)
//         }
//       }
//     )
//   }

//   MultipleMarkers = () => {
//     const locations = [
//       ['Bondi Beach', -33.890542, 151.274856, 4],
//       ['Coogee Beach', -33.923036, 151.259052, 5],
//       ['Cronulla Beach', -34.028249, 151.157507, 3],
//       ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//       ['Maroubra Beach', -33.950198, 151.259302, 1]
//     ]

//     const map = new window.google.maps.Map(document.getElementById('map'), {
//       zoom: 10,
//       center: new window.google.maps.LatLng(-33.92, 151.25),
//       mapTypeId: window.google.maps.MapTypeId.ROADMAP
//     })

//     const infowindow = new window.google.maps.InfoWindow()

//     let marker
//     let i

//     for (i = 0; i < locations.length; i++) {
//       marker = new window.google.maps.Marker({
//         position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
//         map
//       })

//       window.google.maps.event.addListener(
//         marker,
//         'click',
//         ((marker, i) => () => {
//           infowindow.setContent(locations[i][0])
//           infowindow.open(map, marker)
//         })(marker, i)
//       )
//     }
//   }

//   autocomplete = () => {
//     const options = {
//       types: ['(cities)']
//     }

//     const input = document.getElementById('pac-input')
//     const autocomplete = new window.google.maps.places.Autocomplete(input, options)
//   }

//   onScriptLoad = () => {
//     const { directions, multipleMarkers } = this.props

//     if (directions) {
//       this.directions()
//     } else if (multipleMarkers) {
//       this.multipleMarkers()
//     } else {
//       this.autocomplete()
//     }
//   }

//   render() {
//     return <Map id="map" onScriptLoad={this.onScriptLoad} />
//   }
// }

// export default GoogleMaps
