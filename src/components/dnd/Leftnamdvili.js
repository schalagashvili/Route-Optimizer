import React, { Component } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import transport from '../../assets/images/transport.png'
import {
  Transport,
  Time,
  TimeWrapper,
  Edit,
  TransportationTime,
  TransportationDistance,
  TransportationPrice,
  TransportWrapper,
  TtransportEdit
} from './styles'
import { TaxiIcon } from '../../assets/icons'
import day from '../../assets/images/day.png'
import transport2 from '../../assets/images/transportImg.png'

const getItemStyle = (isDragging, draggableStyle, index) => ({
  userSelect: 'none',
  minHeight: 120,
  margin: `70px 0 ${8}px 0`,
  marginTop: index === 0 ? '0' : '70px',
  borderRadius: '4px',
  background: 'white',
  boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  padding: '0 8px 20px 8px',
  maxWidth: 700,
  minHeight: '30vh',
  margin: 'auto'
})

class RightDrop extends Component {
  state = {
    dayTwoIsShowing: false,
    showTransport: false,
    day: 1,
    dayTime: 10,
    showPlaceholder: true
  }

  render() {
    const { items, droppableId, listIndex, date, listId, list } = this.props
    return (
      <Droppable key={`list-droppable-${listIndex}`} droppableId={droppableId}>
        {(provided, snapshot2) => (
          <div ref={provided.innerRef} style={getListStyle(snapshot2.isDraggingOver)}>
            {date}
            <img
              alt="day"
              src={day}
              style={{ width: 131, height: 36, marginBottom: 45, marginLeft: '-45px' }}
            />
            <div
              style={{
                maxWidth: 700,
                height: 120,
                border: '2px dashed silver',
                borderRadius: 4,
                position: 'absolute',
                width: '97.5%',
                display: !this.state.showPlaceholder ? 'none' : 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              Drag & Drop Flights / Hotels / Attractions / Restaurants
              <div
                style={{
                  height: 85,
                  position: 'absolute',
                  borderLeft: '2px dashed silver',
                  top: '-85px',
                  left: '40px',
                  zIndex: '-1',
                  display: !this.state.showPlaceholder ? 'none' : 'block'
                }}
              />
            </div>
            {snapshot2.isDraggingOver &&
              this.state.showPlaceholder &&
              this.setState({ showPlaceholder: false })}
            {/* {console.log(list)} */}
            {list &&
              list.map((Item, index) => (
                <Draggable key={Item.id} draggableId={Item.id} index={index}>
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style,
                          index
                        )}
                      >
                        {Item.category ? (
                          <div style={{ position: 'relative' }}>
                            <div
                              style={{
                                height: 150,
                                position: 'absolute',
                                borderLeft: '2px dashed silver',
                                top: '-70px',
                                left: '40px',
                                zIndex: '-1',
                                display:
                                  snapshot2.isDraggingOver || snapshot.isDragging ? 'none' : 'block'
                              }}
                            />
                            <div style={{ position: 'absolute', top: '-50px', left: '80px' }}>
                              {index !== 0 && (
                                <div
                                  style={{
                                    display: snapshot.isDragging ? 'none' : 'flex',
                                    alignItems: 'center'
                                  }}
                                >
                                  <TaxiIcon width={28} height={28} color="gray" />
                                  <div style={{ position: 'relative' }}>
                                    <div
                                      style={{
                                        color: '#00b2d6',
                                        marginLeft: 15,
                                        marginRight: 15,
                                        cursor: 'pointer'
                                      }}
                                      onClick={() =>
                                        this.setState(prevState => ({
                                          showTransport: !prevState.showTransport
                                        }))
                                      }
                                    >
                                      Edit
                                    </div>
                                    <img
                                      src={transport2}
                                      alt="fds"
                                      style={{
                                        position: 'absolute',
                                        top: 20,
                                        left: 16,
                                        width: 265,
                                        boxShadow: '0 15px 20px 0 rgba(0,0,0,0.15)',
                                        zIndex: 5,
                                        display: this.state.showTransport ? 'block' : 'none'
                                      }}
                                    />
                                  </div>
                                  <div> 15 km /</div>
                                  <TransportationTime>30 min /</TransportationTime>
                                  <div style={{ color: 'red', marginLeft: 15 }}>$ 100</div>
                                </div>
                              )}
                              {/* <TtransportEdit>Edit</TtransportEdit> */}
                              {/* <TransportationPrice>$ 100 </TransportationPrice> */}
                            </div>
                            <TimeWrapper>
                              <Time>15 : 40</Time>
                              {!Item.date && <Edit>Edit</Edit>}

                              <Time>16 : 10</Time>
                            </TimeWrapper>
                            <Item.category imageURL={Item.img} paddingLeft noBorderRadius />
                          </div>
                        ) : (
                          <div style={{ textAlign: 'center', lineHeight: '110px' }}>
                            Drop Placeholder
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    )
  }
}

export default RightDrop

// import React, { Component } from 'react'
// import { Droppable, Draggable } from 'react-beautiful-dnd'
// import transport from '../../assets/images/transport.png'
// import {
//   Transport,
//   Time,
//   TimeWrapper,
//   Edit,
//   TransportationTime,
//   TransportationDistance,
//   TransportationPrice,
//   TransportWrapper,
//   TtransportEdit
// } from './styles'
// import { TaxiIcon } from '../../assets/icons'
// import day from '../../assets/images/day.png'
// import transport2 from '../../assets/images/transportImg.png'

// const getItemStyle = (isDragging, draggableStyle, index) => ({
//   userSelect: 'none',
//   minHeight: 120,
//   margin: `70px 0 ${8}px 0`,
//   marginTop: index === 0 ? '0' : '70px',
//   borderRadius: '4px',
//   background: 'white',
//   boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
//   ...draggableStyle
// })

// const getListStyle = isDraggingOver => ({
//   padding: '0 8px 20px 8px',
//   maxWidth: 700,
//   overflow: 'hidden',
//   minHeight: '30vh',
//   margin: 'auto'
// })

// class RightDrop extends Component {
//   state = {
//     dayTwoIsShowing: false,
//     showTransport: false,
//     day: 1,
//     dayTime: 10,
//     showPlaceholder: true
//   }

//   dayHeader = (items, index, time) => {
//     let dayTime = 0
//     // console.log(items)
//     return items.map(item => {
//       dayTime += item.time
//       // console.log(dayTime - item.time)
//       if (dayTime >= 20) {
//         // console.log('agia')
//         return (
//           <img
//             alt="day"
//             src={day}
//             style={{ width: 131, height: 36, marginTop: 25, marginLeft: 10 }}
//           />
//         )
//       }
//     })
//   }

//   render() {
//     const { items, days, droppableId } = this.props
//     return (
//       <Droppable droppableId={droppableId}>
//         {(provided, snapshot2) => (
//           <div ref={provided.innerRef} style={getListStyle(snapshot2.isDraggingOver)}>
//             <img alt="day" src={day} style={{ width: 131, height: 36, marginBottom: 45 }} />
//             <div
//               style={{
//                 maxWidth: 700,
//                 height: 120,
//                 border: '2px dashed silver',
//                 borderRadius: 4,
//                 position: 'absolute',
//                 width: '97.5%',
//                 display: !this.state.showPlaceholder ? 'none' : 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center'
//               }}
//             >
//               Drag & Drop Flights / Hotels / Attractions / Restaurants
//               <div
//                 style={{
//                   height: 85,
//                   position: 'absolute',
//                   borderLeft: '2px dashed silver',
//                   top: '-85px',
//                   left: '40px',
//                   zIndex: '-1',
//                   display: !this.state.showPlaceholder ? 'none' : 'block'
//                 }}
//               />
//             </div>
//             {snapshot2.isDraggingOver &&
//               this.state.showPlaceholder &&
//               this.setState({ showPlaceholder: false })}
//             {items.map((Item, index) => (
//               <Draggable key={Item.id} draggableId={Item.id} index={index}>
//                 {(provided, snapshot) => (
//                   <div>
//                     {this.dayHeader(items, index, Item.time)}
//                     <div
//                       ref={provided.innerRef}
//                       {...provided.draggableProps}
//                       {...provided.dragHandleProps}
//                       style={getItemStyle(
//                         snapshot.isDragging,
//                         provided.draggableProps.style,
//                         index
//                       )}
//                     >
//                       {Item.ccategory ? (
//                         <div style={{ position: 'relative' }}>
//                           <div
//                             style={{
//                               height: 150,
//                               position: 'absolute',
//                               borderLeft: '2px dashed silver',
//                               top: '-90px',
//                               left: '40px',
//                               zIndex: '-1',
//                               display:
//                                 snapshot2.isDraggingOver || snapshot.isDragging ? 'none' : 'block'
//                             }}
//                           />
//                           <div style={{ position: 'absolute', top: '-50px', left: '80px' }}>
//                             {index !== 0 && (
//                               <div
//                                 style={{
//                                   display: snapshot.isDragging ? 'none' : 'flex',
//                                   alignItems: 'center'
//                                 }}
//                               >
//                                 <TaxiIcon width={28} height={28} color="gray" />
//                                 <div style={{ position: 'relative' }}>
//                                   <div
//                                     style={{
//                                       color: '#00b2d6',
//                                       marginLeft: 15,
//                                       marginRight: 15,
//                                       cursor: 'pointer'
//                                     }}
//                                     onClick={() =>
//                                       this.setState(prevState => ({
//                                         showTransport: !prevState.showTransport
//                                       }))
//                                     }
//                                   >
//                                     Edit
//                                   </div>
//                                   <img
//                                     src={transport2}
//                                     alt="fds"
//                                     style={{
//                                       position: 'absolute',
//                                       top: 20,
//                                       left: 16,
//                                       width: 265,
//                                       boxShadow: '0 15px 20px 0 rgba(0,0,0,0.15)',
//                                       zIndex: 5,
//                                       display: this.state.showTransport ? 'block' : 'none'
//                                     }}
//                                   />
//                                 </div>
//                                 <div> 15 km /</div>
//                                 <TransportationTime>30 min /</TransportationTime>
//                                 <div style={{ color: 'red', marginLeft: 15 }}>$ 100</div>
//                               </div>
//                             )}
//                             {/* <TtransportEdit>Edit</TtransportEdit> */}
//                             {/* <TransportationPrice>$ 100 </TransportationPrice> */}
//                           </div>
//                           <TimeWrapper>
//                             <Time>15 : 40</Time>
//                             {!Item.date && <Edit>Edit</Edit>}

//                             <Time>16 : 10</Time>
//                           </TimeWrapper>
//                           <Item.ccategory imageURL={Item.img} paddingLeft noBorderRadius />
//                         </div>
//                       ) : (
//                         <div style={{ textAlign: 'center', lineHeight: '110px' }}>
//                           Drop Placeholder
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     )
//   }
// }

// export default RightDrop
