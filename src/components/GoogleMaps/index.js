import { Component } from 'react'

class Map extends Component {
  componentDidMount() {
    if (!window.google) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDPZVTVaoFFBM-NJZUiOqkr8-qL21yf3nc&libraries=places`
      const x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
      s.addEventListener('load', e => {
        this.onMapScriptLoad()
      })
    } else {
      this.onMapScriptLoad()
    }
  }

  onMapScriptLoad = () => {
    // ==========================================
    // DIrections
    // ==========================================
    const directionsService = new window.google.maps.DirectionsService()
    const directionsDisplay = new window.google.maps.DirectionsRenderer()
    const directionsMap = new window.google.maps.Map(document.getElementById('directionsMap'), {
      zoom: 15,
      center: { lat: -31.9539135, lng: 141.4539396 }
    })
    directionsDisplay.setMap(directionsMap)

    directionsService.route(
      {
        origin: new window.google.maps.LatLng(51.4542, -0.204),
        destination: new window.google.maps.LatLng(51.458, -0.132),
        waypoints: this.props.day1
          ? [
              { location: new window.google.maps.LatLng(51.482377, -0.239) },
              { location: new window.google.maps.LatLng(51.489, -0.181) },
              { location: new window.google.maps.LatLng(51.495, -0.148) },
              { location: new window.google.maps.LatLng(51.504, -0.135) },
              { location: new window.google.maps.LatLng(51.497, -0.219) },
              { location: new window.google.maps.LatLng(51.508, -0.193) }
            ]
          : [
              { location: new window.google.maps.LatLng(51.482377, -0.239) },
              { location: new window.google.maps.LatLng(51.489, -0.181) },
              { location: new window.google.maps.LatLng(51.495, -0.148) },
              { location: new window.google.maps.LatLng(51.604, -0.135) },
              { location: new window.google.maps.LatLng(51.497, -0.219) }
            ],
        optimizeWaypoints: true,
        travelMode: 'DRIVING'
      },
      (response, status) => {
        if (status === 'OK') {
          response.routes[0].legs.map(location => {
            // console.log(location.start_address)
          })
          directionsDisplay.setDirections(response)
        }
      }
    )

    // ==========================================
    // Mutliple Markers Map
    // ==========================================

    // const locations = [
    //   ['Bondoia Beach', -33.890542, 151.274856, 4],
    //   ['Coogee Beach', -33.923036, 151.259052, 5],
    //   ['Cronulla Beach', -34.028249, 151.157507, 3],
    //   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
    //   ['Maroubra Beach', -33.950198, 151.259302, 1]
    // ]

    const locations = [
      // [51.482377, 151.274856, 4],
      // [-33.923036, 151.259052, 5],
      // [-34.028249, 151.157507, 3],
      // [-33.80010128657071, 151.28747820854187, 2],
      // [-33.950198, 151.259302, 1],
      [51.489, -0.181],
      [51.495, -0.148],
      [51.504, -0.135],
      [51.497, -0.219],
      [51.508, -0.193],
      [51.522, -0.151],
      [51.507, -0.228],
      [51.523, -0.179],
      [51.528, -0.136],
      [51.529, -0.224]
    ]

    const map = new window.google.maps.Map(document.getElementById('multipleMarkersMap'), {
      zoom: 13,
      center: new window.google.maps.LatLng(51.508, -0.179),
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    })

    const iconBase = 'https://maps.google.com/mapfiles/kml/shapes/'
    const icons = {
      parking: {
        icon: `${iconBase}parking_lot_maps.png`
      },
      library: {
        icon: `${iconBase}library_maps.png`
      },
      info: {
        icon: `${iconBase}info-i_maps.png`
      }
    }

    const infowindow = new window.google.maps.InfoWindow()

    let marker
    let i

    const markerIcon = {
      url: 'http://image.flaticon.com/icons/svg/252/252025.svg',
      scaledSize: new window.google.maps.Size(80, 80),
      origin: new window.google.maps.Point(0, 0),
      anchor: new window.google.maps.Point(32, 65),
      labelOrigin: new window.google.maps.Point(40, 33)
    }

    for (i = 0; i < locations.length; i++) {
      const markerLabel = '$50'
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i][0], locations[i][1]),
        map,
        // title: 'hello world',
        icon: markerIcon,
        label: {
          text: markerLabel,
          color: '#eb3a44',
          fontSize: '11px',
          fontWeight: 'bold'
        }
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

    // ==========================================
    // Autocomplete
    // ==========================================
    // const autocomplete1 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete1'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete2 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete2'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete3 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete3'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete4 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete4'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete5 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete5'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete6 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete6'),
    //   {
    //     types: ['(cities)']
    //   }
    // )
    // const autocomplete7 = new window.google.maps.places.Autocomplete(
    //   document.getElementById('autocomplete7'),
    //   {
    //     types: ['(cities)']
    //   }
    // )

    const acInputs = document.getElementsByClassName('autocomplete')

    for (let i = 0; i < acInputs.length; i++) {
      const autocomplete = new window.google.maps.places.Autocomplete(acInputs[i])
      autocomplete.inputId = acInputs[i].id

      window.google.maps.event.addListener(autocomplete, 'place_changed', function() {
        document.getElementById('log').innerHTML = `You used input with id ${this.inputId}`
      })
    }
  }

  render() {
    return null
  }
}

export default Map
