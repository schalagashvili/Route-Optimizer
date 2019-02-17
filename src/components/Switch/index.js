import React, { Component } from 'react'
import { Switch, CheckBox, Slider } from './styles'

class SwitchSlider extends Component {
  state = {
    enabled: false
  }

  render() {
    const { enabled } = this.state

    return (
      <Switch>
        <CheckBox
          checked={enabled}
          onChange={({ target }) => this.setState({ enabled: target.checked })}
          type="checkbox"
        />
        <Slider />
      </Switch>
    )
  }
}

export default SwitchSlider
