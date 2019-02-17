import React, { Component } from 'react'
import { InputField } from './styles'
import {} from '../../components'
import * as icons from '../../assets/icons'

class IconsPreview extends Component {
  state = { filterText: '' }

  render() {
    const { filterText } = this.state

    return (
      <div style={{ padding: '20px' }}>
        <InputField
          onChange={({ target }) => this.setState({ filterText: target.value })}
          name="current_password"
          placeholder="Name Filter"
          style={{ marginBottom: '20px' }}
        />

        {Object.keys(icons)
          .filter(nextIconKey => nextIconKey.toLowerCase().includes(filterText.toLowerCase()))
          .map(nextIconKey => (
            <div key={nextIconKey}>
              {icons[nextIconKey]({ height: 20, width: 20, color: 'black' })}
              &nbsp;&nbsp;
              {nextIconKey}
            </div>
          ))}
      </div>
    )
  }
}

export default IconsPreview
