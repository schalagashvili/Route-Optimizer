import styled from 'styled-components'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export const PageWrap = styled.div`
  width: 100%;
  display: flex;
`
export const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #b5b8b8;
    outline: 1px solid slategrey;
  }
`
export const ProfileSettingsContainer = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 50px 0;
`
export const SettingsCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${colors.bgWhite};
  margin-bottom: 20px;
  box-shadow: ${colors.primaryBoxShadow};
`
export const CardInfoWrap = styled.div`
  height: 100%;
  padding: 20px 20px 0 20px;
`
export const InfoText = styled.span`
  font-weight: ${fonts.weights.bold};
  font-size: 16px;
`
export const SettingsSave = styled.div`
  border-top: 1px solid lightgray;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`
export const SaveButton = styled.button`
  border: none;
  padding: 0 20px;
  outline: none;
  color: white;
  height: 30px;
  box-shadow: 0 1px 2px 0 rgba(37, 88, 55, 0.5);
  cursor: pointer;
  letter-spacing: 1px;
  border-radius: 20px;
  font-weight: ${fonts.weights.bold};
  background-image: linear-gradient(to right, #16bddf, ${colors.primaryBrand});
`
