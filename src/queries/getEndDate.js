import gql from 'graphql-tag'

export default gql`
  {
    endDate @client {
      id
      endDate
    }
  }
`
