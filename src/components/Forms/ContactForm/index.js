import React, { Component } from 'react'
import {
  MainFormWrap,
  InputField,
  TitleText,
  TextAreaField,
  Button,
  ContactInfoTitle,
  ContactInfoText,
  ContactInfoElemWrapper,
  LiveChatButton,
  SocialMediaWrapper
} from './styles'
import { PinIcon, TwitterIcon } from '../../../assets/icons'

class ContactForm extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  setFormField(fieldName, value) {
    return this.setState(prevState => ({
      ...prevState,
      form: { ...prevState.form, [fieldName]: value }
    }))
  }

  render() {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', overflow: 'hidden', borderRadius: 4 }}>
        <div style={{ flex: '1 67%', display: 'flex', flexDirection: 'column', padding: '20px' }}>
          <TitleText>Send us a Message</TitleText>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <InputField
              onChange={({ target }) => this.setFormField('firstName', target.value)}
              name="firstName"
              type="text"
              placeholder="First Name"
              style={{ flex: '1 calc(50% - 16px)' }}
            />
            <InputField
              onChange={({ target }) => this.setFormField('lastName', target.value)}
              name="lastName"
              type="text"
              placeholder="Last Name"
              style={{ flex: '1 calc(50% - 16px)' }}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            <InputField
              onChange={({ target }) => this.setFormField('email', target.value)}
              name="email"
              type="text"
              placeholder="Email"
              style={{ flex: '1 calc(50% - 16px)' }}
            />
            <InputField
              onChange={({ target }) => this.setFormField('phone', target.value)}
              name="phone"
              type="text"
              placeholder="Phone"
              style={{ flex: '1 calc(50% - 16px)' }}
            />
          </div>

          <TextAreaField
            onChange={({ target }) => this.setFormField('message', target.value)}
            name="message"
            type="text"
            placeholder="Enter your message here"
            rows="6"
            style={{ resize: 'vertical', maxHeight: '300px' }}
          />

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button>Save</Button>
          </div>
        </div>
        <div
          style={{
            background: '#103f6e',
            flex: '1 33%',
            display: 'flex',
            flexDirection: 'column',
            padding: '35px 35px 20px 35px',
            alignContent: 'center'
          }}
        >
          <ContactInfoTitle>Contact&nbsp;Information</ContactInfoTitle>

          <ContactInfoElemWrapper style={{ display: 'flex', alignItems: 'flex-start' }}>
            <PinIcon color="rgba(255, 255, 255, 0.35)" height={20} width={20} />

            <ContactInfoText style={{ marginLeft: '5px' }}>
              <div>100 Some Place Nice</div>
              <div>Georgia, Tbilisi</div>
            </ContactInfoText>
          </ContactInfoElemWrapper>

          <ContactInfoElemWrapper style={{ display: 'flex', alignItems: 'flex-start' }}>
            <PinIcon color="rgba(255, 255, 255, 0.35)" height={20} width={20} />

            <ContactInfoText style={{ marginLeft: '5px' }}>(+955) 595-008-090</ContactInfoText>
          </ContactInfoElemWrapper>

          <ContactInfoElemWrapper style={{ display: 'flex', alignItems: 'flex-start' }}>
            <PinIcon color="rgba(255, 255, 255, 0.35)" height={20} width={20} />

            <ContactInfoText style={{ marginLeft: '5px' }}>info@tripify.com</ContactInfoText>
          </ContactInfoElemWrapper>

          <ContactInfoElemWrapper style={{ display: 'flex', alignItems: 'flex-start' }}>
            <LiveChatButton>Live Chat</LiveChatButton>
          </ContactInfoElemWrapper>

          <SocialMediaWrapper>
            <TwitterIcon
              color="rgba(255, 255, 255, 0.35)"
              height={20}
              width={20}
              style={{ margin: '0 7px' }}
            />

            <TwitterIcon
              color="rgba(255, 255, 255, 0.35)"
              height={20}
              width={20}
              style={{ margin: '0 7px' }}
            />

            <TwitterIcon
              color="rgba(255, 255, 255, 0.35)"
              height={20}
              width={20}
              style={{ margin: '0 7px' }}
            />
          </SocialMediaWrapper>
        </div>
      </div>
    )
  }
}

export default ContactForm
