import gql from 'graphql-tag'

export default gql`
  {
    startLocation @client {
      id
      startLocation
    }
  }
`
