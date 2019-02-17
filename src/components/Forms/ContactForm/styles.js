import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

export const MainFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`

export const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.small};
`

export const InputField = styled.input`
  box-shadow: ${colors.primaryBoxShadow};
  border: none;
  margin-top: 25px;
  padding: 10px;
  font-family: ${fonts.types.regular};
  border-radius: 4px;
  background-color: white;
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.regular};
  outline: none;
  text-overflow: ellipsis;
  width: 100%;
  min-width: 150px;
  margin-left: 8px;
  margin-right: 8px;
`

export const TextAreaField = styled.textarea`
  box-shadow: ${colors.primaryBoxShadow};
  border: none;
  margin-top: 25px;
  padding: 10px;
  font-family: ${fonts.types.regular};
  border-radius: 4px;
  background-color: white;
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.regular};
  outline: none;
  text-overflow: ellipsis;
  margin-left: 8px;
  margin-right: 8px;
`

export const NotificationSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  flex-shrink: 0;
`
export const NotificationCheckBox = styled.input`
  display: none;
  &:checked + span {
    &:after {
      opacity: 1;
    }
    &:before {
      transform: translate3d(calc(100% + 4px), 0, 0);
    }
  }
`
export const NotificationSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 30px;
  overflow: hidden;

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms ease-out;
    background-color: #4cda64;
    z-index: 1;
  }

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    transition: transform 200ms ease-in-out;
  }
`
export const TitleText = styled.span`
  font-weight: ${fonts.weights.bold};
  font-size: 16px;
  color: #103f6e;
  margin-left: 8px;
  margin-right: 8px;
`

export const ContactInfoTitle = styled.span`
  font-weight: ${fonts.weights.bold};
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
  margin-right: 8px;
`

export const ContactInfoText = styled.span`
  font-size: ${fonts.sizes.normal};
  color: #fff;
`

export const ContactInfoElemWrapper = styled.div`
  margin-top: 25px;
  margin-left: 8px;
  margin-right: 8px;
`

export const SocialMediaWrapper = styled.div`
  margin-top: auto;
  margin-left: 8px;
  margin-right: 8px;
  @media only screen and (max-width: 795px) {
    margin-top: 25px;
  }
`

export const Button = styled.div`
  margin-top: 20px;
  width: 110;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 33px;
  color: white;
  font-size: 14px;
  box-shadow: 1px 1px 5px rgba(22, 23, 31, 0.7);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
  margin-left: 8px;
  margin-right: 8px;
  @media only screen and (max-width: 411px) {
    width: 100%;
  }
`

export const LiveChatButton = styled.div`
  width: 135px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: white;
  font-size: 14px;
  box-shadow: 1px 1px 5px rgba(22, 23, 31, 0.7);
  cursor: pointer;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background: #7fcc0d;
`
