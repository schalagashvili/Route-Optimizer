import styled from 'styled-components'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import sizes from '../../../styles/sizes'

export const SettingsFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0;
`

export const SettingFormTabContainer = styled.div`
  display: flex;
  @media (max-width: ${sizes.media.tablet}) {
    flex-direction: column;
  }
`

export const SettingsFormTab = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:first-child {
    margin-right: 30px;
  }
  @media (max-width: ${sizes.media.tablet}) {
    &:first-child {
      margin-right: 0;
    }
  }
`

export const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  font-weight: ${fonts.weights.bold};
  font-size: ${fonts.sizes.small};
`

export const LabelFieldContainer = styled.div`
  display: flex;
`

export const DropFiledContainer = styled.div`
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
`

export const InputField = styled.input`
  border: none;
  margin-top: 10px;
  padding: 10px;
  font-family: ${fonts.types.regular};
  border-radius: 4px;
  background-color: white;
  color: ${colors.primaryText};
  font-size: ${fonts.sizes.regular};
  outline: none;
  text-overflow: ellipsis;
  box-shadow: ${colors.primaryBoxShadow};
`

export const NotificationFieldContainer = styled.div`
  display: flex;
  @media (max-width: ${sizes.media.tablet}) {
    flex-direction: column;
  }
`
export const NotificationFieldWrap = styled.div`
  display: flex;
  margin-top: 15px;
  padding: 15px 0;
  flex: 1;
  &:first-child {
    margin-right: 30px;
  }
  @media (max-width: ${sizes.media.tablet}) {
    &:first-child {
      margin-right: 0;
    }
  }
`
export const NotificationField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NotifcationInfo = styled.div`
  display: flex;
  flex-direction: column;
`
export const NotificationTitle = styled.span`
  margin: 5px 0;
  font-weight: ${fonts.weights.bold};
`
export const NotificationDesc = styled.span`
  color: gray;
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
