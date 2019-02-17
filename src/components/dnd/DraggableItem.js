import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
  border: 1px solid red;
`

export default class Task extends React.Component {
  state = {}

  render() {
    const { DraggableItem, imgURL, day, index } = this.props

    return (
      <Draggable draggableId={day.id} index={index}>
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            innerRef={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <DraggableItem imageURL={imgURL} paddingLeft noBorderRadius />
          </Container>
        )}
      </Draggable>
    )
  }
}
