// import React, { Component } from 'react'
// import { DragDropContext } from 'react-beautiful-dnd'

// // fake data generator
// const getItems = (count, offset = 0) =>
//   Array.from({ length: count }, (v, k) => k).map(k => ({
//     id: `item-${k + offset}`,
//     content: `item ${k + offset}`
//   }))

// // a little function to help us with reordering the result
// const reorder = (list, startIndex, endIndex) => {
//   const result = Array.from(list)
//   const [removed] = result.splice(startIndex, 1)
//   result.splice(endIndex, 0, removed)

//   return result
// }

// /**
//  * Moves an item from one list to another list.
//  */
// const move = (source, destination, droppableSource, droppableDestination) => {
//   const sourceClone = Array.from(source)
//   const destClone = Array.from(destination)
//   const [removed] = sourceClone.splice(droppableSource.index, 1)

//   destClone.splice(droppableDestination.index, 0, removed)

//   const result = {}
//   result[droppableSource.droppableId] = sourceClone
//   result[droppableDestination.droppableId] = destClone

//   return result
// }

// const grid = 8

// const getListStyle = isDraggingOver => ({
//   background: isDraggingOver ? 'lightblue' : 'lightgrey',
//   padding: grid,
//   width: 550
// })

// class App extends Component {
//   state = {
//     items: getItems(10),
//     selected: getItems(5, 10)
//   }

//   /**
//    * A semi-generic way to handle multiple lists. Matches
//    * the IDs of the droppable container to the names of the
//    * source arrays stored in the state.
//    */
//   id2List = {
//     droppable: 'items',
//     droppable2: 'selected'
//   }

//   // Normally you would want to split things out into separate components.
//   // But in this example everything is just done in one place for simplicity
//   render() {
//     return (
//       <DragDropContext onDragEnd={this.onDragEnd}>
//         <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }} />
//       </DragDropContext>
//     )
//   }
// }

// export default App
