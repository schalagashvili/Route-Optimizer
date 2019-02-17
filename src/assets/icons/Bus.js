import React from 'react'

const Bus = ({ width, height, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76.334 76.334" height={height} width={width}>
    <path
      id="bus"
      fill={color}
      d="M2.386,21.467h2.386v14.312H2.386C1.067,35.779,0,34.717,0,33.394v-9.542C0,22.54,1.067,21.467,2.386,21.467z
		 M73.948,21.467h-2.388v14.312h2.388c1.317,0,2.386-1.062,2.386-2.385v-9.542C76.334,22.54,75.268,21.467,73.948,21.467z
		 M66.792,16.698v42.937c0,2.638-2.133,4.771-4.771,4.771v4.771c0,2.639-2.133,4.771-4.771,4.771h-4.772
		c-2.637,0-4.771-2.137-4.771-4.771v-4.771H28.626v4.771c0,2.639-2.134,4.771-4.771,4.771h-4.769c-2.638,0-4.771-2.137-4.771-4.771
		v-4.771c-2.637,0-4.771-2.137-4.771-4.771V16.698C9.542,8.796,15.954,2.386,23.855,2.386H52.48
		C60.382,2.386,66.792,8.794,66.792,16.698z M28.626,11.928h19.083V7.157H28.626V11.928z M23.855,54.866
		c0-2.641-2.134-4.771-4.769-4.771c-2.637,0-4.771,2.133-4.771,4.771c0,2.635,2.134,4.771,4.771,4.771
		C21.72,59.636,23.855,57.499,23.855,54.866z M62.021,54.866c0-2.641-2.133-4.771-4.771-4.771s-4.771,2.133-4.771,4.771
		c0,2.635,2.136,4.771,4.771,4.771C59.889,59.636,62.021,57.499,62.021,54.866z M62.021,16.698H14.313v28.625h47.708V16.698
		L62.021,16.698z"
    />
  </svg>
)
export default Bus
