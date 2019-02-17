import gql from 'graphql-tag'

export default gql`
  mutation saveEndLocation($endLocation: String!) {
    saveEndLocation(endLocation: $endLocation) @client {
      id
    }
  }
`
