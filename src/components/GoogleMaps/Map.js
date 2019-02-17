import React, { Component } from 'react'

class Map extends Component {
  componentDidMount() {
    const { onScriptLoad } = this.props

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

  render() {
    const { id, autocomplete } = this.props

    return autocomplete ? (
      <input id="pac-input" type="text" placeholder="Enter a location" />
    ) : (
      <div style={{ width: '100%', height: '100vh' }} id={id} />
    )
  }
}

export default Map
