import React from 'react'
import styled from 'styled-components'
import { Droppable } from 'react-beautiful-dnd'
import DraggableItem from './DraggableItem'

const Container = styled.div`
  margin: 8px;
  display: flex;
  flex-direction: column;
`

const Title = styled.h3`
  padding: 8px;
`

const Day = styled.div`
  padding: 8px;
  min-height: 100px;
  background-color: lightgreen;
`

export default class Column extends React.Component {
  state = {}

  render() {
    const { column, days } = this.props

    return (
      <Container>
        <Title>{column.title}</Title>
        <Droppable droppableId={column.id} type="task">
          {(provided, snapshot) => (
            <Day
              innerRef={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {days.map((day, index) => (
                <div>
                  <DraggableItem
                    key={day.id}
                    day={day}
                    index={index}
                    DraggableItem={day.category}
                    imgURL={day.img}
                  />
                </div>
              ))}
              {provided.placeholder}
            </Day>
          )}
        </Droppable>
      </Container>
    )
  }
}
