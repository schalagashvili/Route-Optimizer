import React from 'react'

const Hotel = ({ width, height, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490.7 490.7"
    height={height}
    width={width}
  >
    <path
      id="hotel"
      fill={color}
      d="M436.2,154.6H182.4c-12.4,0-33.1,4.7-33.1,36.6V240h320v-48.8C469.3,159.4,448.6,154.6,436.2,154.6z"
    />
    <polygon
      id="hotel"
      fill={color}
      points="80.3,250.6 32,250.6 32,80 0,80 0,410.7 32,410.7 32,325.3 458.7,325.3 458.7,410.6 490.7,410.6 490.7,250.6 		
			"
    />
    <circle id="hotel" fill={color} cx="85.3" cy="197.3" r="44.7" />
  </svg>
)
export default Hotel
