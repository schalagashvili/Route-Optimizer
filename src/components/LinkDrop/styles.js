import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledNavLink = styled(NavLink)`
  color: lightgray;
  font-weight: bold;
  margin-bottom: 10px;
  text-decoration: none;
  text-transform: capitalize;
`

export const LinkDropContainer = styled.div``

export const LinkLabelContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  cursor: pointer;
  user-select: none;
  position: relative;
  background: ${({ active }) => (active ? 'white' : 'initial')};
  box-shadow: ${({ active }) => (active ? '0 4px 8px 0 rgba(37, 88, 55, 0.1)' : 'none')};
  &:hover {
    background: white;
    box-shadow: 0 4px 8px 0 rgba(37, 88, 55, 0.1);
    :after {
      display: block;
    }
  }
  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 4px;
    background: #04b7a8;
    display: ${({ active }) => (active ? 'initial' : 'none')};
  }

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: calc(50% - 2px);
    transform: rotate(${({ active }) => (active ? '-45deg' : '45deg')});
    border-left: 2px solid #555;
    border-bottom: 2px solid #555;
    width: 4px;
    height: 4px;
    transform-origin: center;
    transition: transform 150ms ease;
    display: ${({ withItems }) => (withItems ? 'initial' : 'none')};
  }
`

export const LinkLabelText = styled.span`
  margin-left: 20px;
  font-weight: bold;
  color: #04b7a8;
  user-select: none;
`

export const LinkListContainer = styled.div`
  padding: 20px 30px;
  background: white;
  display: ${({ active }) => (active ? 'block' : 'none')};
  box-shadow: 0 0px 10px 0 rgba(37, 88, 55, 0.3);
`

export const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  border-left: 1px solid lightgray;
  background: white;
`

export const ListItem = styled.li`
  margin-bottom: 10px;
  cursor: pointer;
`
