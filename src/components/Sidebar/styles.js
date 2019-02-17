import styled from 'styled-components'
import colors from '../../styles/colors'

export const SidebarContainer = styled.div`
  height: 100vh;
  flex-shrink: 0;
  width: 300px;
  padding: 50px 30px;
`

export const LinkContainer = styled.ul`
  display: flex;
  background-color: ${colors.bgLightGray};
  box-shadow: ${colors.primaryBoxShadow};
  flex-direction: column;
  padding: 20px 0;
  border-radius: 4px;
`
