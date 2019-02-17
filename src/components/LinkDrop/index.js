import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import {
  StyledNavLink,
  LinkDropContainer,
  LinkLabelContainer,
  LinkLabelText,
  LinkListContainer,
  LinkList
} from './styles'

class LinkDrop extends PureComponent {
  state = {
    active: false
  }

  render() {
    const { icon: Icon, color, label, items, path } = this.props
    const { active } = this.state
    return items ? (
      <LinkDropContainer>
        <LinkLabelContainer
          onClick={() => this.setState({ active: !active })}
          active={active}
          withItems
        >
          <Icon color={color} height={16} width={16} />
          <LinkLabelText>{label}</LinkLabelText>
        </LinkLabelContainer>
        <LinkListContainer active={active}>
          <LinkList>
            {items.map(item => (
              <StyledNavLink activeStyle={{ color: 'gray' }} to={`${path}/${item}`} key={item}>
                {item}
              </StyledNavLink>
            ))}
          </LinkList>
        </LinkListContainer>
      </LinkDropContainer>
    ) : (
      <LinkDropContainer>
        <Link style={{ textDecoration: 'none' }} to={`${path}`}>
          <LinkLabelContainer>
            <Icon color={color} height={16} width={16} />
            <LinkLabelText>{label}</LinkLabelText>
          </LinkLabelContainer>
        </Link>
      </LinkDropContainer>
    )
  }
}

export default LinkDrop
