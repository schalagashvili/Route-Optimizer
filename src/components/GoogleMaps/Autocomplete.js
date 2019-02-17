import React, { Component } from 'react'

class Autocomplete extends Component {
  state = {}

  componentDidMount() {
    const { onScriptLoad } = this

    if (!window.google) {
      const s = document.createElement('script')
      s.type = 'text/javascript'
      s.src = `https://maps.google.com/maps/api/js?key=AIzaSyDPZVTVaoFFBM-NJZUiOqkr8-qL21yf3nc&libraries=places`
      const x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
      s.addEventListener('load', e => {
        onScriptLoad()
      })
    } else {
      onScriptLoad()
    }
  }

  onScriptLoad = () => {
    const options = {
      types: ['(cities)']
    }

    const input = document.getElementById('pac-input')
    const autocomplete = new window.google.maps.places.Autocomplete(input, options)
  }

  render() {
    return (
      <div>
        <input id="pac-input" type="text" placeholder="Enter a location" />
      </div>
    )
  }
}

export default Autocomplete
