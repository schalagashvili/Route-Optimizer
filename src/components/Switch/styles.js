import styled from 'styled-components'

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  flex-shrink: 0;
`
export const CheckBox = styled.input`
  display: none;
  &:checked + span {
    &:after {
      opacity: 1;
    }
    &:before {
      transform: translate3d(calc(100% + 4px), 0, 0);
    }
  }
`
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  border-radius: 30px;
  overflow: hidden;

  &:after {
    position: absolute;
    content: '';
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    opacity: 0;
    transition: opacity 200ms ease-out;
    background-color: #4cda64;
    z-index: 1;
  }

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    border-radius: 50%;
    z-index: 2;
    transition: transform 200ms ease-in-out;
  }
`
