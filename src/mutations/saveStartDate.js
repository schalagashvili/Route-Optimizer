import gql from 'graphql-tag'

export default gql`
  mutation saveStartDate($startDate: String!) {
    saveStartDate(startDate: $startDate) @client {
      id
    }
  }
`
