import { injectGlobal } from 'styled-components'
import QuicksandRegular from '../assets/fonts/Quicksand-Regular.ttf'
import QuicksandLight from '../assets/fonts/Quicksand-Light.ttf'
import QuicksandMedium from '../assets/fonts/Quicksand-Medium.ttf'
import QuicksandBold from '../assets/fonts/Quicksand-Bold.ttf'

injectGlobal`
  @font-face {
    font-family: QuicksandRegular;
    src: url('${QuicksandRegular}') format('opentype');
  }

  @font-face {
    font-family: QuicksandLight;
    src: url('${QuicksandLight}') format('opentype');
  }

  @font-face {
    font-family: QuicksandMedium;
    src: url('${QuicksandMedium}') format('opentype');
  }

  @font-face {
    font-family: QuicksandBold;
    src: url('${QuicksandBold}') format('opentype');
  }

  * {
      font-family: QuicksandRegular;
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-size: 14px;
  }

  body {
    margin: 0;
  }
`
