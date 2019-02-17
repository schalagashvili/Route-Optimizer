import gql from 'graphql-tag'

export default gql`
  mutation savePersons($adults: Int!, $children: Int!) {
    savePersons(person: $person, children: $children) @client {
      id
    }
  }
`
