import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import h1 from '../../assets/images/h9.jpg'
import h2 from '../../assets/images/h2.jpg'
import h3 from '../../assets/images/h3.jpg'
import h4 from '../../assets/images/h4.jpg'
import h5 from '../../assets/images/h5.jpg'
import h6 from '../../assets/images/h6.jpg'
import './styles.css'

class SimpleSlider extends React.Component {
  state = {}

  render() {
    const settings = {
      customPaging() {
        return (
          <a href="/">
            <img alt="img" style={{ width: 40, height: 40 }} src={h5} />
          </a>
        )
      },
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <Slider {...settings} style={{ height: 400, borderTopLeftRadius: 4, overflow: 'hidden' }}>
        <div>
          <img alt="img" src={h1} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h2} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h3} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h4} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h5} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h6} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h1} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h2} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h3} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h4} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h5} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
        <div>
          <img alt="img" src={h6} style={{ height: 400, width: '100%', objectFit: 'cover' }} />
        </div>
      </Slider>
    )
  }
}

export default SimpleSlider
