import React from 'react'
import { MainWrapper, MenuItem, SocialsWrapper, SocialIcon } from './styles'
import { FbIcon, TwitterIcon } from '../../../assets/icons'

const HomepageHeader = () => (
  <MainWrapper>
    <SocialsWrapper>
      <SocialIcon>
        <FbIcon width={18} height={18} color="white" />
      </SocialIcon>
      <SocialIcon>
        <TwitterIcon width={20} height={20} color="white" />
      </SocialIcon>
    </SocialsWrapper>
    <MenuItem>Privacy Policy</MenuItem>
    <MenuItem>Terms of Use</MenuItem>
    <MenuItem>Help</MenuItem>
  </MainWrapper>
)

export default HomepageHeader
