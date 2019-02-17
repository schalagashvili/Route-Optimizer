import gql from 'graphql-tag'

export default gql`
  {
    endLocation @client {
      id
      endLocation
    }
  }
`
