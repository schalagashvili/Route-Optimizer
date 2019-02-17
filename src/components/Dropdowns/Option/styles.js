import styled from 'styled-components'
import colors from '../../../styles/colors'

export const DropContainer = styled.div`
  border-radius: 4px;
  display: flex;
  text-align: ${({ align }) => (align ? `${align}` : 'center')} !important;
  align-self: flex-start;
  width: ${({ width }) => (width ? `${width}` : '150px')} !important;
  box-shadow: ${colors.primaryBoxShadow};
`

export const DropOptionContainer = styled.div`
  width: inherit !important;
  position: relative;
`

export const DropSelected = styled.div`
  background-color: white;
`

export const DropSelectedValue = styled.li`
  cursor: pointer;
  flex-shrink: 0;
  padding: 10px;
  text-align: inherit;
  list-style: none;
  user-select: none;
`

export const DropArrow = styled.div`
  flex-shrink: 0;
  cursor: pointer;
  width: 30px;
  height: auto;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    left: calc(50% - 3px);
    top: calc(50% - 3px);
    height: 6px;
    width: 6px;
    border-top: 2px solid #444;
    border-left: 2px solid #444;
    transition: transform 150ms ease-out;
    transform-origin: center;
    transform: rotate(${({ show }) => (show ? '90' : '180')}deg);
  }
`
export const DropList = styled.ul`
  list-style: none;
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  box-sizing: content-box;
  border-radius: 4px;
  background-color: white;
  max-height: 200px;
  overflow-y: auto;
  transition: z-index 200ms ${({ show }) => (show ? 'step-start' : 'step-end')},
    opacity 175ms ease-out, transform 200ms ease-out;
  ::-webkit-scrollbar {
    width: 4px;
    background: none;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: lightgray;
  }
  transform: translate3d(0, ${({ show }) => (show ? '0' : '-4px')}, 0);
  opacity: ${({ show }) => (show ? '1' : '0')};
  z-index: ${({ show }) => (show ? '100' : '-1')};
  box-shadow: ${colors.primaryBoxShadow};
`
export const DropItem = styled.li`
  cursor: pointer;
  flex-shrink: 0;
  padding: 10px;
  text-align: inherit;
  user-select: none;
  &:hover {
    background-color: #f2f2f2;
  }
`
