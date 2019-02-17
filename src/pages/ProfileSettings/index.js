import React, { Component } from 'react'

import ProfileForm from '../../components/Forms/ProfileForm'
import PasswordForm from '../../components/Forms/PasswordForm'
import BillingForm from '../../components/Forms/BillingForm'

import {
  PageWrap,
  ContentContainer,
  ProfileSettingsContainer,
  SettingsCard,
  CardInfoWrap,
  InfoText,
  SettingsSave,
  SaveButton
} from './styles'

class ProfileSettings extends Component {
  state = {}

  render() {
    return (
      <PageWrap>
        <ContentContainer>
          <ProfileSettingsContainer>
            <SettingsCard>
              <CardInfoWrap>
                <InfoText>Profile Information</InfoText>
                <ProfileForm />
              </CardInfoWrap>
              <SettingsSave>
                <SaveButton>Save</SaveButton>
              </SettingsSave>
            </SettingsCard>
            <SettingsCard>
              <CardInfoWrap>
                <InfoText>Change Password</InfoText>
                <PasswordForm />
              </CardInfoWrap>
              <SettingsSave>
                <SaveButton>Save</SaveButton>
              </SettingsSave>
            </SettingsCard>
            <SettingsCard>
              <CardInfoWrap>
                <InfoText>Billing</InfoText>
                <BillingForm />
              </CardInfoWrap>
              <SettingsSave>
                <SaveButton>Save</SaveButton>
              </SettingsSave>
            </SettingsCard>
          </ProfileSettingsContainer>
        </ContentContainer>
      </PageWrap>
    )
  }
}

export default ProfileSettings
