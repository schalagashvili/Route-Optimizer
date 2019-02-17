import gql from 'graphql-tag'

export default gql`
  mutation saveEndDate($endDate: Date!) {
    saveEndDate(endDate: $endDate) @client {
      id
    }
  }
`
