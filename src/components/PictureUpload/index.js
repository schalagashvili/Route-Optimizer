import React, { Component } from 'react'

class UploadImage extends Component {
  state = {}

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '200px',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            height: '100%',
            width: '200px',
            backgroundColor: 'pink',
            borderRadius: '50%',
            backgroundImage: 'url(https://placeimg.com/200/200/people)',
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            cursor: 'pointer'
          }}
        />
      </div>
    )
  }
}

export default UploadImage
