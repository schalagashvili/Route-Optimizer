export const defaults = {
  todos: [],
  location: '',
  visibilityFilter: 'SHOW_ALL'
}

export const resolvers = {
  Mutation: {
    // addTodo: (_, { text }, { cache }) => {
    //   const query = gql`
    //     query GetTodos {
    //       todos @client {
    //         id
    //         text
    //         completed
    //       }
    //     }
    //   `
    //   const previous = cache.readQuery({ query })
    //   const newTodo = {
    //     id: nextTodoId++,
    //     text,
    //     completed: false,
    //     __typename: 'TodoItem'
    //   }
    //   const data = {
    //     todos: previous.todos.concat([newTodo])
    //   }
    //   cache.writeData({ data })
    //   return newTodo
    // },
    saveStartLocation: (_, { startLocation }, { cache }) => {
      const newLocation = {
        id: 321,
        startLocation,
        __typename: 'startLocation'
      }
      const data = {
        startLocation: newLocation
      }
      cache.writeData({ data })
      return newLocation
    },
    saveEndLocation: (_, { endLocation }, { cache }) => {
      const newLocation = {
        id: 321,
        endLocation,
        __typename: 'endLocation'
      }
      const data = {
        endLocation: newLocation
      }
      cache.writeData({ data })
      return newLocation
    },
    saveStartDate: (_, { startDate }, { cache }) => {
      const newDate = {
        id: 321,
        startDate,
        __typename: 'startDate'
      }
      cache.writeData({ startDate: newDate })
      return newDate
    },
    saveEndDate: (_, { endDate }, { cache }) => {
      const newDate = {
        id: 321,
        endDate,
        __typename: 'endDate'
      }
      const data = {
        endDate: newDate
      }
      cache.writeData({ data })
      return newDate
    }
  }
}
