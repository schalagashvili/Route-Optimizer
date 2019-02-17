import gql from 'graphql-tag'

export default gql`
  {
    startDate @client {
      id
      startDate
    }
  }
`
