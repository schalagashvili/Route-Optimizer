import styled from 'styled-components'
import fonts from '../../../styles/fonts'
import colors from '../../../styles/colors'
import sizes from '../../../styles/sizes'

export const Overlay = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  transition: all 0.3s;
  opacity: ${props => (props.isOpen ? '1' : '0')};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
`

export const Content = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 450px;
  width: 100%;
  background-color: #f3f2f5;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transform: ${props => (props.isOpen ? 'translate(-50%, -50%)' : ' translate(-50%, -90%)')};
  transition: all 1s 0.1s cubic-bezier(0.55, 0.78, 0.22, 1.55);
  opacity: ${props => (props.isOpen ? '1' : '0')};
  height: 450px;
  outline: none;
`

export const Close = styled.span`
  color: #999;
  position: absolute;
  top: 7.5px;
  right: 15px;
  margin: 0;
  padding: 0;
  font-size: 30px;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s;
  line-height: 1;
  cursor: pointer;
`

export const Input = styled.input`
  box-sizing: border-box;
  width: 350px;
  border: none;
  border-radius: ${sizes.borderRadius};
  min-height: 46px;
  outline: none;
  margin-top: 10px;
  margin: 10px;
  padding-left: 10px;
  font-family: ${fonts.types.regular};
  box-shadow: ${colors.primaryBoxShadow};
`

export const Button = styled.div`
  width: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  font-size: 17px;
  box-shadow: 0 1px 6px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
  margin-top: 20px;
`

export const DividerLine = styled.div`
  width: 345px;
  text-align: center;
  border-bottom: 0.5px solid #484848;
  line-height: 0.1em;
  margin: 20px 0 10px;
  margin-top: 25px;
  color: #484848;
`

export const Heading = styled.h1`
  color: #484848;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  width: 350px;
  align-items: baseline;
`

export const Span = styled.div`
  background: #f3f2f5;
  padding: 0 10px;
`

export const Text = styled.div`
  color: #484848;
  margin-top: 10px;
`
