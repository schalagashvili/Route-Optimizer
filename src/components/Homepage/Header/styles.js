import styled from 'styled-components'
import colors from '../../../styles/colors'

export const MainWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 40px;
`

export const MenuItems = styled.div`
  display: flex;
  color: white;
`

export const MenuItem = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 0 15px;
  height: 20px;
  padding: 0 2px 5px;
  cursor: pointer;
  text-shadow: 1px 1px 40px rgba(22, 23, 31, 0.7);
  border-bottom: 2px solid transparent;
  &:hover {
    border-bottom: 2px solid white;
  }
  a {
    color: #ffffff;
    text-decoration: none;
  }
`

export const Dropdown = styled.div`
  border-radius: 4px;
  display: none;
  flex-direction: column;
  background-color: white;
  position: absolute;
  margin-top: 6px;
  font-size: 13px;
  color: ${colors.primaryText};
  padding: 10px;
`

export const DropdownItem = styled.div`
  padding: 2px;
  &:hover {
    color: ${colors.primaryBrand};
    cursor: pointer;
  }
`

export const SelectedLanugage = styled.div`
  cursor: pointer;
  display: flex;
  width: 100%;
  font-weight: bold;
  margin-right: 15px;
`

export const FocusArea = styled.div`
  outline: none;
`
