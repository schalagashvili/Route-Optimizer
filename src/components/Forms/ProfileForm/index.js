import React, { Component } from 'react'
import {
  SettingsFormContainer,
  SettingFormTabContainer,
  SettingsFormTab,
  LabelField,
  LabelFieldContainer,
  DropFiledContainer,
  InputField,
  NotificationFieldContainer,
  NotificationFieldWrap,
  NotificationField,
  NotifcationInfo,
  NotificationTitle,
  NotificationDesc
} from './styles'

import { PictureUpload, OptionDropdown, SwitchSlider } from '../..'

const staticData = {
  monthDay: [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31
  ],
  monthIndex: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  year: (() => {
    const d = new Date()
    const fullYear = d.getFullYear()
    return Array(100)
      .fill()
      .map((e, i) => fullYear - i)
  })(),
  titleList: ['Mr', 'Mrs', 'Ms'],
  countryList: [
    'Afghanistan',
    'Åland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bangladesh',
    'Barbados',
    'Bahamas',
    'Bahrain',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'British Indian Ocean Territory',
    'British Virgin Islands',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burma',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo-Brazzaville',
    'Congo-Kinshasa',
    'Cook Islands',
    'Costa Rica',
    'Croatia',
    'Curaçao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor',
    'Ecuador',
    'El Salvador',
    'Egypt',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Falkland Islands',
    'Faroe Islands',
    'Federated States of Micronesia',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Lands',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Heard and McDonald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jersey',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macau',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'MalDropFiledContaineres',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn Islands',
    'Poland',
    'Portugal',
    'Puerto Rico',
    'Qatar',
    'Réunion',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Barthélemy',
    'Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin',
    'Saint Pierre and Miquelon',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'São Tomé and Príncipe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia',
    'South Korea',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Sweden',
    'Swaziland',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Vietnam',
    'Venezuela',
    'Wallis and Futuna',
    'Western Sahara',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]
}

class ProfileForm extends Component {
  state = {
    emailField: '',
    birthDateField: '',
    titleField: '',
    firstNameField: '',
    lastNameField: '',
    numberField: '',
    countryField: ''
  }

  render() {
    return (
      <SettingsFormContainer>
        <SettingFormTabContainer>
          <SettingsFormTab>
            <LabelField>
              <PictureUpload />
            </LabelField>
            <LabelField>
              Email
              <InputField
                onChange={({ target }) => this.setState({ emailField: target.value })}
                name="email"
                type="email"
              />
            </LabelField>
            <LabelField>
              Birth Date
              <DropFiledContainer>
                <OptionDropdown
                  align="center"
                  width="130px"
                  optionDefault={1}
                  optionData={staticData.monthDay}
                />
                <OptionDropdown
                  align="center"
                  width="130px"
                  optionDefault={1}
                  optionData={staticData.monthIndex}
                />
                <OptionDropdown
                  align="center"
                  width="130px"
                  optionDefault={2014}
                  optionData={staticData.year}
                />
              </DropFiledContainer>
            </LabelField>
          </SettingsFormTab>
          <SettingsFormTab>
            <LabelFieldContainer>
              <LabelField>
                Title
                <DropFiledContainer>
                  <OptionDropdown
                    align="left"
                    width="130px"
                    optionDefault="Mr"
                    optionData={staticData.titleList}
                  />
                </DropFiledContainer>
              </LabelField>
              <LabelField style={{ width: '100%', marginLeft: '20px' }}>
                First Name
                <InputField
                  onChange={({ target }) => this.setState({ firstNameField: target.value })}
                  name="first_name"
                  type="text"
                />
              </LabelField>
            </LabelFieldContainer>
            <LabelField>
              Last Name
              <InputField
                onChange={({ target }) => this.setState({ lastNameField: target.value })}
                name="last_name"
                type="text"
              />
            </LabelField>
            <LabelField>
              Number
              <InputField
                onChange={({ target }) => this.setState({ numberField: target.value })}
                name="phone_number"
                type="text"
              />
            </LabelField>
            <LabelField>
              Country
              <DropFiledContainer>
                <OptionDropdown
                  align="center"
                  width="100%"
                  optionDefault="Georgia"
                  optionData={staticData.countryList}
                />
              </DropFiledContainer>
            </LabelField>
          </SettingsFormTab>
        </SettingFormTabContainer>
        <NotificationFieldContainer>
          <NotificationFieldWrap>
            <NotificationField>
              <NotifcationInfo>
                <NotificationTitle>Sms Notifications</NotificationTitle>
                <NotificationDesc>Receive weekly sms notifications</NotificationDesc>
              </NotifcationInfo>
              <SwitchSlider />
            </NotificationField>
          </NotificationFieldWrap>
          <NotificationFieldWrap>
            <NotificationField>
              <NotifcationInfo>
                <NotificationTitle>Email Notifications</NotificationTitle>
                <NotificationDesc>Receive weekly email notifications</NotificationDesc>
              </NotifcationInfo>
              <SwitchSlider />
            </NotificationField>
          </NotificationFieldWrap>
        </NotificationFieldContainer>
      </SettingsFormContainer>
    )
  }
}

export default ProfileForm
