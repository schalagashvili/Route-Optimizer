import React, { PureComponent } from 'react'
import { MainWrapper, Background } from './styles'
import bg1 from '../../assets/images/bg1.jpg'
import bg2 from '../../assets/images/bg2.jpg'
import bg3 from '../../assets/images/bg5.jpg'
import bg4 from '../../assets/images/bg4.jpg'
import bg5 from '../../assets/images/bg7.jpg'
import { HomepageHeader, HomepageMiddle, HomepageFooter } from '../../components'

class Home extends PureComponent {
  state = { current: 0, images: [bg1, bg3, bg4, bg5, bg2] }

  componentDidMount() {
    this.interval = setInterval(async () => {
      await this.setState(({ current }) => ({ current: current === 4 ? 0 : current + 1 }))
      this.bgImageChanger()
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  bgImageChanger() {
    const { current, images } = this.state
    return <Background id="bgImage" bgImage={images[current]} />
  }

  render() {
    const bigScreen = window.innerWidth > 600 && true

    return (
      <MainWrapper>
        {this.bgImageChanger()}
        <HomepageHeader />
        <HomepageMiddle />
        {bigScreen && <HomepageFooter />}
      </MainWrapper>
    )
  }
}

export default Home
