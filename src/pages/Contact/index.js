import React, { Component } from 'react'
import { MainWrapper, Background, ContentContainer, MainCard, ContactContainer } from './styles'
import bg1 from '../../assets/images/bg1.jpg'
import { HomepageHeader, HomepageFooter } from '../../components'
import ContactForm from '../../components/Forms/ContactForm'

class Contact extends Component {
  state = {}

  render() {
    const bigScreen = window.innerWidth > 600 && true

    return (
      <MainWrapper>
        <Background id="bgImage" bgImage={bg1} />
        <HomepageHeader />
        <ContentContainer>
          <ContactContainer>
            <MainCard>
              <ContactForm />
            </MainCard>
          </ContactContainer>
        </ContentContainer>
        {bigScreen && <HomepageFooter />}
      </MainWrapper>
    )
  }
}

export default Contact
