import React from 'react'
import {
  FilterWrapper,
  FilterTitle,
  ColumnWrapper,
  Checkbox,
  Button,
  FilterBox,
  CloseButton,
  ButtonsWrapper
} from './styles'

const Filter = props => (
  <FilterWrapper>
    <FilterBox id="filterBox">
      <ColumnWrapper>
        <FilterTitle>Your Budget</FilterTitle>
        <div>
          <input type="checkbox" />
          GEL 0 - GEL 140 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 140 - GEL 240 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 340 - GEL 440 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 500 - GEL 640 per night
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <FilterTitle>Start Rating</FilterTitle>
        <div>
          <input type="checkbox" />5 Stars
        </div>
        <div>
          <input type="checkbox" />4 Stars
        </div>
        <div>
          <input type="checkbox" />3 Stars
        </div>
        <div>
          <input type="checkbox" />2 Stars
        </div>
        <div>
          <input type="checkbox" />1 Star
        </div>
        <div>
          <input type="checkbox" />
          Unrated
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <FilterTitle>Meals</FilterTitle>
        <div>
          <input type="checkbox" />
          Breakfast included
        </div>
        <div>
          <input type="checkbox" />
          Breakfast & dinner included
        </div>
        <div>
          <input type="checkbox" />
          All meals included
        </div>
        <div>
          <input type="checkbox" />
          All-inclusive
        </div>
        <div>
          <input type="checkbox" />
          Kitchen facilities
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <FilterTitle>Popular Filters</FilterTitle>
        <div>
          <input type="checkbox" />
          GEL 0 - GEL 140 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 140 - GEL 240 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 340 - GEL 440 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 500 - GEL 640 per night
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <FilterTitle>Your Budget</FilterTitle>
        <div>
          <input type="checkbox" />
          GEL 0 - GEL 140 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 140 - GEL 240 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 340 - GEL 440 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 500 - GEL 640 per night
        </div>
      </ColumnWrapper>
      <ColumnWrapper>
        <FilterTitle>Your Budget</FilterTitle>
        <div>
          <input type="checkbox" />
          GEL 0 - GEL 140 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 140 - GEL 240 per night
        </div>
        <div>
          <input type="checkbox" />
          GEL 340 - GEL 440 per night
        </div>
        <div>
          <Checkbox type="checkbox" />
          GEL 500 - GEL 1640 per night
        </div>
      </ColumnWrapper>
      <ButtonsWrapper>
        <CloseButton onClick={() => props.closeHandler('filterBox')}>Close</CloseButton>
        <Button>Save</Button>
      </ButtonsWrapper>
    </FilterBox>
  </FilterWrapper>
)

export default Filter
