import gql from 'graphql-tag'

export default gql`
  mutation saveStartstartLocation($startLocation: String!) {
    saveStartLocation(startLocation: $startLocation) @client {
      id
    }
  }
`
